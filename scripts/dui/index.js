#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import mustache from 'mustache';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .command('add <type> <name>')
  .description('Add a new component')
  .action(action);

program.parse(process.argv);

function action(type, name) {
  const templatesDir = path.join(__dirname, 'templates', type);
  const targetDir = path.join(process.cwd(), 'packages', `${type}s`, name);

  if (!fs.existsSync(templatesDir)) {
    console.error(`ERROR: Template not found: ${type}`);
    process.exit(1);
  }

  if (fs.existsSync(targetDir)) {
    console.error(
      'ERROR: A component with same name already exists, try renaming it or delete it',
    );
    process.exit(1);
  }

  fs.copySync(templatesDir, targetDir);
  replacePlaceholdersAndRenameFiles(targetDir, {
    name,
    Name: capitalize(name),
  });

  console.log(`Component ${name} created successfully at ${targetDir}`);
}

function replacePlaceholdersAndRenameFiles(dir, replacements) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const newFileName = mustache.render(file, replacements);

    const adjustedFilename = newFileName.replace('.template', '');

    const newFilePath = path.join(dir, adjustedFilename);

    if (fs.statSync(filePath).isDirectory()) {
      replacePlaceholdersAndRenameFiles(filePath, replacements);
      fs.renameSync(filePath, newFilePath);
    } else {
      const fileRead = fs.readFileSync(filePath, 'utf-8');
      const content = mustache.render(fileRead, replacements);
      fs.writeFileSync(newFilePath, content, 'utf-8');
      if (filePath !== newFilePath) {
        fs.unlinkSync(filePath);
      }
    }
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
