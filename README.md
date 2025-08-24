# jumper ![ci status](https://github.com/egeexyz/jumper/actions/workflows/nodejs-ci.yaml/badge.svg)

[![Discord](https://discordapp.com/api/guilds/183740337976508416/widget.png?style=shield)](https://discord.com/servers/egee-s-discord-server-183740337976508416)

A basic platformer game written with [PhaserJS](https://phaser.io/) **2** to demonstrate basic game functions. It is a spirtual fork of the original [PhaserJS tutorial](https://phaser.io/tutorials/making-your-first-phaser-3-game/part1) when it was first released.

Watch how I built it on YouTube!

<iframe width="560" height="315" src="https://www.youtube.com/embed/88DS3Z8nOdY?si=2dgZx-MRF92joViA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Getting Started

This repository is configured to be as simple as possible; build, deploy, and play with all with **npm**! The game's [code](https://github.com/egeexyz/jumper/blob/master/public/src/game.js) is neatly written and annotated to help you figure out how it all works.

First, clone or download this repository and run `npm install`.

There are a few ways to run Jumper:

- Run `npm start` and the game window should appear.
- Run `npm run serve` and navigate to `localhost:8080` in a web browser.
- Run `docker-compose up` and navigate to `localhost:8080` in a web browser. (assumes Docker & Docker-Compose is installed)
