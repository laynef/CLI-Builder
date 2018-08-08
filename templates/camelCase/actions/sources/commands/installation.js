const packager = require('../../../package.json');

const description = 'Check to see if your installation is running';

const command = () => {
    console.log('Your installation is running.');
};

const documentation = () => {
    console.info(`
npm i -g ${packager.name}

${Object.keys(packager.bin).pop()} <command-name> --help
or
${Object.keys(packager.bin).pop()}
    `);
};

module.exports = {
    command,
    description,
    documentation,
};
