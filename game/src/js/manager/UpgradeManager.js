import Phaser from "phaser";
import config from "../config/config";

class UpgradeManager {
  constructor(scene) {
    this.scene = scene;
    this.playerScore = 0;
    this.createScoreText();
  }

  createScoreText() {
    this.scoreText = this.scene.add.text(10, 10, `Score: ${this.playerScore}`, {
      fontSize: "32px",
      fill: "#fff",
    });
  }

  updateScore(score) {
    this.playerScore += score;
    this.displayScore();
  }

  displayScore() {
    this.scoreText.setText(`Score: ${this.playerScore}`);
  }
}

export default UpgradeManager;
