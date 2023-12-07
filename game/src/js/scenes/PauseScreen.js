import Phaser from "phaser";
import config from "../config/config";
import KeyboardManager from "../manager/KeyboardManager";
import GuiManager from "../manager/uiManager";
class PauseScreen extends Phaser.Scene {
  constructor() {
    super("pauseScreen");
  }

  create() {
    this.keyboardManager = new KeyboardManager(this);
    this.guiManager = new GuiManager(this);

    this.keyboardManager.unpauseGame();

    this.keyboardManager.titleScreen();
  }
}
export default PauseScreen;
