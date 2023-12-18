import Phaser from "phaser";
import config from "../config/config";
import UpgradeScreen from "../scenes/UpgradeScreen";

class UpgradeManager {
  constructor(scene) {
    this.scene = scene;
    this.playerScore = 0;
    this.createScoreText();
    // dit me github
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

    if (this.playerScore % 10 == 0) {
      this.rewardEach100Score();
    }
  }

  displayScore() {
    this.scoreText.setText(`Score: ${this.playerScore}`);
  }

  rewardEach100Score() {
    this.scene.scene.launch("upgradeScreen");
    this.scene.scene.pause();
  }
}

export default UpgradeManager;
