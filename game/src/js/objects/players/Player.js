import Entity from "../Entity";
import Bullet from "../projectiles/Bullet";
import gameSettings from "../../config/gameSettings";

class Player extends Entity {
  constructor(scene, x, y, health) {
    super(scene, x, y, "player_texture", health);
    this.body.velocity.y = gameSettings.playerSpeed;
    this.health = health;
    this.damage = 100;
    this.setInteractiveEntity();
    this.setPhysics(scene);
    this.body.setSize(48, 48);
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

  shootBullet() {
    const bullet = new Bullet(this.scene, this.x, this.y);
  }

  setPhysics(scene) {
    super.setPhysics(scene);
  }
}

export default Player;
