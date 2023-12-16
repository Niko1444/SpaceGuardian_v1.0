import Phaser from "phaser";
import config from "../config/config.js";
import GuiManager from "../manager/GuiManager.js";
class TitleScreen extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image(
      "background",
      "assets/images/backgrounds/purple/nebula_3.png"
    );

    this.load.spritesheet({
      key: "button_play",
      url: "assets/gui/button.png",
      frameConfig: {
        frameWidth: 93,
        frameHeight: 28,
        startFrame: 2,
        endFrame: 2,
      },
    });

    this.load.spritesheet({
      key: "button_hover",
      url: "assets/gui/button_hover.png",
      frameConfig: {
        frameWidth: 93,
        frameHeight: 28,
        startFrame: 2,
        endFrame: 2,
      },
    });
  }

  create() {
    // Create Background
    this.background = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background"
    );
    this.background.setOrigin(0, 0);

    const titleText = "SPACE GUARDIAN";

    // Create "SPACE" text
    const spaceText = this.add.text(
      config.width / 2,
      config.height / 2 - 100,
      "SPACE",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "64px",
        color: "#FF454D", // Set the color for "SPACE"
        align: "center",
      }
    );
    spaceText.setOrigin(0.5);

    // Create "GUARDIAN" text with each letter in a different color
    const guardianText = this.add.text(
      config.width / 2,
      config.height / 2 - 30,
      "Guardian",
      {
        fontFamily: "Pixelify Sans",
        color: "#FF454D",
        fontSize: "64px",
        align: "center",
      }
    );
    guardianText.setOrigin(0.5);

    // Tween animation for the rainbow effect on "GUARDIAN"
    this.tweens.add({
      targets: guardianText,
      duration: 1000, // Adjust the duration as needed
      ease: "Sine.easeInOut",
      repeat: -1,
      yoyo: true,
      alpha: 0.2, // Optional: You can adjust the alpha for a fading effect
    });

    // Tween animation for the rainbow effect on "SPACE"
    this.tweens.add({
      targets: spaceText,
      duration: 1000, // Adjust the duration as needed
      ease: "Sine.easeInOut",
      repeat: -1,
      yoyo: true,
      alpha: 0.2, // Optional: You can adjust the alpha for a fading effect
    });

    // Create Play Button
    this.button_play = this.add.sprite(
      config.width / 2,
      config.height / 2 + 60,
      "button_play"
    );
    this.button_play.setInteractive();
    this.button_play.on("pointerdown", () => {
        this.scene.start("choosePlayer");
    });
    this.button_play.on("pointerover", () => {
      this.button_play.setTexture("button_hover");
    });
    this.button_play.on("pointerout", () => {
      this.button_play.setTexture("button_play");
    });
  }
}
export default TitleScreen;
