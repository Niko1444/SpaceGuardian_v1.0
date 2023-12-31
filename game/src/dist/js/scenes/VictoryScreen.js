import Phaser from "phaser";
import config from "../config/config";
import gameSettings from "../config/gameSettings";
import Firework from "../objects/Firework";
import UtilitiesManager from "../manager/UtilitiesManager";
const BACKGROUND_SCROLL_SPEED = 0.5;

class VictoryScreen extends Phaser.Scene {
  constructor() {
    super("victory");
  }
  preload() {
    this.load.spritesheet({
      key: `firework_texture`,
      url: `assets/spritesheets/vfx/firework.png`,
      frameConfig: {
        frameWidth: 100,
        frameHeight: 100,
        startFrame: 0,
        endFrame: 12,
      },
    });


    this.load.image(
      "background",
      "assets/images/backgrounds/background_title.png"
    );
    this.load.audio("victoryMusic", "assets/audio/victory.mp3");
  }
  create() {
    this.music = this.sys.game.globals.music;
    if (this.music.musicOn === true) {
      // this.sys.game.globals.bgMusic.stop();
      this.bgMusic = this.sound.add("victoryMusic", {
        volume: 0.6,
        loop: true,
      });
      this.bgMusic.play();
      this.music.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
      this.sys.game.globals.bgMusic.play();
    }

    this.background = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background"
    );
    this.background.setOrigin(0, 0);

    const victoryText = this.add.text(
      config.width / 2,
      config.height / 2 - 130,
      "VICTORY",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "150px",
        color: "#F3F8FF", // Set the color for "VICTORY"
        align: "center",
      }
    );
    victoryText.setOrigin(0.5);
    victoryText.setShadow(3, 3, "#F27CA4", 2, false, true);

    this.tweens.add({
      targets: victoryText,
      duration: 1000, // Adjust the duration as needed
      ease: "Sine.easeInOut",
      repeat: -1,
      yoyo: true,
      alpha: 0.2, // Optional: You can adjust the alpha for a fading effect
    });

    const firework1 = new Firework(this, 40 , 200).setScale(1); // startX and startY are the starting coordinates of the firework
    const firework2 = new Firework(this, 150 , 170).setScale(1.5); // startX and startY are the starting coordinates of the firework
    const firework5 = new Firework(this, 300 , 120).setScale(2); // startX and startY are the starting coordinates of the firework
    const firework3 = new Firework(this, 450 , 170).setScale(1.5); // startX and startY are the starting coordinates of the firework
    const firework4 = new Firework(this, 560 , 200).setScale(1); // startX and startY are the starting coordinates of the firework

  }
}
export default VictoryScreen;
