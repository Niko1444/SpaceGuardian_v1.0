import Phaser from "phaser";
import PauseScreen from "../scenes/PauseScreen";
import config from "../config/config";

class KeyboardManager {
  constructor(scene) {
    this.scene = scene;

    // Store the keys in a property
    this.keys = this.scene.input.keyboard.addKeys({
      spacebar: Phaser.Input.Keyboard.KeyCodes.SPACE,
      P: Phaser.Input.Keyboard.KeyCodes.P,
      T: Phaser.Input.Keyboard.KeyCodes.T,
      // Add more keys as needed
    });

    // Ensure the keys are initialized
    this.scene.input.keyboard.removeKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.scene.input.keyboard.removeKey(Phaser.Input.Keyboard.KeyCodes.P);
    this.keys.spacebar = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.keys.P = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.P
    );
  }

  pauseGame() {
    // Access keys using this.keys.spacebar and this.keys.P
    if (Phaser.Input.Keyboard.JustDown(this.keys.P)) {
      // Assuming config.pauseGame is a global variable
      config.pauseGame = !config.pauseGame;

      if (config.pauseGame === true) {
        this.scene.scene.launch("pauseScreen");
        this.scene.scene.pause();
      }
    }
  }

  unpauseGame() {
    this.keys.P.on("down", () => {
      config.pauseGame = false;
      this.scene.scene.resume("playGame");
      this.scene.scene.stop();
    });
  }

  titleScreen() {
    this.keys.T.on("down", () => {
      this.scene.scene.start("bootGame");
      this.scene.scene.stop("playGame");
      this.scene.scene.stop("pauseScreen");
    });
  }
}

export default KeyboardManager;
