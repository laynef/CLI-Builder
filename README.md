# CLI Builder

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
```

## Generate new command file
```
npm run new-command <command-name>
// File generated in ./actions/sources/commands/<command-name>.js
```

## Command with Options in CLI
```
// Options look like '--startLine=0'
// Option Flag: --<YOUR-OPTION-NAME>=<YOUR-OPTION-VALUE>
<YOUR-CLI-COMMAND-NAME> <YOUR-COMMAND> <arguments-you-created> --<YOUR-OPTION-NAME>=<YOUR-OPTION-VALUE>
```

## Example CLI
```
cd example
npm i -g
astroids

// To Un-Install
npm uninstall -g
```
