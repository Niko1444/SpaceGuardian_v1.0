import Entity from "../Entity";
import gameSettings from "../../config/gameSettings";

class Bug5 extends Entity {
  constructor(scene, x, y, health) {
    super(scene, x, y, "bug5", "bug5_texture", health);
    this.body.velocity.y = gameSettings.enemySpeed;
    this.health = health;
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

export default Bug5;
