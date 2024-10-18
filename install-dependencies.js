const { exec } = require('child_process');

exec('yarn install', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error installing dependencies: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
});
