import Phaser from "phaser";
import config from "../config/config.js";
import gameSettings from "../config/gameSettings.js";

class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, health) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setData("isDead", false);
    this.setData("health", health);

    this.setInteractiveEntity();
  }

  explode(canDestroy) {
    if (!this.getData("isDead")) {
      this.setTexture("explosion_texture");
      this.play("explosion_anim");

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
