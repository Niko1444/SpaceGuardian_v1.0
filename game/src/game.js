// game.js
import Phaser from "phaser";
import config from "./js/config/config.js";
import Music from "./js/mode/Music.js";
class Game extends Phaser.Game {
  constructor() {
    super(config);
    const music = new Music();
    this.globals = { music, bgMusic: null };
  }
}
// Create a new Phaser game instance
const game = new Game(); /* eslint-disable-line */
