import Phaser from "phaser";
import gameSettings from "../config/gameSettings";
import config from "../config/config";
import Bullet from "../objects/projectiles/Bullet";
import Player from "../objects/players/Player";
import Bug1 from "../objects/enemies/Bug1";
import Bug3 from "../objects/enemies/Bug3";
import Bug5 from "../objects/enemies/Bug5";
import HealthPack from "../objects/utilities/healthPack";
import ShieldPack from "../objects/utilities/ShieldPack";
import Shield from "../objects/utilities/Shield";
import EnemyManager from "../manager/enemyManager";
import PlayerManager from "../manager/playerManager";
import CollideManager from "../manager/collideManager";
import UtilitiesManager from "../manager/UtilitiesManager";

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
    this.player = new Player(this, config.width / 2, config.height - 100, 100);
    this.player.play("player_anim");

    // Spawn the Enemies
    this.bug3_1 = new Bug3(this, 150, 200, 100);
    this.bug3_1.play("bug3_anim");
    this.bug3_2 = new Bug3(this, 100, 100, 100);
    this.bug3_2.play("bug3_anim");

    this.shield = new Shield(this, this.player);
    this.shield.play("shield_anim");


    this.bug5 = new Bug5(this, 300, 80, 100);
    this.bug5.play("bug5_anim");

    this.bug1 = new Bug1(this, 200, 180, 100);
    this.bug1.play("bug1_anim");
    // Create managers
    this.playerManager = new PlayerManager(this, this.player);
    this.enemyManager = new EnemyManager(this);
    this.enemyManager.addEnemy(this.bug3_1);
    this.enemyManager.addEnemy(this.bug3_2);
    this.enemyManager.addEnemy(this.bug5);
    this.enemyManager.addEnemy(this.bug1);

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

    

    // Create keyboard inputs
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.P = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

    // Create a group to manage bullets
    this.projectiles = this.physics.add.group({
      classType: Bullet,
      runChildUpdate: true,
    });

    // Create a manager to handle collisions
    this.collideManager = new CollideManager(
      this,
      this.player,
      this.enemyManager.enemies,
      this.UtilitiesManager.healthPacks,
      this.UtilitiesManager.shieldPacks
    );
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
    this.playerManager.movePlayer();
    this.enemyManager.moveEnemies();

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      this.player.shootBullet();
    }

    this.projectiles.children.iterate((bullet) => {
      bullet.update();
    });

    
    this.shield.updatePosition(this.player);

  }

  gameOver() {
    this.scene.start("gameOver");
  }
}
export default PlayingScreen;
