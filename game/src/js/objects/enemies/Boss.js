import Entity from "../Entity";
import gameSettings from "../../config/gameSettings";
import HPBar from "../ui/HPBar";
import config from "../../config/config";
import EnemyBullet from "../projectiles/EnemyBullet";
import Phaser from "phaser";

class Boss extends Entity {
  constructor(scene, x, y, health) {
    super(scene, x, y, "boss_texture", health);
    this.body.velocity.y = 1.5 * gameSettings.enemySpeed;
    this.health = health;
    this.maxHealth = health;
    this.hpBarWidth = 200;
    this.hpBarHeight = 10;
    this.damage = 5;
    this.setInteractiveEntity();

    this.isDestroyed = false;

    this.checkCenter = 0;

    this.hpBar = new HPBar(
      scene,
      this.x,
      this.y,
      this.hpBarWidth,
      this.hpBarHeight,
      this.health,
      this.maxHealth
    );
    this.scene.add.existing(this.hpBar);
  }

  setVelocityY(velocity) {
    super.setVelocityY(velocity);
  }

  setVelocityX(velocity) {
    super.setVelocityX(velocity);
  }

  setInteractiveEntity() {
    super.setInteractiveEntity();
  }

  set0health() {
    this.health = 0;
    this.updateHealthBarPosition();
  }

  explode(canDestroy) {
    super.explode(canDestroy);
    this.scene.upgradeManager.updateScore(10);
  }

  shootBullet(scene, enemy) {
    if (this.health > 0) {
      const enemyBullet = new EnemyBullet(scene, enemy);
    }
  }

  moveToCenter() {

    if (this.checkCenter < 150) {
      let direction = new Phaser.Math.Vector2(
        config.width / 2 - this.x,
        config.height / 3 - this.y
      );

      // Normalize the direction vector (convert it to a vector of length 1)
      direction.normalize();

      // If it has, set its y velocity to 0 to stop it
      this.body.velocity.set(
        (direction.x * gameSettings.enemySpeed) / 2,
        (direction.y * gameSettings.enemySpeed) / 2
      );
      this.checkCenter++;
    }
    else {
      this.body.velocity.y = 0;
      this.body.velocity.x = 0;
      this.checkCenter++;
      if (this.checkCenter % 60 == 0) {
        this.shootEightWay(this.scene, this);
      }
    }
  }

  bossBound() {
    // If the boss is about to move out o{f the scene bounds, set a new random velocity
    if (this.health < 550 && this.health > 400) {
      let xVel = 0.75 * gameSettings.enemySpeed;
      let yVel = 0.75 * gameSettings.enemySpeed;

      if (this.body.velocity.x === 0) {
        this.body.velocity.x = xVel;
        this.body.velocity.y = -yVel;
      }
      if (this.x < 150 && this.body.velocity.x <= 0) {
        this.body.velocity.x = xVel;
      }
      if (this.x > config.width - 150 && this.body.velocity.x >= 0) {
        this.body.velocity.x = -gameSettings.enemySpeed;
      }
      if (this.y < 150 && this.body.velocity.y <= 0) {
        this.body.velocity.y = yVel;
      }
      if (this.y > config.height - 150 && this.body.velocity.y > 0) {
        this.body.velocity.y = -yVel;
      }
    }
    else {
      let xVel = 0.25 * gameSettings.enemySpeed;
      let yVel = 0.25 * gameSettings.enemySpeed;
      this.checkCenter++;

      if (this.body.velocity.x === 0) {
        this.body.velocity.x = xVel;
      }
      if (this.x < 150 && this.body.velocity.x <= 0) {
        this.body.velocity.x = xVel;
      }
      if (this.x > config.width - 150 && this.body.velocity.x >= 0) {
        this.body.velocity.x = -xVel;
      }
      if (this.y < 150 && this.body.velocity.y <= 0) {
        this.body.velocity.y = yVel;
      }
      if (this.y > config.height - 150 && this.body.velocity.y > 0) {
        this.body.velocity.y = -yVel;
      }

      if (this.health > 0) {
        if (this.checkCenter % 60 == 0) {
          this.shootEightWay(this.scene, this);
          this.checkCenter = 0;
        }
      }
      
    }

  }

  shootEightWay(scene, enemy) {
    if (this.health > 0) {
      let randomAngle = Math.random() * 2 * Math.PI;

      for (let i = randomAngle; i <= 2 * Math.PI + randomAngle; i = i + Math.PI / 4) {
        let angle = i;
        let rotation = {
          x: Math.cos(angle),
          y: Math.sin(angle)
        };
        const bossBulletLeft = new EnemyBullet(scene, enemy, -110, 0, rotation, angle)
        const enemyBulletRight = new EnemyBullet(scene, enemy, 110, 0, rotation, angle)
      }
    }
  }




}

export default Boss;
