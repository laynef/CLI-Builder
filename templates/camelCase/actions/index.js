#!/usr/bin/env node

const Commander = require('./commander');

const user = process.argv.slice(2);

const args = [];
const flags = [];

for (var i = 1; i < user.length; i++) {
    if (user[i].indexOf('--') === 0) {
        const array = user[i].slice(2).split('=');
        if (array.length === 1) {
            const object = {};
            object[array[0]] = true;
            flags.push(object);
        } else {
            const object = {};
            object[array[0]] = array[1];
            flags.push(object);
        }
    } else {
        args.push(user[i]);
    }
}

const start = new Commander(user[0], args, flags);

start.execute();
