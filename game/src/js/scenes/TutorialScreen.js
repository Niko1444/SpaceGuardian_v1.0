import Phaser from "phaser";
import gameSettings from "../config/gameSettings";
import config from "../config/config";
import Bullet from "../objects/projectiles/Bullet";
import Player from "../objects/players/Player";
import Shield from "../objects/utilities/Shield";
import EnemyManager from "../manager/enemyManager";
import KeyboardManager from "../manager/KeyboardManager";
import PlayerManager from "../manager/playerManager";
import CollideManager from "../manager/collideManager";
import HPBar from "../objects/ui/HPBar";
import GuiManager from "../manager/GuiManager";
import UtilitiesManager from "../manager/UtilitiesManager";

const BACKGROUND_SCROLL_SPEED = 0.5;
class TutorialScreen extends Phaser.Scene {
  constructor() {
    super("playTutorial");
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
    
    // Creat GUI for TutorialScreen ( Changes in BG except Player and Enemy )
    this.guiManager = new GuiManager(this);
    this.guiManager.createBackground("background_texture_01");
    this.createTutorialText("Press Space to shoot",config.width / 2,config.height / 2 - 60);
    this.createTutorialText("Press Directions to move",config.width / 2,config.height / 2 - 30,);
    this.time.delayedCall(8000, () => {
    this.guiManager.createSimpleText(config.width / 2, config.height / 2, 
    "Ready? Press enter to start", "25px", "#ffffff", 0.5);
    },null, this);
    
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
    this.enemyManager = new EnemyManager(this);
    
    // call the enemy
    this.time.addEvent({
      delay: 5000,
      callback: () => {
          this.enemyManager.addEnemyTutorial();
      },
      callbackScope: this,
  });

    this.UtilitiesManager = new UtilitiesManager(this);

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

    this.input.keyboard.on("keydown-ENTER", this.startGame, this);
  }

  createTutorialText(key, x, y) {
    // Display "Final Wave" text for 2 seconds
    const TutorialText = this.add.text(
      x,
      y,
      key,
      { fontSize: '28px', fill: '#ffffff' }
    ).setOrigin(0.5);

    this.time.delayedCall(4000, () => {
      TutorialText.destroy();},null, this);
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

      // this.guiManager.hideSimpleText();
    }

    this.projectiles.children.iterate((bullet) => {
      bullet.update();
    });

    if (this.player.health <= 0) {
      this.gameOver();
    }

    this.shield.updatePosition(this.player);    
  }

  startGame() {
    this.time.delayedCall(1000, () => {
      this.scene.start("playGame", { number: this.selectedPlayerIndex });
    });
  }
  gameOver() {
    this.scene.start("gameOver");
  }
}
export default TutorialScreen;
