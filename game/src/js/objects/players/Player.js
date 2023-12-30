import Entity from "../Entity";
import Bullet from "../projectiles/Bullet";
import gameSettings from "../../config/gameSettings";
import HPBar from "../ui/HPBar";
import HPBar2 from "../ui/HPBar2";
import soundManager from "../../manager/soundManager";
class Player extends Entity {
  constructor(scene, x, y, key, health) {
    super(scene, x, y, key, health);
    this.body.velocity.y = gameSettings.playerSpeed;
    this.health = health;
    this.maxHealth = health;
    this.damage = 300;
    this.bulletDamage = gameSettings.playerBulletDamage;
    this.speed = gameSettings.playerSpeed;

    this.shield = null;
    this.setInteractiveEntity();
    this.setPhysics(scene);
    this.body.setSize(48, 48);
    this.body.velocity.y = this.speed;
    this.bulletSize = gameSettings.playerBulletSize;

    this.fireRate = gameSettings.playerFireRate; // default 700
    this.lastShootTime = 0;
    this.lifestealRate = gameSettings.playerLifesteal;
    this.numberOfBullets = gameSettings.playerNumberOfBullets;
    this.bulletSpeed = gameSettings.playerBulletSpeed;

    this.soundManager = new soundManager(scene);

    this.hpBar = new HPBar2(
      scene,
      scene.sys.game.config.width - 400,
      scene.sys.game.config.height - 40,
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
        (this.bulletSize / gameSettings.playerDefaultBulletSize) * 0.8;

      for (let i = 0; i < totalBullets; i++) {
        const offsetX = (patternsX[totalBullets][i] || 0) * bulletSizeScale;
        const offsetY = (patternsY[totalBullets][i] || 0) * bulletSizeScale;

        const bullet = new Bullet(this.scene, number);
        bullet.damage = this.bulletDamage;
        bullet.body.velocity.y = -this.bulletSpeed;
        bullet.setPosition(this.x + offsetX, this.y + offsetY);

        bullet.play(`bullet${number}_anim`);
      }
      this.soundManager.playBulletSound();
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
}

export default Player;
