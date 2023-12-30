import gameSettings from "../config/gameSettings";

class UpgradeManager {
  constructor(scene, callingScene) {
    this.scene = scene;
    this.callingScene = callingScene;
    this.createScoreText();
  }

  createScoreText() {
    this.scoreText = this.scene.add.text(
      10,
      10,
      `Score: ${gameSettings.playerScore}`,
      {
        fontFamily: "Pixelify Sans",
        fontSize: "32px",
        fill: "#fff",
      }
    );
  }

  updateScore(score) {
    gameSettings.playerScore += score;

    this.displayScore();

    if (gameSettings.playerScore % 500 == 0 && this.scene.player.health != 0) {
      this.rewardEach500Score(this.callingScene);
    }
  }

  displayScore() {
    this.scoreText.setText(`Score: ${gameSettings.playerScore}`);
    this.scoreText.setDepth(3);
  }

  rewardEach500Score(callingScene) {
    // Pause the current scene
    this.scene.scene.pause();
    // Launch upgradeScreen and pass the sceneName as part of the data
    this.scene.scene.launch("upgradeScreen", { callingScene: callingScene });
  }
}

export default UpgradeManager;
