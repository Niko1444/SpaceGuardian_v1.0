class GameOver extends Phaser.Scene {
  constructor() {
    super("gameOver");
  }

  create() {
    // Add a game over message
    const gameOverText = this.add.text(
      config.width / 2,
      config.height / 2,
      "Game Over",
      { fontSize: "32px", fill: "#fff" }
    );
    gameOverText.setOrigin(0.5);

    // Add instructions to restart the game
    const restartText = this.add.text(
      config.width / 2,
      config.height / 2 + 40,
      "Press R to Restart",
      { fontSize: "24px", fill: "#fff" }
    );
    restartText.setOrigin(0.5);

    // Define the "R" key to restart the game
    const restartKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.R
    );

    restartKey.on("down", () => {
      this.scene.start("playGame");
    });
  }
}
