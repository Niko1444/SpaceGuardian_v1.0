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

    const playerUpgradeThreshold = this.countScoreByThreshhold(
      gameSettings.playerUpgradeThreshold
    );
    console.log(playerUpgradeThreshold);

    if (
      gameSettings.playerScore ===
      this.countScoreByThreshhold(gameSettings.playerUpgradeThreshold)
    ) {
      this.rewardByScore(this.callingScene);
      gameSettings.playerUpgradeThreshold += 100;
    }
  }

  countScoreByThreshhold(threshhold) {
    return threshhold ** 2 / 200 + threshhold / 2 - 300;
  }

  displayScore() {
    this.scoreText.setText(`Score: ${gameSettings.playerScore}`);
    this.scoreText.setDepth(3);
  }

  rewardByScore(callingScene) {
    // Pause the current scene
    this.scene.scene.pause();
    // Launch upgradeScreen and pass the sceneName as part of the data
    this.scene.scene.launch("upgradeScreen", { callingScene: callingScene });
  }
}

export default UpgradeManager;
