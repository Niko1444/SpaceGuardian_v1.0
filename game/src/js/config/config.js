import TitleScreen from "../scenes/TitleScreen.js";
import LoadingScreen from "../scenes/LoadingScreen.js";
import PlayingScreen from "../scenes/PlayingScreen.js";
import GameOver from "../scenes/GameOver.js";
import PauseScreen from "../scenes/PauseScreen.js";
import ChoosePlayer from "../scenes/ChoosePlayer.js";
import UpgradeScreen from "../scenes/UpgradeScreen.js";
import TutorialScreen from "../scenes/TutorialScreen.js";
import LevelTwoScreen from "../scenes/LevelTwoScreen.js";
import LevelThreeScreen from "../scenes/LevelThreeScreen.js";
import Leaderboard from "../scenes/Leaderboard.js";
import BossScreen from "../scenes/BossScreen.js";
import CreditsScene from "../scenes/CreditScreen.js";
import VictoryScreen from "../scenes/VictoryScreen.js";

const gameWidth = 600;
const gameHeight = 950;

// const gameWidth = window.innerWidth;
// const gameHeight = window.innerHeight;

const config = {
  type: Phaser.AUTO,
  pauseGame: false,
  width: gameWidth,
  height: gameHeight,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: 0x000000,
  scene: [
    TitleScreen,
    LoadingScreen,
    PlayingScreen,
    ChoosePlayer,
    TutorialScreen,
    LevelTwoScreen,
    LevelThreeScreen,
    BossScreen,
    PauseScreen,
    UpgradeScreen,
    GameOver,
    CreditsScene,
    Leaderboard,
    VictoryScreen,
  ],
  pixelArt: true,
  input: {
    keyboard: true,
    mouse: true,
    touch: true,
    activePointers: 2,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  plugins: {
    scene: [
      {
        key: "InputPlugin",
        plugin: Phaser.Input.InputPlugin,
        mapping: "input",
      },
    ],
  },
};

export default config;
