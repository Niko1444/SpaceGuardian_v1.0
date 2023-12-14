import Entity from "../Entity.js";
import gameSettings from "../../config/gameSettings.js";
import config from "../../config/config.js";
import Bug3 from "../enemies/Bug3.js";

class EnemyBullet extends Entity {
  constructor(scene, enemy) {
    super(
      scene,
      enemy.x,
      enemy.y + 10,
      "bullet_texture",
      "bullet",
      1
    );
    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    scene.enemyProjectiles.add(this);
    this.initializeVelocity();
    this.damage = 50;
    this.setDepth(1);
  }

  initializeVelocity() {
    // Calculate the direction vector from enemy to player
    let direction = new Phaser.Math.Vector2(this.scene.player.x - this.x, this.scene.player.y - this.y);

    // Normalize the direction vector (convert it to a vector of length 1)
    direction.normalize();

    // Set the velocity of the bullet
    this.body.velocity.set(direction.x * gameSettings.bulletSpeed, direction.y * gameSettings.bulletSpeed);

    // Calculate the angle in radians from the direction vector
    let angle = Math.atan2(direction.y, direction.x);

    // Convert the angle to degrees and set it to the angle of the bullet sprite
    let pi = Math.PI;

    this.angle = Phaser.Math.RadToDeg(angle) + 90;
    
  }

  update() {

    if (this.y < 20 || !this.active) {
      this.destroy();
    }
    
    if(this.x <= 0 || this.x >= config.width) {
      this.destroy();
    }
  }

  destroy() {
    // Call the parent destroy method if needed
    super.destroy();
  }
}

export default EnemyBullet;