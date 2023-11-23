const rem =
  (parseFloat(getComputedStyle(document.documentElement).fontSize) * 62.5) /
  100;

const gameWidth = 40 * rem;
const gameHeight = 70 * rem;

var gameSettings = {
  playerSpeed: 200,
  enemySpeed: 200,
  bulletSpeed: 400,
};

var config = {
  pauseGame: false,
  width: gameWidth,
  height: gameHeight,
  backgroundColor: 0x000000,
  scene: [TitleScreen, LoadingScreen, PlayingScreen, GameOver, PauseScreen],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

var game = new Phaser.Game(config);
