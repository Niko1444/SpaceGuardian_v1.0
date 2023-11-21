class PauseScreen extends Phaser.Scene {
  constructor() {
    super("pauseScreen");
  }

  create() {
    const pauseText = this.add.text(
      config.width / 2,
      config.height / 2,
      "Pause",
      { fontSize: "32px", fill: "#fff" }
    );
    pauseText.setOrigin(0.5);

    // Add instructions to restart the game
    const unpauseText = this.add.text(
      config.width / 2,
      config.height / 2 + 40,
      "Press P to Unpause",
      { fontSize: "24px", fill: "#fff" }
    );
    unpauseText.setOrigin(0.5);

    // Define the "P" key to unpause the game
    const unpauseKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.P
    );

    unpauseKey.on("down", () => {
      config.pauseGame = false;
      this.scene.resume("playGame");
      this.scene.stop();
    });
  }
}
