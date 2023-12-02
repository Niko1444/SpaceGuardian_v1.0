import Phaser from "phaser";
import gameSettings from "../config/gameSettings";
import config from "../config/config";
import Bullet from "../objects/projectiles/Bullet";
import Bug3 from "../objects/enemies/Bug3";
import Bug5 from "../objects/enemies/Bug5";
import EnemyManager from "../manager/enemyManager";
import CollideManager from "../manager/collideManager";

const BACKGROUND_SCROLL_SPEED = 0.5;
class PlayingScreen extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    this.background = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background_texture"
    );
    this.background.setOrigin(0, 0);

    // Spawn the Player
    this.player = this.physics.add.sprite(
      config.width / 2,
      config.height / 2 + 180,
      "player_texture"
    );
    this.player.setDepth(2);
    this.player.play("player_anim");

    // Spawn the Enemies
    this.bug3 = new Bug3(this, 100, 100, 100);
    this.bug3.play("bug3_anim");
    this.bug5 = new Bug5(this, 300, 100, 100);
    this.bug5.play("bug5_anim");

    // Create managers
    this.enemyManager = new EnemyManager(this);
    this.enemyManager.addEnemy(this.bug3);
    this.enemyManager.addEnemy(this.bug5);

    // Set interactive objects
    this.setInteractiveObjects(this.player);
    this.setInteractiveObjects(this.bug3);
    this.setInteractiveObjects(this.bug5);

    // Create keyboard inputs
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.P = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

    this.player.setCollideWorldBounds(true);

    // Create a group to manage bullets
    this.projectiles = this.physics.add.group({
      classType: Bullet,
      runChildUpdate: true,
    });
  }

  update() {
    // Pause the game
    if (Phaser.Input.Keyboard.JustDown(this.P)) {
      config.pauseGame = !config.pauseGame;
      if (config.pauseGame === true) {
        this.scene.launch("pauseScreen");
        this.scene.pause();
      }
    }

    // Move the background
    this.background.tilePositionY -= BACKGROUND_SCROLL_SPEED;

    // Move the player and enemies
    this.movePlayerManagement();
    this.enemyManager.moveEnemies();

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      this.shootBullet();
    }

    this.projectiles.children.iterate((bullet) => {
      bullet.update();
    });
  }

  setInteractiveObjects(gameObject) {
    gameObject.setInteractive();
  }

  movePlayerManagement() {
    if (this.cursorKeys.up.isDown) {
      this.player.setVelocityY(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.down.isDown) {
      this.player.setVelocityY(gameSettings.playerSpeed);
    } else {
      this.player.setVelocityY(0);
    }

    if (this.cursorKeys.left.isDown) {
      this.player.setVelocityX(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.right.isDown) {
      this.player.setVelocityX(gameSettings.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }
  }

  shootBullet() {
    const bullet = new Bullet(this);
  }

  gameOver() {
    this.scene.start("gameOver");
  }
}
export default PlayingScreen;
