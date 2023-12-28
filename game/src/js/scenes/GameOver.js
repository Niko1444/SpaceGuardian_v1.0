import Phaser from "phaser";
import config from "../config/config.js";
import GuiManager from "../manager/GuiManager.js";
import KeyboardManager from "../manager/KeyboardManager.js";
import InterfaceManager from "./interfaceScene.js";

class GameOver extends Phaser.Scene {
  constructor() {
    super("gameOver");
  }

  create() {
    // Add a game over message
    this.keyboardManager = new KeyboardManager(this);
    this.guiManager = new GuiManager(this);
    this.interfaceManager = new InterfaceManager(this);

    // Define the "R" key to restart the game
    this.keyboardManager.restartGame();

    // Define the "T" key to back to the title screen
    this.keyboardManager.titleScreen();

    // Define the "L" key to show the leaderboard
    this.keyboardManager.showLeaderboard();

    //
  }
}
export default GameOver;
