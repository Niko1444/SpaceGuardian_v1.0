import Entity from "../Entity";
import gameSettings from "../../config/gameSettings";

class Bug3 extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "bug3", "bug3_texture");
    this.body.velocity.y = Phaser.Math.Between(
      gameSettings.enemySpeed / 2,
      gameSettings.enemySpeed
    );
  }

  onDestroy() {
    super.onDestroy();
  }

  setVelocityY(velocity) {
    super.setVelocityY(velocity);
  }

  setVelocityX(velocity) {
    super.setVelocityX(velocity);
  }
}

export default Bug3;
