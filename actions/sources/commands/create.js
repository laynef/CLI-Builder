const { ncp } = require('ncp');
const prompt = require('prompt');
const fs = require('fs');
const path = require('path');
const packager = require('../../../package.json');

const description = 'Generate a CLI Build folder into your current directory';

const command = (directoryName) => {
    const root = process.cwd();
    ncp(path.join(__dirname, '..', '..', '..', 'templates', 'cli'), path.join(root, directoryName));
    prompt.start();
    prompt.get({
        properties: {
            'name': { required: true },
            'title': { required: true },
            'commandName': { required: true },
        },
    }, function (err, result) {
        if (err) {
            console.error(`Error with your CLI creation.`);
        } else {
            const object = {};
            let pack = require('../../../package.json');
            pack.name = result.name;
            pack.title = result.title;
            delete pack.repository;
            delete pack.bugs;
            delete pack.homepage;
            object[result.commandName] = './actions/index.js';
            pack.bin = object;
            fs.writeFileSync(path.join(root, directoryName, 'package.json'), JSON.stringify(pack, null, 4));
            console.log(`Your CLI directory has been built in "${root}/${directoryName}"`);
        }
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
