import Phaser from "phaser";
import config from "../config/config.js";
import gameSettings from "../config/gameSettings.js";

class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, texture, health) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setData("texture", texture);
    this.setData("isDead", false);
    this.setData("health", health);

    this.setInteractiveEntity();
  }

  takeDamage(amount) {
    // Reduce health by the specified amount
    const currentHealth = this.getData("health");
    const newHealth = Math.max(0, currentHealth - amount);
    this.setData("health", newHealth);

    // Check if the entity is still alive
    if (newHealth <= 0) {
      this.explode(true);
    }
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }

  explode(canDestroy) {
    if (!this.getData("isDead")) {
      this.setTexture("explosion");
      this.play("explosion");

      if (this.shootTimer !== undefined) {
        if (this.shootTimer) {
          this.shootTimer.remove(false);
        }
      }

      this.setAngle(0);
      this.body.setVelocity(0, 0);

      this.on(
        "animationcomplete",
        function () {
          if (canDestroy) {
            this.destroy();
          } else {
            this.setVisible(false);
          }
        },
        this
      );
      this.setData("isDead", true);
    }
  }

  setInteractiveEntity() {
    this.setInteractive();
  }

  setVelocityY(velocity) {
    this.body.setVelocityY(velocity);
  }

  setVelocityX(velocity) {
    this.body.setVelocityX(velocity);
  }
}

export default Entity;
