import Phaser from "phaser";
import config from "../config/config.js";
import GuiManager from "../manager/uiManager";
import KeyboardManager from "../manager/KeyboardManager.js";
class GameOver extends Phaser.Scene {
  constructor() {
    super("gameOver");
  }

  create() {
    // Add a game over message
    this.keyboardManager = new KeyboardManager(this);
    this.guiManager = new GuiManager(this);

    // Define the "R" key to restart the game
    this.keyboardManager.restartGame();

    // Define the "T" key to back to the title screen
    this.keyboardManager.titleScreen();
  }
}
export default GameOver;
