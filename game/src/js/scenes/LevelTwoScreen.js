import Phaser from "phaser";
import gameSettings from "../config/gameSettings";
import config from "../config/config";
import Bullet from "../objects/projectiles/Bullet";
import Player from "../objects/players/Player";
import EnemyManager from "../manager/enemyManager";
import KeyboardManager from "../manager/KeyboardManager";
import PlayerManager from "../manager/playerManager";
import CollideManager from "../manager/collideManager";
import GuiManager from "../manager/GuiManager";
import HPBar from "../objects/ui/HPBar";
import UtilitiesManager from "../manager/UtilitiesManager";
import ProjectileManager from "../manager/ProjectileManager";
import Shield from "../objects/utilities/Shield";
import UpgradeManager from "../manager/UpgradeManager";

const BACKGROUND_SCROLL_SPEED = 0.5;
class LevelTwoScreen extends Phaser.Scene {
  constructor() {
    super("playLevelTwo");
    this.spawnedEnemies = [];
  }

  init(data) {
    this.selectedPlayerIndex = data.number;
  }

  preload() {
    // Load Player Spritesheet
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

    // Creat GUI for PlayingScreen ( Changes in BG except Player and Enemy )
    this.guiManager = new GuiManager(this);
    this.guiManager.createBackground("background_texture");
    this.guiManager.createLevelText(
      config.width / 2,
      config.height / 2,
      "Level 2",
      "32px",
      "#ffffff"
    );

    // Spawn the Player
    this.player = new Player(
      this,
      config.width / 2,
      config.height - 100,
      `player_texture_${this.selectedPlayerIndex}`,
      1000
    );
    this.player.play("player_anim");

    this.shield = new Shield(this, this.player);
    this.shield.play("shield_anim");

    // Create managers
    // Keyboard
    this.keyboardManager = new KeyboardManager(this);
    // Upgrade
    this.upgradeManager = new UpgradeManager(this);
    // Player
    this.playerManager = new PlayerManager(
      this,
      this.player,
      this.selectedPlayerIndex
    );
    // Utilities
    this.UtilitiesManager = new UtilitiesManager(this);

    this.enemyManager = new EnemyManager(this);
    // spawn the enemies
    this.time.delayedCall(
      4000,
      () => {
        this.spawnedEnemies = this.enemyManager.scheduleRandomEnemySpawn(8);
      },
      null,
      this
    );

    // FINAL WAVE
    this.time.delayedCall(
      20000,
      () => {
        // Start the final wave
        this.startFinalWave();
      },
      null,
      this
    );

    // Create keyboard inputs
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    this.projectileManager = new ProjectileManager(this);
    this.projectileManager.createPlayerBullet();
    this.projectileManager.createEnemyBullet();
    this.projectileManager.createChaseBullet();

    this.collideManager = new CollideManager(
      this,
      this.player,
      this.enemyManager.enemies,
      this.UtilitiesManager.healthPacks,
      this.UtilitiesManager.shieldPacks,
      this.shield
    );

    this.input.keyboard.on("keydown-ENTER", this.goToNextLevel, this);
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
        this.finalWaveBugs = this.enemyManager.spawnCircleOfBugsLv1(
          config.width / 2,
          config.height / 2,
          120,
          12
        );
      },
      null,
      this
    );
  }

  update() {
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

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      this.player.shootBullet(this.selectedPlayerIndex);
    }

    this.projectiles.children.iterate((bullet) => {
      bullet.update();
    });

    if (this.player.health <= 0) {
      this.gameOver();
    }
  }

  gameOver() {
    this.scene.start("gameOver");
  }

  goToNextLevel() {
    this.time.delayedCall(1000, () => {
      this.scene.start("playLevelThree", { number: this.selectedPlayerIndex });
    });
  }
}
export default LevelTwoScreen;
