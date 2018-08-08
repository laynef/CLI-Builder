const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const { size } = require('lodash');

// { commandName: { documentation, command, description } }
const allCommands = require(path.join(__dirname, '..', 'actions', 'sources', 'index.js'));
const allFilesLength = fs.readdirSync(path.join(__dirname, '..', 'actions', 'sources', 'commands')).length;

for (let commandName in allCommands) {
    const value = allCommands[commandName];
    const documentation = value.documentation;
    const command = value.command;
    const description = value.description;

    describe(`General Tests for command: ${commandName}`, () => {
        describe(`Short hands are all clean`, () => {
            it(`All short hands are unique and exist`, () => {
                expect((allFilesLength * 2) === size(allCommands)).to.be.true;
            });
        });
        describe(`Documentation Tests`, () => {
            it('Documentation is a Function', () => {
                expect(typeof documentation === 'function').to.be.true;
            });
            it('Documentation does not have a return', () => {
                expect(documentation() === undefined).to.be.true;
            });
        });
        describe(`Command Tests`, () => {
            it('Command is a Function', () => {
                expect(typeof command === 'function').to.be.true;
            });
        });
        describe(`Description Tests`, () => {
            it('Description is a String', () => {
                expect(typeof description === 'string').to.be.true;
            });
        });
    });
}
