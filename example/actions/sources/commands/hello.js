const description = 'Prints hello to demonstrate how options and commands are handled';

const command = (name, options) => {
    console.log(`Hello ${name} ${options.lastName || 'Doe'}`);
};

const documentation = () => {
    console.info(`
Options:
--lastName=<YOUR-LAST-NAME>

Commands:
astroids hello <YOUR-FIRST-NAME> [optional:options]
    `);
};

module.exports = {
    command,
    description,
    documentation,
};
