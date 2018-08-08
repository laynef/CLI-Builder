const fs = require('fs');
const path = require('path');
const packager = require('../../../package.json');
const { kebabCase } = require('lodash');

const keyMapOfCommands = fs.readdirSync(path.join(__dirname)).map(e => e.replace(RegExp('.js', 'ig'), '')).filter(e => e !== 'documentation').reduce((accumulation, file) => {
    const shortcut = file.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); }).split(' ').map(e => e[0]).join('').toLowerCase();
    accumulation[file] = require(path.join(__dirname, file));
    accumulation[shortcut] = require(path.join(__dirname, file));
    return accumulation;
}, {});

const description = 'Display this documentation';

const command = () => {
    const commandName = Object.keys(packager.bin).pop();

    console.info(`\n${packager.title}`);

    console.info(`\n${packager.title}: Command Line Interface to make your life easier.`);
    console.info(`=> The ${packager.title} command is '${kebabCase(commandName)}'. To blast this project into the fifth dimension.`);
    console.info(`=> Use '--help' on any of the commands listed below for more details.`);
    console.info(`\n`);

    console.info(`List of commands:\n`);
    console.info(`=> documentation - ${description}`);
    console.info(`=> d - ${description}`);
    for (let command in keyMapOfCommands) {
        console.info(`=> ${command} - ${keyMapOfCommands[command].description}`);
    }

    console.info(`\n`);
};

const documentation = () => {
    return command();
};

module.exports = {
    description,
    command,
    documentation,
};
