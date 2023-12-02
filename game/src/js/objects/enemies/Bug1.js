import Entity from "../Entity";
import gameSettings from "../../config/gameSettings";

class Bug1 extends Entity {
  constructor(scene, x, y, health) {
    super(scene, x, y, "bug1", "bug1_texture", health);
    this.body.velocity.y = gameSettings.enemySpeed;
    this.health = health;

    this.setInteractiveEntity();
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

  setInteractiveEntity() {
    super.setInteractiveEntity();
  }
}

export default Bug1;
