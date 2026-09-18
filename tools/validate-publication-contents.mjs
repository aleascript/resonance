import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import config from '../publications.config.mjs';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function posixPath(value) {
  return value.split(path.sep).join('/');
}

async function markdownFiles(root) {
  const files = [];

  async function visit(directory) {
    for (const entry of await fs.readdir(directory, {withFileTypes: true})) {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        await visit(absolute);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push(posixPath(path.relative(projectRoot, absolute)));
      }
    }
  }

  await visit(root);
  return files.sort();
}

const errors = [];

for (const [publicationName, publication] of Object.entries(config.publications)) {
  for (const [locale, localeConfig] of Object.entries(publication.locales)) {
    if (!localeConfig.completeCorpus) {
      continue;
    }

    const docsRoot = path.join(projectRoot, 'docs', locale);
    const actual = await markdownFiles(docsRoot);
    const declared = localeConfig.contents.map(posixPath);
    const declaredSet = new Set(declared);

    const missing = actual.filter((source) => !declaredSet.has(source));
    const duplicates = declared.filter((source, index) => declared.indexOf(source) !== index);

    if (missing.length > 0) {
      errors.push(
        `${publicationName}/${locale}: Markdown files missing from the complete corpus:\n` +
          missing.map((source) => `  - ${source}`).join('\n'),
      );
    }

    if (duplicates.length > 0) {
      errors.push(
        `${publicationName}/${locale}: duplicate publication entries:\n` +
          [...new Set(duplicates)].map((source) => `  - ${source}`).join('\n'),
      );
    }
  }
}

if (errors.length > 0) {
  throw new Error(`Publication corpus validation failed:\n\n${errors.join('\n\n')}`);
}

console.log('Publication corpus validation passed.');
