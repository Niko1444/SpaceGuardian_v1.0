import Phaser from "phaser";
import gameSettings from "../config/gameSettings";
import config from "../config/config";
import Bullet from "../objects/projectiles/Bullet";
import Player from "../objects/players/Player";
import Bug1 from "../objects/enemies/Bug1";
import Bug3 from "../objects/enemies/Bug3";
import Bug5 from "../objects/enemies/Bug5";
import EnemyManager from "../manager/enemyManager";
import KeyboardManager from "../manager/KeyboardManager";
import PlayerManager from "../manager/playerManager";
import CollideManager from "../manager/collideManager";
import GuiManager from "../manager/uiManager";

const BACKGROUND_SCROLL_SPEED = 0.5;
class PlayingScreen extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  init(data) {
    this.selectedPlayerIndex = data.number;
  }

  preload(){
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
      frames: this.anims.generateFrameNumbers(`player_texture_${this.selectedPlayerIndex}`, {
        start: 0,
        end: 3,
      }),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_left",
      frames: this.anims.generateFrameNumbers(`player_texture_${this.selectedPlayerIndex}`, {
        start: 4,
        end: 7,
      }),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_left_diagonal",
      frames: this.anims.generateFrameNumbers(`player_texture_${this.selectedPlayerIndex}`, {
        start: 8,
        end: 11,
      }),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_right",
      frames: this.anims.generateFrameNumbers(`player_texture_${this.selectedPlayerIndex}`, {
        start: 12,
        end: 15,
      }),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_right_diagonal",
      frames: this.anims.generateFrameNumbers(`player_texture_${this.selectedPlayerIndex}`, {
        start: 16,
        end: 19,
      }),
      frameRate: 30,
      repeat: -1,
    });

    // Creat GUI for PlayingScreen ( Changes in BG except Player and Enemy )
    this.guiManager = new GuiManager(this);

    // Spawn the Player
    this.player = new Player(this, config.width / 2, config.height - 100, `player_texture_${this.selectedPlayerIndex}`, 100);
    this.player.play("player_anim");

    // Spawn the Enemies
    this.bug3_1 = new Bug3(this, 150, 200, 30);
    this.bug3_1.play("bug3_anim");
    this.bug3_2 = new Bug3(this, 100, 100, 30);
    this.bug3_2.play("bug3_anim");

    this.bug5 = new Bug5(this, 300, 80, 30);
    this.bug5.play("bug5_anim");

    this.bug1 = new Bug1(this, 200, 180, 30);
    this.bug1.play("bug1_anim");
    // Create managers
    this.keyboardManager = new KeyboardManager(this);
    this.playerManager = new PlayerManager(this, this.player, this.selectedPlayerIndex);
    this.enemyManager = new EnemyManager(this);
    this.enemyManager.addEnemy(this.bug3_1);
    this.enemyManager.addEnemy(this.bug3_2);
    this.enemyManager.addEnemy(this.bug5);
    this.enemyManager.addEnemy(this.bug1);

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
      this.enemyManager.enemies
    );

    this.events.once('shutdown', this.shutdown, this);
  }

  update() {
    // Pause the game
    this.keyboardManager.pauseGame();

    // Move the background
    this.background.tilePositionY -= BACKGROUND_SCROLL_SPEED;

    // Move the player and enemies
    this.playerManager.movePlayer();
    this.enemyManager.moveEnemies();

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

  shutdown() {
    // Remove entire texture along with all animations
    this.textures.remove(`player_texture_${this.selectedPlayerIndex}`);
  
    // Check if the animation exists before trying to remove it
    if (this.anims && this.anims.exists && this.anims.exists("player_anim")) {
      this.anims.remove("player_anim");
    }
    if (this.anims && this.anims.exists && this.anims.exists("player_anim_left")) {
      this.anims.remove("player_anim_left");
    }
    if (this.anims && this.anims.exists && this.anims.exists("player_anim_left_diagonal")) {
      this.anims.remove("player_anim_left_diagonal");
    }
    if (this.anims && this.anims.exists && this.anims.exists("player_anim_right")) {
      this.anims.remove("player_anim_right");
    }
    if (this.anims && this.anims.exists && this.anims.exists("player_anim_right_diagonal")) {
      this.anims.remove("player_anim_right_diagonal");
    }
  }
  
  
  
}
export default PlayingScreen;
