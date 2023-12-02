import Phaser from "phaser";
import gameSettings from "../config/gameSettings";
import config from "../config/config";
import Bullet from "../objects/projectiles/Bullet";
import Bug1 from "../objects/enemies/Bug1";
import Bug3 from "../objects/enemies/Bug3";
import Bug5 from "../objects/enemies/Bug5";
import EnemyManager from "../manager/enemyManager";

import PlayerManagement from "../manager/playerManager";
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

    this.playerManagement = new PlayerManagement(this, this.player);

    // Spawn the Enemies
    this.bug3_1 = new Bug3(this, 150, 200, 100);
    this.bug3_1.play("bug3_anim");
    this.bug3_2 = new Bug3(this, 100, 100, 100);
    this.bug3_2.play("bug3_anim");

    this.bug5 = new Bug5(this, 300, 80, 100);
    this.bug5.play("bug5_anim");

    this.bug1 = new Bug1(this, 200, 180, 100);
    this.bug1.play("bug1_anim");
    // Create managers
    this.enemyManager = new EnemyManager(this);
    this.enemyManager.addEnemy(this.bug3_1);
    this.enemyManager.addEnemy(this.bug3_2);
    this.enemyManager.addEnemy(this.bug5);
    this.enemyManager.addEnemy(this.bug1);

    // Set interactive
    this.setInteractiveObjects(this.player);

    // Create keyboard inputs
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
    this.playerManagement.movePlayerManagement();
    this.enemyManager.moveEnemies();

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      this.shootBullet();
    }

    this.projectiles.children.iterate((bullet) => {
      bullet.update();
    });
  }

  shootBullet() {
    const bullet = new Bullet(this);
  }

  gameOver() {
    this.scene.start("gameOver");
  }
}
export default PlayingScreen;
