import Entity from "../Entity";
import gameSettings from "../../config/gameSettings";
import HPBar from "../ui/HPBar";

class Bug3 extends Entity {
  constructor(scene, x, y, health) {
    super(scene, x, y, "bug3_texture", health);
    this.body.velocity.y = gameSettings.enemySpeed;
    this.health = health;
    this.maxHealth = health;
    this.hpBarWidth = 20;
    this.hpBarHeight = 5;
    this.damage = 10;
    this.setInteractiveEntity();

    this.hpBar = new HPBar(
      scene,
      this.x,
      this.y,
      this.hpBarWidth,
      this.hpBarHeight,
      this.health,
      this.maxHealth
    );
    this.scene.add.existing(this.hpBar);
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
