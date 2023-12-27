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
import LeaderBoard from "../scenes/leaderBoard.js";
import BossScreen from "../scenes/BossScreen.js";

const rem =
  (parseFloat(getComputedStyle(document.documentElement).fontSize) * 62.5) /
  100;

const gameWidth = 60 * rem;
const gameHeight = 95 * rem;

const config = {
  type: Phaser.AUTO,
  pauseGame: false,
  width: gameWidth,
  height: gameHeight,
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
    LeaderBoard,
    PauseScreen,
    UpgradeScreen,
    GameOver,
  ],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
};

export default config;
