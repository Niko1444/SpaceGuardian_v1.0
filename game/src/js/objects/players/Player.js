import Entity from "../Entity";
import Bullet from "../projectiles/Bullet";
import gameSettings from "../../config/gameSettings";
import HPBar from "../ui/HPBar";

class Player extends Entity {
  constructor(scene, x, y, key, health) {
    super(scene, x, y, key, health);
    this.body.velocity.y = gameSettings.playerSpeed;
    this.health = health;
    this.maxHealth = health;
    this.damage = 100;
    this.hpBarWidth = 50;
    this.hpBarHeight = 5;

    this.setInteractiveEntity();
    this.setPhysics(scene);
    this.body.setSize(48, 48);

    this.hpBar = new HPBar(
      scene,
      this.x,
      this.y - 30,
      this.hpBarWidth,
      this.hpBarHeight,
      this.health,
      this.maxHealth
    );
    this.scene.add.existing(this.hpBar);
    this.key = key;
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
