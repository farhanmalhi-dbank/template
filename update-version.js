const fs = require('fs');
const { inc } = require('semver');

const packageJson = JSON.parse(fs.readFileSync('./package.json'));

const versionPartToUpdate = process.argv[2];

if (!['major', 'minor', 'patch'].includes(versionPartToUpdate)) {
  process.exit(1);
}

packageJson.version = inc(packageJson.version, versionPartToUpdate);

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
