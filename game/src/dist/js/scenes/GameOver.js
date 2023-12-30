import Phaser from "phaser";
import config from "../config/config.js";
import GuiManager from "../manager/GuiManager.js";
import KeyboardManager from "../manager/KeyboardManager.js";
import InterfaceManager from "./InterfaceScene.js";

class GameOver extends Phaser.Scene {
  constructor() {
    super("gameOver");
  }

  init(data) {
    this.callingScene = data.key;
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

    // Automatically transition to leaderboard after 5 seconds with countdown
    this.countdownTimer = this.time.addEvent({
      delay: 1000, // 1 second interval
      callback: this.updateCountdown,
      callbackScope: this,
      repeat: 5, // 5 times for a total of 5 seconds
    });

    this.countdownNumber = this.add.text(
      config.width / 2,
      (config.height / 4) * 3,
      "",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "40px",
        fill: "#FFFB73",
      }
    );
    this.countdownNumber.setOrigin(0.5);

    this.countdownText = this.add.text(
      config.width / 2,
      (config.height / 4) * 3 + 50,
      "seconds to leaderboard",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "32px",
        fill: "#fff",
      }
    );
    this.countdownText.setOrigin(0.5);

    // Start the countdown
    this.updateCountdown();
  }

  updateCountdown() {
    const remainingTime = this.countdownTimer.repeatCount;
    this.countdownNumber.text = remainingTime > 0 ? remainingTime : "GO!";

    if (remainingTime === 0) {
      // Transition to leaderboard after countdown
      this.transitionToLeaderboard();
    }
  }

  transitionToLeaderboard() {
    // Stop the current scene and start the leaderboard scene
    this.scene.stop(this.callingScene);
    this.scene.start("leaderboard");
  }
}

export default GameOver;
