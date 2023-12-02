import Entity from "../Entity";
import gameSettings from "../../config/gameSettings";

class Player extends Entity {
  constructor(scene, x, y, health) {
    super(scene, x, y, "player_texture", health);
    this.body.velocity.y = gameSettings.playerSpeed;
    this.health = health;
    this.setInteractiveEntity();
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
}

export default Player;
