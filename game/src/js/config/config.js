import TitleScreen from "../scenes/TitleScreen.js";
import LoadingScreen from "../scenes/LoadingScreen.js";
import PlayingScreen from "../scenes/PlayingScreen.js";
import GameOver from "../scenes/GameOver.js";
import PauseScreen from "../scenes/PauseScreen.js";
import ChoosePLayer from "../scenes/ChoosePLayer.js";
import UpgradeScreen from "../scenes/UpgradeScreen.js";
import TutorialScreen from "../scenes/TutorialScreen.js";
import LevelTwoScreen from "../scenes/LevelTwoScreen.js";
import LevelThreeScreen from "../scenes/LevelThreeScreen.js";
import Leaderboard from "../scenes/Leaderboard.js";
import BossScreen from "../scenes/BossScreen.js";

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
    ChoosePLayer,
    TutorialScreen,
    LevelTwoScreen,
    LevelThreeScreen,
    BossScreen,
    PauseScreen,
    UpgradeScreen,
    GameOver,
    Leaderboard,
  ],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

export default config;
