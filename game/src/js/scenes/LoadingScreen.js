import Phaser from "phaser";
import config from "../config/config.js";
import GuiManager from "../manager/uiManager.js";
class LoadingScreen extends Phaser.Scene {
  constructor() {
    super("loadingScreen");

    this.guiManager = new GuiManager(this);
  }

  init(data) {
    this.selectedPlayerIndex = data.number;
  }

  preload() {
    this.load.image(
      "background_texture",
      "assets/images/backgrounds/purple/nebula_1.png"
    );
    

    // Load Enemy Spritesheets
    this.load.spritesheet({
      key: "bug1_texture",
      url: "assets/spritesheets/enemies/bug_1.png",
      frameConfig: {
        frameWidth: 64,
        frameHeight: 64,
        startFrame: 0,
        endFrame: 5,
      },
    });

    this.load.spritesheet({
      key: "bug3_texture",
      url: "assets/spritesheets/enemies/bug_3.png",
      frameConfig: {
        frameWidth: 64,
        frameHeight: 64,
        startFrame: 0,
        endFrame: 5,
      },
    });

    this.load.spritesheet({
      key: "bug5_texture",
      url: "assets/spritesheets/enemies/bug_5.png",
      frameConfig: {
        frameWidth: 64,
        frameHeight: 64,
        startFrame: 0,
        endFrame: 5,
      },
    });

    // Load health pack Spritesheet
    this.load.spritesheet({
      key: "healthPack_texture",
      url: "assets/spritesheets/vfx/healthPack.png",
      frameConfig: {
        frameWidth: 32,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 4,
      },
    });

    // Load the HealthBar 
    this.load.spritesheet({
      key: "healthBar_texture",
      url: "assets/spritesheets/vfx/healthBar.png",
      frameConfig: {
        frameWidth: 200,
        frameHeight: 41,
        startFrame: 0,
        endFrame: 0,
      },
    });

    // Load the Pause button
    this.load.spritesheet({
      key: "pauseButton_texture",
      url: "assets/spritesheets/vfx/pauseButton.png",
      frameConfig: {
        frameWidth: 36,
        frameHeight: 36,
        startFrame: 2,
        endFrame: 4,
      },
    });

    // Load the Pause button
    this.load.spritesheet({
      key: "pauseDis_texture",
      url: "assets/spritesheets/vfx/pauseDis.png",
      frameConfig: {
        frameWidth: 36,
        frameHeight: 36,
        startFrame: 0,
        endFrame: 1,
      },
    });
    this.load.spritesheet({
      key: "settingButton_texture",
      url: "assets/spritesheets/vfx/settingButton.png",
      frameConfig: {
        frameWidth: 36,
        frameHeight: 36,
        startFrame: 0,
        endFrame: 0,
      },
    });

    this.load.spritesheet({
      key: "settingHover_texture",
      url: "assets/spritesheets/vfx/settingHover.png",
      frameConfig: {
        frameWidth: 36,
        frameHeight: 36,
        startFrame: 0,
        endFrame: 0,
      },
    });

    // Load shield pack Spritesheet
    this.load.spritesheet({
      key: "shieldPack_texture",
      url: "assets/spritesheets/vfx/shieldPack.png",
      frameConfig: {
        frameWidth: 32,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 4,
      },
    });

    // Load shield Spritesheet
    this.load.spritesheet({
      key: "shield_texture",
      url: "assets/spritesheets/vfx/shield.png",
      frameConfig: {
        frameWidth: 96,
        frameHeight: 96,
        startFrame: 0,
        endFrame: 5,
      },
    });

    // Load first Bullet Spritesheet
    this.load.spritesheet({
      key: "bullet1_texture",
      url: "assets/spritesheets/vfx/bullet1.png",
      frameConfig: {
        frameWidth: 12,
        frameHeight: 26,
        startFrame: 0,
        endFrame: 2,
      },
    });

    // Load Effect Spritesheets
    this.load.spritesheet({
      key: "explosion_texture",
      url: "assets/spritesheets/vfx/explosion.png",
      frameConfig: {
        frameWidth: 48,
        frameHeight: 48,
        startFrame: 0,
        endFrame: 7,
      },
    });

    this.anims.create({
      key: "player_anim",
      frames: this.anims.generateFrameNumbers(
        `player_texture_${this.selectedPlayerIndex}`,
        {
          start: 0,
          end: 3,
        }
      ),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_left",
      frames: this.anims.generateFrameNumbers(
        `player_texture_${this.selectedPlayerIndex}`,
        {
          start: 4,
          end: 7,
        }
      ),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_left_diagonal",
      frames: this.anims.generateFrameNumbers(
        `player_texture_${this.selectedPlayerIndex}`,
        {
          start: 8,
          end: 11,
        }
      ),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_right",
      frames: this.anims.generateFrameNumbers(
        `player_texture_${this.selectedPlayerIndex}`,
        {
          start: 12,
          end: 15,
        }
      ),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_right_diagonal",
      frames: this.anims.generateFrameNumbers(
        `player_texture_${this.selectedPlayerIndex}`,
        {
          start: 16,
          end: 19,
        }
      ),
      frameRate: 30,
      repeat: -1,
    });
  }

  create() {
    // Create health pack animations
    this.anims.create({
      key: "healthPack_anim",
      frames: this.anims.generateFrameNumbers("healthPack_texture", {
        start: 0,
        end: 4,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "pauseDis_anim",
      frames: this.anims.generateFrameNumbers("pauseDis_texture", {
        start: 0,
        end: 1,
      }),
      frameRate: 60,
      repeat: 0,
      hideOnComplete: true,

    });

    this.anims.create({
      key: "pauseButton_anim",
      frames: this.anims.generateFrameNumbers("pauseButton_texture", {
        start: 2,
        end: 3,
      }),
      frameRate: 60,
      repeat: 0,

    });

    this.anims.create({
      key: "resumeButton_anim",
      frames: this.anims.generateFrameNumbers("pauseButton_texture", {
        start: 3,
        end: 4,
      }),
      frameRate: 60,
      repeat: 0,

    });

    // Create shield pack animations
    this.anims.create({
      key: "shieldPack_anim",
      frames: this.anims.generateFrameNumbers("shieldPack_texture", {
        start: 0,
        end: 4,
      }),
      frameRate: 20,
      repeat: -1,
    });

    // Create shield animations
    this.anims.create({
      key: "shield_anim",
      frames: this.anims.generateFrameNumbers("shield_texture", {
        start: 0,
        end: 5,
      }),
      frameRate: 20,
      repeat: -1,
    });

    // Create first bullet animations
    this.anims.create({
      key: "bullet1_anim",
      frames: this.anims.generateFrameNumbers("bullet1_texture", {
        start: 0,
        end: 2,
      }),
      frameRate: 12,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim",
      frames: this.anims.generateFrameNumbers("player_texture", {
        start: 0,
        end: 3,
      }),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_left",
      frames: this.anims.generateFrameNumbers("player_texture", {
        start: 4,
        end: 7,
      }),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_left_diagonal",
      frames: this.anims.generateFrameNumbers("player_texture", {
        start: 8,
        end: 11,
      }),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_right",
      frames: this.anims.generateFrameNumbers("player_texture", {
        start: 12,
        end: 15,
      }),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_right_diagonal",
      frames: this.anims.generateFrameNumbers("player_texture", {
        start: 16,
        end: 19,
      }),
      frameRate: 30,
      repeat: -1,
    });

    // Create enemy animations
    this.anims.create({
      key: "bug1_anim",
      frames: this.anims.generateFrameNumbers("bug1_texture", {
        start: 0,
        end: 5,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "bug3_anim",
      frames: this.anims.generateFrameNumbers("bug3_texture", {
        start: 0,
        end: 5,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "bug5_anim",
      frames: this.anims.generateFrameNumbers("bug5_texture", {
        start: 0,
        end: 5,
      }),
      frameRate: 20,
      repeat: -1,
    });

    // Create explosion animations
    this.anims.create({
      key: "explosion_anim",
      frames: this.anims.generateFrameNumbers("explosion_texture", {
        start: 0,
        end: 7,
      }),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });

    const loadingText = this.add.text(
      config.width / 2,
      config.height / 2 - 50,
      "LOADING",
      { fontSize: "32px", fill: "#fff" }
    );
    loadingText.setOrigin(0.5);

    this.time.delayedCall(1000, () => {
      let value = this.selectedPlayerIndex;
      this.scene.start("playGame", { number: value });
    });
  }
}
export default LoadingScreen;
