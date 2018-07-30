const { ncp } = require('ncp');
const path = require('path');
const packager = require('../../../package.json');

const description = 'Generate a CLI Build folder into your current directory';

const command = (directoryName) => {
    const root = process.cwd();
    ncp(path.join(__dirname, '..', '..', '..', 'templates', 'cli'), path.join(root, directoryName), () => {
        console.log(`Your CLI directory has been built in "${root}/${directoryName}"`);
    });
};

const documentation = () => {
    console.info(`
Generate a CLI Build folder into your current directory

Command:
${Object.keys(packager.bin).pop()} create <YOUR-DIRECTORY-NAME>
    `);
};

module.exports = {
    command,
    description,
    documentation,
};
