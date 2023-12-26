import Phaser from "phaser";
import config from "../config/config";
import Bullet from "../objects/projectiles/Bullet";
import Player from "../objects/players/Player";
import Shield from "../objects/utilities/Shield";
import EnemyManager from "../manager/enemyManager";
import KeyboardManager from "../manager/KeyboardManager";
import PlayerManager from "../manager/playerManager";
import CollideManager from "../manager/collideManager";
import HPBar from "../objects/ui/HPBar";
import Bug1 from "../objects/enemies/Bug1";
import Bug3 from "../objects/enemies/Bug3";
import Bug5 from "../objects/enemies/Bug5";
import GuiManager from "../manager/GuiManager.js";
import UtilitiesManager from "../manager/UtilitiesManager";
import buttonManager from "../manager/buttonManager";
import ProjectileManager from "../manager/ProjectileManager";
import UpgradeManager from "../manager/UpgradeManager.js";
import soundManager from "../manager/soundManager.js";

const BACKGROUND_SCROLL_SPEED = 0.5;
class LevelTwoScreen extends Phaser.Scene {
  constructor() {
    super("playLevelTwo");
    this.buttonManager = null;
  }

  init(data) {
    this.selectedPlayerIndex = data.number;
  }

  preload() {
    this.load.spritesheet({
      key: `player_texture_${this.selectedPlayerIndex}`,
      url: `assets/spritesheets/players/planes_0${this.selectedPlayerIndex}A.png`,
      frameConfig: {
        frameWidth: 96,
        frameHeight: 96,
        startFrame: 0,
        endFrame: 19,
      },
    });
  }

  create() {
    if (!(this.anims && this.anims.exists && this.anims.exists("player_anim"))) {
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
    // Creat GUI for PlayingScreen ( Changes in BG except Player and Enemy )
    this.guiManager = new GuiManager(this);
    this.guiManager.createBackground("background_texture");

    this.music = this.sys.game.globals.music;
    if (this.music.musicOn === true) {
      this.sys.game.globals.bgMusic.stop();
      this.bgMusic = this.sound.add("desertMusic", { volume: 0.6, loop: true });
      this.bgMusic.play();
      this.music.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
      this.sys.game.globals.bgMusic.play();
    }

    this.player = new Player(
      this,
      config.width / 2,
      config.height - 100,
      `player_texture_${this.selectedPlayerIndex}`,
      1000
    );
    this.player.play("player_anim");

    // Spawn the Enemies
    this.time.delayedCall(
      13000,
      () => {
        // chasing enemies
        this.bug5_1 = new Bug5(this, config.width / 2 + 20, -20, 30);
        this.bug5_2 = new Bug5(this, config.width / 2 - 100, -20, 30);
        this.bug5_3 = new Bug5(this, config.width / 2 + 100, -20, 30);
        this.bug5_4 = new Bug5(this, config.width / 2 - 20, -20, 30);
        this.bug5_5 = new Bug5(this, config.width / 2 - 150, -20, 30);
        this.bug5_6 = new Bug5(this, config.width / 2 + 150, -20, 30);
      },
      null,
      this
    );

    // Create text for level 2
    this.createText("Level 2", config.width / 2, config.height / 2);

    // Spawn the Shield
    this.shield = new Shield(this, this.player);
    this.shield.play("shield_anim");

    // Create managers
    this.keyboardManager = new KeyboardManager(this);
    // Score System
    this.upgradeManager = new UpgradeManager(this);
    this.playerManager = new PlayerManager(
      this,
      this.player,
      this.selectedPlayerIndex
    );

    this.enemyManager = new EnemyManager(this);
    this.time.delayedCall(3000, () => this.enemyManager.spawnEnemyRowWithDelay(this, 0), null, this);
    this.time.delayedCall(5000, () => this.enemyManager.spawnEnemyRowWithDelay(this, 0), null, this);
    this.time.delayedCall(7000, () => this.enemyManager.spawnEnemyRowWithDelay(this, 0), null, this);

    this.time.delayedCall(
      13000,
      () => {
        this.collideManager2 = new CollideManager(
          this,
          this.player,
          this.enemyManager.enemies,
          this.UtilitiesManager.healthPacks,
          this.UtilitiesManager.shieldPacks,
          this.shield
        );
        this.enemyManager.addEnemyForOnce(this.bug5_1);
        this.enemyManager.addEnemyForOnce(this.bug5_2);
        this.enemyManager.addEnemyForOnce(this.bug5_3);
        this.enemyManager.addEnemyForOnce(this.bug5_4);
        this.enemyManager.addEnemyForOnce(this.bug5_6);
      },
      null,
      this
    );

    // FINAL WAVE
    this.time.delayedCall(
      25000,
      () => {
        this.startFinalWave();
      },
      null,
      this
    );

    this.UtilitiesManager = new UtilitiesManager(this);
    this.soundManager = new soundManager(this);
    // Add a delayed event to spawn utilities after a delay
    this.time.addEvent({
      delay: 5000,
      callback: () => {
        this.UtilitiesManager.addUtilitiesForPlayingScreen(3, 4);
        this.collideManager1 = new CollideManager(
          this,
          this.player,
          this.enemyManager.enemies,
          this.UtilitiesManager.healthPacks,
          this.UtilitiesManager.shieldPacks,
          this.shield
        );
      },
      callbackScope: this,
    });
    this.buttonManager = new buttonManager(this);

    this.projectileManager = new ProjectileManager(this);
    this.projectileManager.createPlayerBullet();
    this.projectileManager.createEnemyBullet();
    this.projectileManager.createChaseBullet();
    this.time.addEvent({
      delay: 27000,
      callback: () => {
        this.projectileManager.callEnemyBullet();
        this.projectileManager.callChaseBullet();
      },
      callbackScope: this,
    });

    // Create keyboard inputs
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    )

    this.collideManager = new CollideManager(
      this,
      this.player,
      this.enemyManager.enemies,
      this.UtilitiesManager.healthPacks,
      this.UtilitiesManager.shieldPacks,
      this.shield,
      this.soundManager
    );

    this.time.delayedCall(
      40000,
      () => {
        this.goToNextLevel();
      },
      null,
      this
    );

    this.musicButton = this.add.image(config.width - 60, 30, "sound_texture");
    this.musicButton.setInteractive();

    this.musicButton.on(
      "pointerdown",
      function () {
        this.music.soundOn = !this.music.soundOn;
        this.music.musicOn = !this.music.musicOn;

        this.updateAudio();
      },
      this
    );
  }

  update() {
    // this.buttonManager.update();
    // Pause the game
    this.keyboardManager.pauseGame();

    // Move the background
    this.background.tilePositionY -= BACKGROUND_SCROLL_SPEED;

    // Move the player and enemies
    this.playerManager.movePlayer();

    this.enemyManager.moveEnemies();
    this.enemyManager.enemies.forEach((enemy) => {
      enemy.updateHealthBarPosition();
    });

    if (this.spacebar.isDown) {
      this.player.shootBullet(this.selectedPlayerIndex);
    }

    this.projectiles.children.iterate((bullet) => {
      bullet.update();
    });

    if (this.player.health <= 0) {
      this.gameOver();
    }

    this.shield.updatePosition(this.player);

    this.time.addEvent({
      delay: 28000,
      callback: () => {
        this.bug3_1.rotateToPlayer(this.player);
        this.bug3_2.rotateToPlayer(this.player);
        this.bug3_3.rotateToPlayer(this.player);
        this.bug3_4.rotateToPlayer(this.player);
        this.bug3_5.rotateToPlayer(this.player);
        this.bug3_6.rotateToPlayer(this.player);
        this.bug3_7.rotateToPlayer(this.player);
        this.bug3_8.rotateToPlayer(this.player);
      },
      callbackScope: this,
    });

    this.time.addEvent({
      delay: 30000,
      callback: () => {
        this.bug4_6.rotateToPlayer(this.player);
        this.bug4_7.rotateToPlayer(this.player);
        this.bug4_8.rotateToPlayer(this.player);
        this.bug4_1.rotateToPlayer(this.player);
        this.bug4_2.rotateToPlayer(this.player);
        this.bug4_3.rotateToPlayer(this.player);
        this.bug4_4.rotateToPlayer(this.player);
        this.bug4_5.rotateToPlayer(this.player);
      },
      callbackScope: this,
    });

    this.time.addEvent({
      delay: 13000,
      callback: () => {
        this.bug5_1.chasePlayer(this.player);
        this.bug5_2.chasePlayer(this.player);
        this.bug5_3.chasePlayer(this.player);
        this.bug5_4.chasePlayer(this.player);
        this.bug5_5.chasePlayer(this.player);
        this.bug5_6.chasePlayer(this.player);
      },
      callbackScope: this,
    });
  }

  updateAudio() {
    if (this.music.musicOn === false && this.music.soundOn === false) {
      this.musicButton.setTexture("mute_texture");
      this.sys.game.globals.bgMusic.stop();
      this.music.bgMusicPlaying = false;
    } else if (this.music.musicOn === true && this.music.soundOn === true) {
      this.musicButton.setTexture("sound_texture");
      if (this.music.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.music.bgMusicPlaying = true;
      }
    }

  }

  gameOver() {
    this.events.once("shutdown", this.shutdown, this);
    this.scene.stop("upgradeScreen");
    this.scene.start("gameOver");
  }

  shutdown() {
    // Remove entire texture along with all animations
    this.textures.remove(`player_texture_${this.selectedPlayerIndex}`);

    // Check if the animation exists before trying to remove it
    if (this.anims && this.anims.exists && this.anims.exists("player_anim")) {
      this.anims.remove("player_anim");
    }
    if (
      this.anims &&
      this.anims.exists &&
      this.anims.exists("player_anim_left")
    ) {
      this.anims.remove("player_anim_left");
    }
    if (
      this.anims &&
      this.anims.exists &&
      this.anims.exists("player_anim_left_diagonal")
    ) {
      this.anims.remove("player_anim_left_diagonal");
    }
    if (
      this.anims &&
      this.anims.exists &&
      this.anims.exists("player_anim_right")
    ) {
      this.anims.remove("player_anim_right");
    }
    if (
      this.anims &&
      this.anims.exists &&
      this.anims.exists("player_anim_right_diagonal")
    ) {
      this.anims.remove("player_anim_right_diagonal");
    }
  }

  createText(key, x, y) {
    const Level1Text = this.add
      .text(x, y, key, {
        fontSize: "32px",
        fill: "#ffffff",
      })
      .setOrigin(0.5);

    this.time.delayedCall(
      2000,
      () => {
        Level1Text.destroy();
      },
      null,
      this
    );
  }

  goToNextLevel() {
    this.createText("Level completed", config.width / 2, config.height / 2 + 30);
    this.createText("Press Enter to continue", config.width / 2, config.height / 2 - 30);

    // Check for Enter key press continuously in the update loop
    this.input.keyboard.on('keydown-ENTER', this.handleEnterKey, this);
  }

  handleEnterKey() {
    this.time.delayedCall(1000, () => {
      this.scene.start("playLevelThree", { number: this.selectedPlayerIndex });
    });

    this.input.keyboard.off('keydown-ENTER', this.handleEnterKey, this);
  }


  startFinalWave() {
    // Display "Final Wave" text for 2 seconds
    const finalWaveText = this.add
      .text(config.width / 2, config.height / 2, "Final Wave", {
        fontSize: "32px",
        fill: "#ffffff",
      })
      .setOrigin(0.5);

    this.time.delayedCall(
      2000,
      () => {
        finalWaveText.destroy();

        // Spawn a wave of bugs after the "Final Wave" message disappears
        // shoot straight bullet
        this.bug3_1 = new Bug3(this, 30, -20, 30);
        this.bug3_2 = new Bug3(this, 120, -20, 30);
        this.bug3_3 = new Bug3(this, 210, -20, 30);
        this.bug3_4 = new Bug3(this, 300, -20, 30);
        this.bug3_5 = new Bug3(this, 390, -20, 30);
        this.bug3_6 = new Bug3(this, 480, -20, 30);
        this.bug3_7 = new Bug3(this, 570, -20, 30);
        this.bug3_8 = new Bug3(this, 660, -20, 30);

        // shoot following bullet
        this.bug4_6 = new Bug3(this, 30, -20, 30);
        this.bug4_7 = new Bug3(this, 120, -20, 30);
        this.bug4_8 = new Bug3(this, 210, -20, 30);
        this.bug4_1 = new Bug3(this, 300, -20, 30);
        this.bug4_2 = new Bug3(this, 390, -20, 30);
        this.bug4_3 = new Bug3(this, 480, -20, 30);
        this.bug4_4 = new Bug3(this, 570, -20, 30);
        this.bug4_5 = new Bug3(this, 660, -20, 30);

        this.enemyManager.addEnemyForOnce(this.bug3_1);
        this.enemyManager.addEnemyForOnce(this.bug3_2);
        this.enemyManager.addEnemyForOnce(this.bug3_3);
        this.enemyManager.addEnemyForOnce(this.bug3_4);
        this.enemyManager.addEnemyForOnce(this.bug3_5);
        this.enemyManager.addEnemyForOnce(this.bug3_6);
        this.enemyManager.addEnemyForOnce(this.bug3_7);
        this.enemyManager.addEnemyForOnce(this.bug3_8);

        this.enemyManager.addEnemyForOnce(this.bug4_1);
        this.enemyManager.addEnemyForOnce(this.bug4_2);
        this.enemyManager.addEnemyForOnce(this.bug4_3);
        this.enemyManager.addEnemyForOnce(this.bug4_4);
        this.enemyManager.addEnemyForOnce(this.bug4_5);
        this.enemyManager.addEnemyForOnce(this.bug4_6);
        this.enemyManager.addEnemyForOnce(this.bug4_7);
        this.enemyManager.addEnemyForOnce(this.bug4_8);
      },
      null,
      this
    );
  }
}
export default LevelTwoScreen;
