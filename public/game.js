// Initialize the Phaser Game object and set default game window size
const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update })

// Declare shared variables at the top so all methods can access them
let score = 0
let scoreText
let platforms
let diamonds
let cursors
let player

function preload () {
  // Load & Define our game assets
  game.load.image('sky', 'sky.png')
  game.load.image('ground', 'platform.png')
  game.load.image('diamond', 'diamond.png')
  game.load.spritesheet('woof', 'woof.png', 32, 32)
}

function create () {
    //  We're going to be using physics, so enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE)

    //  A simple background for our game
  game.add.sprite(0, 0, 'sky')

    //  The platforms group contains the ground and the 2 ledges we can jump on
  platforms = game.add.group()

    //  We will enable physics for any object that is created in this group
  platforms.enableBody = true

    // Here we create the ground.
  let ground = platforms.create(0, game.world.height - 64, 'ground')

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  ground.scale.setTo(2, 2)

    //  This stops it from falling away when you jump on it
  ground.body.immovable = true

    //  Now let's create two ledges
  let ledge = platforms.create(400, 450, 'ground')
  ledge.body.immovable = true

  ledge = platforms.create(-75, 350, 'ground')
  ledge.body.immovable = true

    // The player and its settings
  player = game.add.sprite(32, game.world.height - 150, 'woof')

    //  We need to enable physics on the player
  game.physics.arcade.enable(player)

    //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = 0.2
  player.body.gravity.y = 800
  player.body.collideWorldBounds = true

    //  Our two animations, walking left and right.
  player.animations.add('left', [0, 1], 10, true)
  player.animations.add('right', [2, 3], 10, true)

    //  Finally some diamonds to collect
  diamonds = game.add.group()

    //  Enable physics for any object that is created in this group
  diamonds.enableBody = true

    //  Create 12 diamonds evenly spaced apart
  for (var i = 0; i < 12; i++) {
    let diamond = diamonds.create(i * 70, 0, 'diamond')

      //  Drop em from the sky and bounce a bit
    diamond.body.gravity.y = 1000
    diamond.body.bounce.y = 0.3 + Math.random() * 0.2
  }

    //  Create the score text
  scoreText = game.add.text(16, 16, '', { fontSize: '32px', fill: '#000' })

    //  And bootstrap our controls
  cursors = game.input.keyboard.createCursorKeys()
}

function update () {
    //  We want the player to stop when not moving
  player.body.velocity.x = 0

    //  Setup collisions for the player, diamonds, and our platforms
  game.physics.arcade.collide(player, platforms)
  game.physics.arcade.collide(diamonds, platforms)

    //  Call callectionDiamond() if player overlaps with a diamond
  game.physics.arcade.overlap(player, diamonds, collectDiamond, null, this)

    // Configure the controls!
  if (cursors.left.isDown) {
    player.body.velocity.x = -150

    player.animations.play('left')
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 150

    player.animations.play('right')
  } else {
    // If no movement keys are pressed, stop the player
    player.animations.stop()
  }

    //  This allows the player to jump!
  if (cursors.up.isDown && player.body.touching.down) {
    player.body.velocity.y = -400
  }
    // Show an alert modal when score reaches 120
  if (score === 120) {
    alert('You win!')
    score = 0
  }
}

function collectDiamond (player, diamond) {
    // Removes the diamond from the screen
  diamond.kill()

    //  And update the score
  score += 10
  scoreText.text = 'Score: ' + score
}
