import Entity from "../Entity";
import gameSettings from "../../config/gameSettings";
import HPBar from "../ui/HPBar";
import EnemyBullet from "../projectiles/EnemyBullet";
import config from "../../config/config";
import Phaser from "phaser";
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

  rotateToPlayer(player) {
    if(this.health > 0) 
    {
      let dx = player.x - this.x;
      let dy = player.y - this.y;
  
      this.rotation = Math.atan2(dy, dx) + Math.PI*3 / 2;

      let randomY = Phaser.Math.Between(config.height/6, config.height*7/8);

      if (this.y >= randomY) {
      // If it has, set its y velocity to 0 to stop it
        this.body.velocity.y = 0;
      }
    }
  }

  shootBullet(scene, enemy) {
    if(this.health > 0) {
    const enemyBullet = new EnemyBullet(scene, enemy);
    }
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
