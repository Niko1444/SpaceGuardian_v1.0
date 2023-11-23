class GameOver extends Phaser.Scene {
  constructor() {
    super("gameOver");
  }

  create() {
    // Add a game over message
    const gameOverText = this.add.text(
      config.width / 2,
      config.height / 2 - 50,
      "Game Over",
      { fontSize: "32px", fill: "#fff" }
    );
    gameOverText.setOrigin(0.5);

    // Add instructions to restart the game
    const restartText = this.add.text(
      config.width / 2,
      config.height / 2,
      "Press R to Restart",
      { fontSize: "24px", fill: "#fff" }
    );
    restartText.setOrigin(0.5);

    // Add instructions to back to the title screen
    const backToTitleText = this.add.text(
      config.width / 2,
      config.height / 2 + 30,
      "Press T to TitleScreen",
      { fontSize: "24px", fill: "#fff" }
    );
    backToTitleText.setOrigin(0.5);

    // Define the "R" key to restart the game
    const restartKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.R
    );

    restartKey.on("down", () => {
      this.scene.start("playGame");
      this.scene.stop("gameOver");
    });

    // Define the "T" key to back to the title screen
    const backToTitleKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.T
    );

    backToTitleKey.on("down", () => {
      this.scene.start("bootGame");
      this.scene.stop("gameOver");
    });
  }
}
