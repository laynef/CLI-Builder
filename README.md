# CLI Builder

Build your own cli with automatic unit tests for each command you create

## Installation
```
npm i -g @lfaler/cli-builder
```

## Generate a CLI directory
```
cli-builder create <project-name>

// Name => The name of your package json
// Title => The name of your project
// commndName => The command to run your cli

npm install
```

## Generate new command file
```
npm run new-command <command-name>
// File generated in ./actions/sources/commands/<command-name>.js
```

The things to keep in mind is it auto generates shorthand aliases for your command names. Your command names must be in camelCase and the start letter and the capital letters for your commands must all be unique for the aliases to work.

This means:
No:
```
npm run new-command newWebRedux // nwr
npm run new-command newWebReducer // nwr
```

Yes:
```
npm run new-command newWebRedux // nwr
npm run new-command newWebReduxReducer // nwrr
```

## Command with Options in CLI
```
// Options look like '--startLine=0'
// Option Flag: --<YOUR-OPTION-NAME>=<YOUR-OPTION-VALUE>
<YOUR-CLI-COMMAND-NAME> <YOUR-COMMAND> <arguments-you-created> --<YOUR-OPTION-NAME>=<YOUR-OPTION-VALUE>
```

## Run Tests
```
npm install
npm run test
```

## Example CLI
```
cd example
npm install
npm install -g
astroids

// To run tests
npm run test

// To Un-Install
npm uninstall -g
```
