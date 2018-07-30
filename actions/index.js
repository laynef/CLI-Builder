#!/usr/bin/env node

const Commander = require('./commander');

const user = process.argv.slice(2);

const args = [];
const flags = [];

for (var i = 1; i < user.length; i++) {
    if (user[i].indexOf('--') === 0) {
        flags.push(user[i]);
    } else {
        args.push(user[i]);
    }
}

const start = new Commander(user[0], args, flags);

start.execute();
