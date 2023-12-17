import TitleScreen from "../scenes/TitleScreen.js";
import LoadingScreen from "../scenes/LoadingScreen.js";
import PlayingScreen from "../scenes/PlayingScreen.js";
import GameOver from "../scenes/GameOver.js";
import PauseScreen from "../scenes/PauseScreen.js";
import ChoosePLayer from "../scenes/ChoosePLayer.js";
import LeaderBoard from "../scenes/leaderBoard.js";

const rem =
  (parseFloat(getComputedStyle(document.documentElement).fontSize) * 62.5) /
  100;

const gameWidth = 40 * rem;
const gameHeight = 75 * rem;

const config = {
  pauseGame: false,
  width: gameWidth,
  height: gameHeight,
  backgroundColor: 0x000000,
  scene: [TitleScreen, LoadingScreen, PlayingScreen, GameOver, PauseScreen, ChoosePLayer, LeaderBoard],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
};

export default config;
