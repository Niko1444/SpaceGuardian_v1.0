import Entity from "../Entity";
import Bullet from "../projectiles/Bullet";
import gameSettings from "../../config/gameSettings";
import HPBar2 from "../ui/HPBar2";
import SoundManager from "../../manager/SoundManager";
class Player extends Entity {
  constructor(scene, x, y, key, health) {
    super(scene, x, y, key, health);
    this.body.velocity.y = gameSettings.savePlayerSpeed;
    this.health = health;
    this.maxHealth = health;
    this.damage = 300;
    this.bulletDamage = gameSettings.savePlayerBulletDamage;
    this.speed = gameSettings.savePlayerSpeed;

    this.shield = null;
    this.setInteractiveEntity();
    this.setPhysics(scene);
    this.body.setSize(48, 48);
    this.body.velocity.y = this.speed;
    this.bulletSize = gameSettings.savePlayerBulletSize;

    this.fireRate = gameSettings.savePlayerFireRate; // default 700
    this.lastShootTime = 0;
    this.lifestealRate = gameSettings.savePlayerLifesteal;
    this.numberOfBullets = gameSettings.savePlayerNumberOfBullets;
    this.bulletSpeed = gameSettings.savePlayerBulletSpeed;

    this.SoundManager = new SoundManager(scene);

    this.hpBar = new HPBar2(
      scene,
      scene.sys.game.config.width - 450,
      scene.sys.game.config.height - 60,
      200,
      41,
      this.health,
      this.maxHealth
    );
    this.scene.add.existing(this.hpBar);
    this.key = key;

    this.setDepth(1);
  }

  // preload(){
  //   this.load.audio('shootSound', 'assets/audio/missile.ogg');

  // }
  setVelocityY(velocity) {
    super.setVelocityY(velocity);
  }

  setVelocityX(velocity) {
    super.setVelocityX(velocity);
  }

  explode(canDestroy) {
    super.explode(canDestroy);
  }

  setInteractiveEntity() {
    super.setInteractiveEntity();
  }

  shootBullet(number) {
    const currentTime = this.scene.time.now;
    const elapsedTime = currentTime - this.lastShootTime;

    if (elapsedTime > this.fireRate) {
      this.lastShootTime = currentTime;

      let totalBullets = this.numberOfBullets;

      // Define patterns for 3, 4, and 5 bullets
      const patternsX = {
        1: [0], // Pattern for 1 bullet
        2: [-15, 15], // Pattern for 2 bullets
        3: [-15, 0, 15], // Pattern for 3 bullets
        4: [-30, -15, 15, 30], // Pattern for 4 bullets
        5: [-30, -15, 0, 15, 30], // Pattern for 5 bullets
        6: [-45, -30, -15, 15, 30, 45], // Pattern for 6 bullets
      };

      const patternsY = {
        1: [0], // Pattern for 1 bullet
        2: [0, 0], // Pattern for 2 bullets
        3: [0, -25, 0], // Pattern for 3 bullets
        4: [0, -25, -25, 0], // Pattern for 4 bullets
        5: [0, -25, -50, -25, 0], // Pattern for 5 bullets
        6: [0, -25, -50, -50, -25, 0], // Pattern for 6 bullets
      };

      const bulletSizeScale =
        (this.bulletSize / gameSettings.savePlayerDefaultBulletSize) * 0.8;

      for (let i = 0; i < totalBullets; i++) {
        const offsetX = (patternsX[totalBullets][i] || 0) * bulletSizeScale;
        const offsetY = (patternsY[totalBullets][i] || 0) * bulletSizeScale;

        const bullet = new Bullet(this.scene, number);
        bullet.damage = this.bulletDamage;
        bullet.body.velocity.y = -this.bulletSpeed;
        bullet.setPosition(this.x + offsetX, this.y + offsetY);

        bullet.play(`bullet${number}_anim`);
      }
      this.SoundManager.playBulletSound();
    }
  }

  setPhysics(scene) {
    super.setPhysics(scene);
  }

  getHeal(heal) {
    if (this.health + heal > this.maxHealth) {
      this.health = this.maxHealth;
    } else if (this.health < this.maxHealth) {
      this.health += heal;
    }
    this.updateHealthBarValue();
  }

  savePlayer(){
    gameSettings.savePlayerSpeed = this.speed;
    gameSettings.savePlayerBulletDamage = this.bulletDamage;
    gameSettings.savePlayerLifesteal = this.lifestealRate;
    gameSettings.savePlayerBulletSpeed = this.bulletSpeed;
    gameSettings.savePlayerScore = gameSettings.playerScore;
    gameSettings.savePlayerNumberOfBullets = this.numberOfBullets;
    gameSettings.savePlayerFireRate = this.fireRate;
    gameSettings.savePlayerDefaultBulletSize = gameSettings.playerDefaultBulletSize;
    gameSettings.savePlayerBulletSize = this.bulletSize;
  }

  restartToTile(){
    gameSettings.savePlayerSpeed = 250;
    gameSettings.savePlayerBulletDamage = 100;
    gameSettings.savePlayerLifesteal = 0;
    gameSettings.savePlayerBulletSpeed = 400;
    gameSettings.savePlayerScore = 0;
    gameSettings.savePlayerNumberOfBullets = 1;
    gameSettings.savePlayerFireRate = 700;
    gameSettings.savePlayerDefaultBulletSize = 0;
    gameSettings.savePlayerBulletSize = 0;
    this.restartGameSettings();
  }

  restartGameSettings(){
    gameSettings.playerSpeed = gameSettings.savePlayerSpeed;
    gameSettings.playerBulletDamage = gameSettings.savePlayerBulletDamage;
    gameSettings.playerLifesteal = gameSettings.savePlayerLifesteal; 
    gameSettings.playerBulletSpeed = gameSettings.savePlayerBulletSpeed;
    gameSettings.playerScore = gameSettings.savePlayerScore;
    gameSettings.playerNumberOfBullets = gameSettings.savePlayerNumberOfBullets;
    gameSettings.playerFireRate = gameSettings.savePlayerFireRate;
    gameSettings.playerDefaultBulletSize = gameSettings.savePlayerDefaultBulletSize;
    gameSettings.playerBulletSize = gameSettings.savePlayerBulletSize;
  }
}

export default Player;
