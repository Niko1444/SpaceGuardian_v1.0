import Entity from "../Entity";
import gameSettings from "../../config/gameSettings";
import HPBar from "../ui/HPBar";

class Bug5 extends Entity {
  constructor(scene, x, y, health) {
    super(scene, x, y, "bug5_texture", health);
    this.body.velocity.y = gameSettings.enemySpeed;
    this.health = health;
    this.maxHealth = health;
    this.damage = 100;
    this.setInteractiveEntity();

    this.hpBar = new HPBar(
      scene,
      this.x,
      this.y - 30,
      100,
      20,
      this.health,
      this.maxHealth
    );
    this.scene.add.existing(this.hpBar);
  }

  updateHealthBarValue(health, maxHealth) {
    this.hpBar.setValue(this.health, this.maxHealth);
  }

  updateHealthBarPosition() {
    this.hpBar.x = this.x;
    this.hpBar.y = this.y - 20;
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

  takeDamage(damage) {
    super.takeDamage(damage);
    this.updateHealthBarValue();
  }
}

export default Bug5;
