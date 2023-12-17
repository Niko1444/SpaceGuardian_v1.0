import Phaser from "phaser";
import config from "../config/config";
import KeyboardManager from "../manager/KeyboardManager";
import buttonManager from "../manager/buttonManager";
import GuiManager from "../manager/GuiManager.js";
class PauseScreen extends Phaser.Scene {
  constructor() {
    super("pauseScreen");

  }

  create() {
    this.keyboardManager = new KeyboardManager(this);
    this.guiManager = new GuiManager(this);

    this.buttonManager = new buttonManager(this);

    this.keyboardManager.unpauseGame();

    this.keyboardManager.titleScreen();
  }
  update(){
    // this.buttonManager.update();
  }
  
}
export default PauseScreen;
