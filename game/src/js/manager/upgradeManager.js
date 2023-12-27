import Phaser from "phaser";
import config from "../config/config";
import UpgradeScreen from "../scenes/UpgradeScreen";

class UpgradeManager {
  constructor(scene, callingScene) {
    this.scene = scene;
    this.callingScene = callingScene;
    this.playerScore = 0;
    this.createScoreText();
  }

  createScoreText() {
    this.scoreText = this.scene.add.text(10, 10, `Score: ${this.playerScore}`, {
      fontFamily: "Pixelify Sans",
      fontSize: "32px",
      fill: "#fff",
    });
  }

  updateScore(score) {
    this.playerScore += score;
    this.displayScore();

    if (this.playerScore % 50 == 0 && this.scene.player.health != 0) {
      this.rewardEach100Score(this.callingScene);
    }
  }

  displayScore() {
    this.scoreText.setText(`Score: ${this.playerScore}`);
    this.scoreText.setDepth(3);
  }

  rewardEach100Score(callingScene) {
    // Pause the current scene
    this.scene.scene.pause();
    // Launch upgradeScreen and pass the sceneName as part of the data
    this.scene.scene.launch("upgradeScreen", { callingScene: callingScene });
  }
}

export default UpgradeManager;
