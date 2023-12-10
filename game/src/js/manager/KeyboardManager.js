import Phaser from "phaser";
import PauseScreen from "../scenes/PauseScreen";
import config from "../config/config";

class KeyboardManager {
  constructor(scene) {
    this.scene = scene;

    // Create A,W,S,D key
    this.cursorKeys = scene.input.keyboard.createCursorKeys();

    // Store the keys in a property
    this.keys = this.scene.input.keyboard.addKeys({
      spacebar: Phaser.Input.Keyboard.KeyCodes.SPACE,
      P: Phaser.Input.Keyboard.KeyCodes.P,
      T: Phaser.Input.Keyboard.KeyCodes.T,
      R: Phaser.Input.Keyboard.KeyCodes.R
      // Add more keys as needed
    });
  }

  controlGame(){
    
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

  restartGame(){
    this.keys.R.on("down", () => {
      this.scene.scene.start("playGame");
      this.scene.scene.stop("gameOver");
    });
  }

}

export default KeyboardManager;
