import Phaser from "phaser";
import gameSettings from "../config/gameSettings";
import config from "../config/config";
import Bullet from "../objects/projectiles/Bullet";
import Player from "../objects/players/Player";
import HealthPack from "../objects/utilities/healthPack";
import ShieldPack from "../objects/utilities/ShieldPack";
import Shield from "../objects/utilities/Shield";
import EnemyManager from "../manager/enemyManager";
import KeyboardManager from "../manager/KeyboardManager";
import PlayerManager from "../manager/playerManager";
import CollideManager from "../manager/collideManager";
import GuiManager from "../manager/uiManager";
import HPBar from "../objects/ui/HPBar";
import UtilitiesManager from "../manager/UtilitiesManager";

const BACKGROUND_SCROLL_SPEED = 0.5;
class LevelTwoScreen extends Phaser.Scene {
  constructor() {
    super("playLevel2");
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
    this.guiManager.createBackground("background_texture");

    
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
    this.keyboardManager = new KeyboardManager(this);
    this.playerManager = new PlayerManager(
      this,
      this.player,
      this.selectedPlayerIndex
    );

    this.createText();

    this.enemyManager = new EnemyManager(this);

    this.healthPack1 = new HealthPack(this, 401, 250);
    this.healthPack1.play("healthPack_anim");
    this.healthPack2 = new HealthPack(this, 140, 450);
    this.healthPack2.play("healthPack_anim");

    this.shieldPack2 = new ShieldPack(this, 40, 450);
    this.shieldPack2.play("shieldPack_anim");
    this.shieldPack3 = new ShieldPack(this, 50, 50);
    this.shieldPack3.play("shieldPack_anim");

    this.UtilitiesManager = new UtilitiesManager(this);
    this.UtilitiesManager.addHealthPack(this.healthPack1);
    this.UtilitiesManager.addHealthPack(this.healthPack2);
    this.UtilitiesManager.addShieldPack(this.shieldPack2);
    this.UtilitiesManager.addShieldPack(this.shieldPack3);

    const centerX = config.width / 2;
    const centerY = config.height / 2; 
    const radius = 120; 
    const numBugs = 8; 

    this.enemyManager.spawnCircleOfBugsLv1(centerX, centerY, radius, numBugs);
    this.enemyManager.spawnRandomEnemy(1);

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
  }

  createText() {
    const Level1Text = this.add.text(
      config.width / 2,
      config.height / 2,
      'Level 2',
      { fontSize: '32px', fill: '#ffffff' }
    ).setOrigin(0.5);

    this.time.delayedCall(2000, () => {
      Level1Text.destroy();
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

    this.shield.updatePosition(this.player);
  }

  gameOver() {
    this.scene.start("gameOver");
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
export default LevelTwoScreen;
