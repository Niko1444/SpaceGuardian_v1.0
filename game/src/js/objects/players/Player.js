import Entity from "../Entity";
import Bullet from "../projectiles/Bullet";
import gameSettings from "../../config/gameSettings";
import HPBar from "../ui/HPBar";
import HPBar2 from "../ui/HPBar2";

class Player extends Entity {
  constructor(scene, x, y, key, health) {
    super(scene, x, y, key, health);
    this.body.velocity.y = gameSettings.playerSpeed;
    this.health = health;
    this.maxHealth = health;
    this.damage = 100;
    // this.hpBarWidth = 180;
    // this.hpBarHeight = 3;
    
    this.shield = null;
    this.setInteractiveEntity();
    this.setPhysics(scene);
    this.body.setSize(48, 48);

    this.hpBar = new HPBar2(
      scene,
      // this.x,
      // this.y - 30,
      scene.sys.game.config.width - 400,
      scene.sys.game.config.height - 40,
      200, // Width of the health bar
      41, 
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
    bullet.play("bullet1_anim");
  }

  setPhysics(scene) {
    super.setPhysics(scene);
  }

  getHeal(heal) {
    if (this.health + heal > this.maxHealth) {
      this.health = this.maxHealth;
    } else if (this.health < this.maxHealth) {
      this.health += heal;
    }
    this.updateHealthBarValue();
  }
}

export default Player;
