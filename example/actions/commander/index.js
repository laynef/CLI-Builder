const sources = require('../sources');

const Commander = function (commandName, args, flags) {
    var execute = function () {
        if (flags.length > 0) {
            const help = flags.filter(e => RegExp(/help/ig).test(e));
            if (sources[commandName] && help.length > 0) {
                return sources[commandName].documentation();
            } else {
                return sources.documentation.command();
            }
        } else {
            if (sources[commandName]) {
                return sources[commandName].command(...args);
            } else {
                return sources.documentation.command();
            }
        }
    };

    return { execute };
};

module.exports = Commander;
