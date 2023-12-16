import Phaser from "phaser";
import gameSettings from "../config/gameSettings";
import config from "../config/config";
import Bullet from "../objects/projectiles/Bullet";
import Player from "../objects/players/Player";
import EnemyManager from "../manager/enemyManager";
import KeyboardManager from "../manager/KeyboardManager";
import PlayerManager from "../manager/playerManager";
import CollideManager from "../manager/collideManager";
import GuiManager from "../manager/uiManager";
import HPBar from "../objects/ui/HPBar";
import UtilitiesManager from "../manager/UtilitiesManager";

const BACKGROUND_SCROLL_SPEED = 0.5;
class PlayingScreen extends Phaser.Scene {
  constructor() {
    super("playGame");
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
    // Creat GUI for PlayingScreen ( Changes in BG except Player and Enemy )
    this.guiManager = new GuiManager(this);
    this.guiManager.createBackground("background_texture_01");
    
    // Spawn the Player
    this.player = new Player(
      this,
      config.width / 2,
      config.height - 100,
      `player_texture_${this.selectedPlayerIndex}`,
      1000
    );
    this.player.play("player_anim");

    // Create managers
    this.keyboardManager = new KeyboardManager(this);
    this.playerManager = new PlayerManager(
      this,
      this.player,
      this.selectedPlayerIndex
    );

    this.createText();

    this.enemyManager = new EnemyManager(this);
    this.UtilitiesManager = new UtilitiesManager(this);
    // spawn the enemies
    this.time.delayedCall(3000, () => {
      this.spawnedEnemies = this.enemyManager.scheduleRandomEnemySpawn(8);
    }, null, this);

    // Create keyboard inputs
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    // Create a group to manage bullets
    this.projectiles = this.physics.add.group({
      classType: Bullet,
      runChildUpdate: true,
    });

    this.collideManager = new CollideManager(
      this,
      this.player,
      this.enemyManager.enemies,
      this.UtilitiesManager.healthPacks,
      this.UtilitiesManager.shieldPacks
    );
    // this.events.once("shutdown", this.shutdown, this);
    // FINAL WAVE
    this.time.delayedCall(20000, () => {
      // Destroy all spawned enemies
      this.destroySpawnedEnemies();

      // Start the final wave
      this.startFinalWave();
    }, null, this);
  }

  createText() {
    const Level1Text = this.add.text(
      config.width / 2,
      config.height / 2,
      'Level 1',
      { fontSize: '32px', fill: '#ffffff' }
    ).setOrigin(0.5);

    this.time.delayedCall(2000, () => {
      Level1Text.destroy();
  }, null, this);
}

destroySpawnedEnemies() {
  // Check if spawnedEnemies array is not null or undefined
  if (this.spawnedEnemies) {
    // Loop through all spawned enemies and destroy them
    this.spawnedEnemies.forEach((enemy) => {
      // Check if the enemy object exists and has the destroy method
      if (enemy && enemy.destroy && typeof enemy.destroy === 'function') {
        enemy.destroy();
      }
    });

    // Clear the spawned enemies array
    this.spawnedEnemies = [];
  }
}

  startFinalWave() {
    // Display "Final Wave" text for 2 seconds
    const finalWaveText = this.add.text(
      config.width / 2,
      config.height / 2,
      'Final Wave',
      { fontSize: '32px', fill: '#ffffff' }
    ).setOrigin(0.5);

    this.time.delayedCall(2000, () => {
      finalWaveText.destroy();

      // Spawn a wave of bugs after the "Final Wave" message disappears
      this.finalWaveBugs = this.enemyManager.spawnCircleOfBugsLv1(config.width/2, config.height/2, 120, 12);
    }, null, this);
  }

  update() {
    // Pause the game
    this.keyboardManager.pauseGame();

    // Move the background
    this.background.tilePositionY -= BACKGROUND_SCROLL_SPEED;

    // Move the player and enemies
    this.playerManager.movePlayer();
    this.player.updateHealthBarPosition();

    this.enemyManager.moveEnemies();
    this.enemyManager.enemies.forEach((enemy) => {
      enemy.updateHealthBarPosition();
    });

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      this.player.shootBullet();
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

  enemyExploded() {
    this.enemyManager.enemyExploded();
  }

  // shutdown() {
  //   // Remove entire texture along with all animations
  //   this.textures.remove(`player_texture_${this.selectedPlayerIndex}`);

  //   // Check if the animation exists before trying to remove it
  //   if (this.anims && this.anims.exists && this.anims.exists("player_anim")) {
  //     this.anims.remove("player_anim");
  //   }
  //   if (
  //     this.anims &&
  //     this.anims.exists &&
  //     this.anims.exists("player_anim_left")
  //   ) {
  //     this.anims.remove("player_anim_left");
  //   }
  //   if (
  //     this.anims &&
  //     this.anims.exists &&
  //     this.anims.exists("player_anim_left_diagonal")
  //   ) {
  //     this.anims.remove("player_anim_left_diagonal");
  //   }
  //   if (
  //     this.anims &&
  //     this.anims.exists &&
  //     this.anims.exists("player_anim_right")
  //   ) {
  //     this.anims.remove("player_anim_right");
  //   }
  //   if (
  //     this.anims &&
  //     this.anims.exists &&
  //     this.anims.exists("player_anim_right_diagonal")
  //   ) {
  //     this.anims.remove("player_anim_right_diagonal");
  //   }
  // }
}
export default PlayingScreen;
