#!/usr/bin/env tsx

/**
 * Interactive file selector for running TypeScript files
 */

import { spawn } from 'child_process';
import { readdir } from 'fs/promises';
import inquirer from 'inquirer';
import { extname, join } from 'path';

interface FileOption {
  name: string;
  value: string;
}

/**
 * Recursively find all TypeScript files in a directory
 */
async function findTsFiles(
  dir: string,
  baseDir: string = dir
): Promise<string[]> {
  const files: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip node_modules and dist directories
      if (
        !entry.name.includes('node_modules') &&
        !entry.name.includes('dist')
      ) {
        files.push(...(await findTsFiles(fullPath, baseDir)));
      }
    } else if (entry.isFile() && extname(entry.name) === '.ts') {
      // Get relative path from base directory
      const relativePath = fullPath.replace(baseDir, '').replace(/^\/+/, '');
      files.push(relativePath);
    }
  }

  return files;
}

/**
 * Run the selected file
 */
function runFile(filePath: string) {
  console.log(`\n🚀 Running: ${filePath}\n`);

  const tsxProcess = spawn('tsx', ['watch', join('src', filePath)], {
    stdio: 'inherit',
    shell: true,
  });

  tsxProcess.on('error', (error) => {
    console.error('Error running file:', error);
  });

  process.on('SIGINT', () => {
    tsxProcess.kill();
    process.exit(0);
  });
}

/**
 * Main function
 */
async function main() {
  try {
    // Handle Ctrl+C gracefully
    process.on('SIGINT', () => {
      console.log('\n👋 Goodbye!');
      process.exit(0);
    });

    // Find all TypeScript files in src directory
    const tsFiles = await findTsFiles('src');

    if (tsFiles.length === 0) {
      console.log('No TypeScript files found in src/');
      process.exit(1);
    }

    // Create options for inquirer
    const options: FileOption[] = tsFiles.map((file) => ({
      name: file,
      value: file,
    }));

    // Add an exit option
    options.push({
      name: 'Exit',
      value: 'exit',
    });

    // Prompt user to select a file
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedFile',
        message: 'Select a file to run:',
        choices: options,
      },
    ]);

    // Handle selection
    if (answer.selectedFile === 'exit') {
      console.log('👋 Goodbye!');
      process.exit(0);
    } else {
      runFile(answer.selectedFile);
    }
  } catch (error) {
    // Ignore user cancellation
    if (
      error &&
      typeof error === 'object' &&
      'name' in error &&
      error.name === 'ExitPromptError'
    ) {
      process.exit(0);
    }
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
