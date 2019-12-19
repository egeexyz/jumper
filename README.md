# jumper

[![Maintainability](https://api.codeclimate.com/v1/badges/04601514cd7b18f394a8/maintainability)](https://codeclimate.com/github/egee-irl/jumper/maintainability)
[![Discord](https://discordapp.com/api/guilds/183740337976508416/widget.png?style=shield)](https://discord.gg/tVyBHAU)

A ridiculously basic platformer ~~game~~ written with [PhaserJS](https://phaser.io/) v2 to demonstrate basic game functions. The game itself is a slightly modified version of the _official_ PhaserJS tutorial game and uses the same assets.

## Getting Started

Want to use this game as a template for your own or just want to learn about PhaserJS in general? All you need is ~~a browser~~ Firefox. Chrome will work but you'd need to serve up the html using a webserver like NodeJS or Nginx, but that's silly since Firefox will happily let you drag & drop the html file straight into the browser.

### Play The Game

Clone this repository, launch Firefox, and drop the ``index.html`` file into your Firefox window. Assuming you don't have some fancy Firefox settings or security-related extensions running, the game should start right up. If the game does _not_ start after dropping the index.html onto the window, check the _console_ section of the Firefox dev tools and look for errors.

### Considerations

The code that powers the game lives in the ``game.js`` file and is not particularly well written. It was _mostly_ rewritten from the PhaserJS tutorial game and is presented in a way that makes it easy to read and understand but **not** easy to maintain or performant. Keep that in mind if you decide to fork this project or write your own based on it
