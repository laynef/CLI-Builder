## About me
I am a developer who's been in the field for several years. I started in the field at 18 and my development has changed to this day with CLIs that I build to do work for me. I program my computer to work for me instead of getting tripped in a text editor for days on end writing the same code that could now take years to build. I was taught if you build something once. Never build it again. These CLIs are how I achieve that tackle.

## The problem I wanted to solve
I want to build a tool at any company or any situation that will do work for me. Think about "Create a React App" or "Angular CLI" or "Sequelize CLI". These CLIs allow you to get started in a boilerplate project immediately instead of building bare bones code. Imagine that you never used one again. This means no database migrations, seeders, or auto generators. This is a life of hell to build them from scratch. Which I challenge you to do, you can understand things "under-the-hood". I will be using this tool with any new tool I may want to build. I tend to show bare bones code projects like Retro-React-Native or any of the ones on my GitHub profile but that is to show how fast I get something done from nothing. In a work setting you are put into code that you have never seen before. As you learn the existing code, you can use this outside of the project (NOT IN THEIR REPO). To scaffold your code for you. Making you look like the smartest person in the room. Work smart, not hard.

## How do you build code faster than 100 people together in a room?
This is a scaffolding tool to build scaffolding tools. Simply install and create and get started for any occurrence you may need. Their are automatic unit tests for any command that you add.

## Tech stack
This is not apart of your project it just can do anything you design it to. It change build or change any file or directory that you choose on your entire computer. This tool is not in your repo it only assists you to build in the repo of your choice. If you build your commands to treat any file like a string (because files are either strings or buffers, that's it), you can update code or generate code in any language or in any directory. The sky is the limit when building tools to make your life easier. Although it is built in JavaScript, I use it for bash commands or any language I choose to build in.

## The process of building Build code faster than 100 people together in a room
```
GitHub: https://github.com/laynef/CLI-Builder
npm i -g @lfaler/cli-builder
cli-builder create <developer-tool-name>
npm run new-command <the-new-commands-name>
npm run test // to run tests
```

## Challenges I faced
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

## Key learnings
I build so many tools that it's hard to keep track of what to use so documentation is very important. The CLI you generate has it's own documentation while the command has documentation as well. This is why I've built an easy place in each command file to handle the description which goes to the CLI documentation and the documentation function that gets called for the specific command. Then the actual command handler.

## Tips and advice
Use unique names and make your commands as general as possible. If you get in the habit of writing your own tools. Your life will be easier and you will build faster than 100 people in one room.

## Final thoughts and next steps
Get creative and stay learning. The smartest person in the room is never the one who knows it. Happy coding!
