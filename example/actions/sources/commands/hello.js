const description = 'Say hello to test how options and arguments work in this CLI builder';

const command = (name, options) => {
    console.log(`Hello ${name} ${options.lastName || 'Doe'}`);
};

const documentation = () => {
    console.info(`
Print hello to test how options and arguments work

Options:
--lastName='<YOUR-LAST-NAME>'

Command:
astroids hello <Your-First-Name> [optional:options]
    `);
};

module.exports = {
    command,
    description,
    documentation,
};
