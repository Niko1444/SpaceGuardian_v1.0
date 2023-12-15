import Entity from "../Entity";
import gameSettings from "../../config/gameSettings";
import HPBar from "../ui/HPBar";

class Bug1 extends Entity {
  constructor(scene, x, y, health) {
    super(scene, x, y, "bug1_texture", health);
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

  setVelocityY(velocity) {
    super.setVelocityY(velocity);
  }

  setVelocityX(velocity) {
    super.setVelocityX(velocity);
  }

  setInteractiveEntity() {
    super.setInteractiveEntity();
  }

  explode(canDestroy) {
    super.explode(canDestroy);
    this.scene.upgradeManager.updateScore(10);
  }
}

export default Bug1;
