import Entity from "../Entity";
import gameSettings from "../../config/gameSettings";

class Bug3 extends Entity {
  constructor(scene, x, y, health) {
    super(scene, x, y, "bug3_texture", health);
    this.body.velocity.y = gameSettings.enemySpeed;
    this.health = health;
    this.damage = 100;
    this.setInteractiveEntity();
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

  setInteractiveEntity() {
    super.setInteractiveEntity();
  }
}

export default Bug3;
