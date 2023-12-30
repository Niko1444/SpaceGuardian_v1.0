import Phaser from "phaser";
import config from "../config/config";
import gameSettings from "../config/gameSettings";

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
      R: Phaser.Input.Keyboard.KeyCodes.R,
      L: Phaser.Input.Keyboard.KeyCodes.L,
      // Add more keys as needed
    });
  }

  pauseGame() {
    // Access keys using this.keys.spacebar and this.keys.P
    if (Phaser.Input.Keyboard.JustDown(this.keys.P)) {
      // Assuming config.pauseGame is a global variable
      config.pauseGame = !config.pauseGame;

      if (config.pauseGame == true) {
        this.scene.scene.launch("pauseScreen", {
          key: this.scene.callingScene,
        });
        this.scene.scene.pause();
      }
    }
  }

  unpauseGame() {
    this.keys.P.on("down", () => {
      config.pauseGame = false;
      this.scene.scene.resume(this.scene.callingScene);
      this.scene.scene.stop();
    });
  }

  titleScreen() {
    this.keys.T.on("down", () => {
      this.scene.scene.start("bootGame");
      let otherScene = this.scene.scene.get(this.scene.callingScene);
      otherScene.shutdownPlayer();
      this.scene.scene.stop(this.scene.callingScene);
      this.scene.scene.stop("pauseScreen");
      gameSettings.playerScore = 0;
    });
  }

  restartGame() {
    this.keys.R.on("down", () => {
      this.scene.scene.start(this.scene.callingScene);
      this.scene.scene.stop("gameOver");
      gameSettings.playerScore = 0;
    });
  }

  showLeaderboard() {
    this.keys.L.on("down", () => {
      this.scene.scene.start("leaderboard");
      this.scene.scene.stop("gameOver");
    });
  }
}

export default KeyboardManager;
