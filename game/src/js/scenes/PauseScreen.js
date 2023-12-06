import Phaser from "phaser";
import config from "../config/config";
import KeyboardManager from "../manager/KeyboardManager";
class PauseScreen extends Phaser.Scene {
  constructor() {
    super("pauseScreen");
  }

  create() {
    this.keyboardManager = new KeyboardManager(this);

    const pauseText = this.add.text(
      config.width / 2,
      config.height / 2 - 50,
      "Pause",
      { fontSize: "32px", fill: "#fff" }
    );
    pauseText.setOrigin(0.5);

    // Add instructions to restart the game
    const unpauseText = this.add.text(
      config.width / 2,
      config.height / 2,
      "Press P to Unpause",
      { fontSize: "24px", fill: "#fff" }
    );
    unpauseText.setOrigin(0.5);

    // Add instructions to back to the title screen
    const backToTitleText = this.add.text(
      config.width / 2,
      config.height / 2 + 30,
      "Press T to TitleScreen",
      { fontSize: "24px", fill: "#fff" }
    );
    backToTitleText.setOrigin(0.5);

    this.keyboardManager.unpauseGame();

    this.keyboardManager.titleScreen();
  }
}
export default PauseScreen;
