import Phaser from "phaser";
import config from "../config/config";
class PauseScreen extends Phaser.Scene {
  constructor() {
    super("pauseScreen");
  }

  create() {
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

    // Define the "P" key to unpause the game
    const unpauseKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.P
    );

    // Define the "T" key to back to the title screen
    const backToTitleKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.T
    );

    unpauseKey.on("down", () => {
      config.pauseGame = false;
      this.scene.resume("playGame");
      this.scene.stop();
    });

    backToTitleKey.on("down", () => {
      this.scene.start("bootGame");
      this.scene.stop("playGame");
      this.scene.stop("pauseScreen");
    });
  }
}
export default PauseScreen;
