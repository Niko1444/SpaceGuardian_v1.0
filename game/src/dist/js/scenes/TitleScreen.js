import Phaser from "phaser";
import config from "../config/config.js";
import Button from "../objects/Button.js";
import Music from "../mode/Music.js";
class TitleScreen extends Phaser.Scene {
  constructor() {
    super("bootGame");
    const music = new Music();
    this.globals = { music, bgMusic: null };
  }

  preload() {
    this.load.audio("main_menu_music", "assets/audio/backgroundMusic.mp3");

    this.load.image(
      "background",
      "assets/images/backgrounds/background_title.png"
    );

    this.load.image("logo", "assets/images/logo.png");

    this.load.spritesheet({
      key: "button_play",
      url: "assets/gui/button_play.png",
      frameConfig: {
        frameWidth: 93,
        frameHeight: 28,
        startFrame: 2,
        endFrame: 2,
      },
    });

    this.load.spritesheet({
      key: "button_play_hover",
      url: "assets/gui/button_play_hover.png",
      frameConfig: {
        frameWidth: 93,
        frameHeight: 28,
        startFrame: 2,
        endFrame: 2,
      },
    });

    this.load.spritesheet({
      key: "button_tutorial",
      url: "assets/gui/button_play.png",
      frameConfig: {
        frameWidth: 93,
        frameHeight: 28,
        startFrame: 4,
        endFrame: 4,
      },
    });

    this.load.spritesheet({
      key: "button_tutorial_hover",
      url: "assets/gui/button_play_hover.png",
      frameConfig: {
        frameWidth: 93,
        frameHeight: 28,
        startFrame: 4,
        endFrame: 4,
      },
    });

    this.load.spritesheet({
      key: "button_credit",
      url: "assets/gui/button_play.png",
      frameConfig: {
        frameWidth: 93,
        frameHeight: 28,
        startFrame: 1,
        endFrame: 1,
      },
    });

    this.load.spritesheet({
      key: "button_credit_hover",
      url: "assets/gui/button_play_hover.png",
      frameConfig: {
        frameWidth: 93,
        frameHeight: 28,
        startFrame: 1,
        endFrame: 1,
      },
    });
  }

  create() {
    // Create Music
    this.music = this.sys.game.globals.music;
    // && this.music.bgMusicPlaying === false
    if (this.music.musicOn === true) {
      this.bgMusic = this.sound.add("main_menu_music", {
        volume: 0.6,
        loop: true,
      });
      this.bgMusic.play();
      this.music.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
    // Create Background
    this.background = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background"
    );
    this.background.setOrigin(0, 0);

    // Create "SPACE" text
    const spaceText = this.add.text(
      config.width / 2,
      config.height / 2 - 130,
      "SPACE",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "100px",
        color: "#F3F8FF", // Set the color for "SPACE"
        align: "center",
      }
    );
    spaceText.setOrigin(0.5);
    spaceText.setShadow(3, 3, "#F27CA4", 2, false, true);

    // Create "GUARDIAN" text with each letter in a different color
    const guardianText = this.add.text(
      config.width / 2,
      config.height / 2 - 30,
      "GUARDIAN",
      {
        fontFamily: "Pixelify Sans",
        color: "#F3F8FF",
        fontSize: "100px",
        align: "center",
      }
    );
    guardianText.setOrigin(0.5);
    guardianText.setShadow(3, 3, "#F27CA4", 2, false, true);

    // Create "LOGO" image
    const bottomLeftImage = this.add.image(
      (config.width / 10) * 8.5,
      (config.height / 10) * 9.78,
      "logo"
    );
    bottomLeftImage.setOrigin(0, 1);
    bottomLeftImage.setScale(0.3);

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
    this.button_play = new Button(
      this,
      config.width / 2,
      config.height / 2 + 60,
      "button_play",
      "button_play_hover",
      "choosePlayer"
    );
    this.button_play.setInteractive();

    // Event listeners for the play button
    this.button_play.on("pointerdown", () => {
      this.scene.start("choosePlayer");
    });

    this.button_play.on("pointerover", () => {
      this.button_play.setTexture("button_play_hover");
    });

    this.button_play.on("pointerout", () => {
      this.button_play.setTexture("button_play");
    });

    // Event listener for Enter key
    this.input.keyboard.on("keydown-ENTER", () => {
      this.scene.start("choosePlayer");
    });

    // Create Tutorial Button
    this.button_tutorial = new Button(
      this,
      config.width / 2,
      config.height / 2 + 100,
      "button_tutorial",
      "button_tutorial_hover",
      "choosePlayer"
    );
    this.button_tutorial.setInteractive();

    // Create Credit Button
    this.button_credit = new Button(
      this,
      config.width / 2,
      config.height / 2 + 140,
      "button_credit",
      "button_credit_hover",
      "choosePlayer"
    );

    // Event listeners for the tutorial button
    this.button_tutorial.on("pointerdown", () => {
      this.scene.start("choosePlayer");
    });

    this.button_tutorial.on("pointerover", () => {
      this.button_tutorial.setTexture("button_tutorial_hover");
    });

    this.button_tutorial.on("pointerout", () => {
      this.button_tutorial.setTexture("button_tutorial");
    });

    this.button_credit.on("pointerdown", () => {
      this.button_credit.setTexture("button_credit_hover");
    });
  }
}
export default TitleScreen;
