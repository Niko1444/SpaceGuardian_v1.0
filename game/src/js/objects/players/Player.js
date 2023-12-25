import Entity from "../Entity";
import Bullet from "../projectiles/Bullet";
import gameSettings from "../../config/gameSettings";
import HPBar from "../ui/HPBar";
import HPBar2 from "../ui/HPBar2";

class Player extends Entity {
  constructor(scene, x, y, key, health) {
    super(scene, x, y, key, health);
    this.body.velocity.y = gameSettings.playerSpeed;
    this.health = health;
    this.maxHealth = health;
    this.damage = 100;
    this.bulletDamage = 10;
    this.speed = gameSettings.playerSpeed;

    this.shield = null;
    this.setInteractiveEntity();
    this.setPhysics(scene);
    this.body.setSize(48, 48);
    this.body.velocity.y = this.speed;
    this.bulletSize = 1.2;

    this.fireRate = 400;
    this.lastShootTime = 0;
    this.lifestealRate = 0;

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

      const bullet = new Bullet(this.scene, number);
      bullet.damage = this.bulletDamage;
      bullet.play(`bullet${number}_anim`);
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
