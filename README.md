grunt-example
=============

This is an bare grunt example. I'm using it to remember some grunt things.

I made the `devDepenedencies` section of `package.json` empty.  Running `npm i` will install the dev dependencies with a postinstall hook.  I mostly just wanted to try that and see if it works :)

I like using (load-grunt-config)[https://github.com/firstandthird/load-grunt-config] to magically do a bunch of config.  

There is an example of a custom task as well.

TODO:
- make `say-hello` write a file in the `build/` directory
- add an example of reading an option from the command line
- add a multiTask example.
- switch to Gulp ;)
