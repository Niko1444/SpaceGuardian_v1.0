import Entity from "../Entity.js";
import gameSettings from "../../config/gameSettings.js";

class HealthPack extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "healthPack_texture"); // Replace with your health pack texture key
    scene.add.existing(this);
    scene.physics.add.existing(this);
    // Other initialization code for the health pack, such as collision handling, animations, etc.
    // Enable collisions between health pack and player
    scene.physics.add.overlap(
      this,
      scene.player,
      this.collectHealth,
      null,
      this
    );

    // Randomly set initial velocity for movement
    this.setRandomVelocity();
  }

  collectHealth() {
    // Check if player's health is not already full
    if (this.scene.player.health < this.scene.player.maxHealth) {
      // Increase player's health (assuming player object has properties like 'health' and 'maxHealth')
      this.scene.player.health += 10; // Increase health by 10 (adjust as needed)

      // Ensure player's health doesn't exceed the maximum
      if (this.scene.player.health > this.scene.player.maxHealth) {
        this.scene.player.health = this.scene.player.maxHealth;
      }

      // Update the player's health bar or any other UI element
      // Example: this.scene.updateHealthBar(this.scene.player.health);

      // Destroy the health pack once collected
      this.destroy();
    }
  }

  setRandomVelocity() {
    const randomVelocityX = Phaser.Math.Between(-100, 100);
    const randomVelocityY = Phaser.Math.Between(-100, 100);
    this.body.setVelocity(randomVelocityX, randomVelocityY);
  }

  // Additional methods or properties specific to HealthPack class can be added here
}

export default HealthPack;
