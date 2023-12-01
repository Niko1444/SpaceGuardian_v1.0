import Entity from "../Entity";
import gameSettings from "../../config/gameSettings";

class Bug3 extends Entity {
  constructor(scene, x, y, health) {
    super(scene, x, y, "bug3", "bug3_texture", health);

    this.body.velocity.y = Phaser.Math.Between(
      gameSettings.enemySpeed / 2,
      gameSettings.enemySpeed
    );
  }

  onDestroy() {
    super.onDestroy();
  }

  takeDamage(amount) {
    super.takeDamage(amount);
  }

  setVelocityY(velocity) {
    super.setVelocityY(velocity);
  }

  setVelocityX(velocity) {
    super.setVelocityX(velocity);
  }
}

export default Bug3;
