import config from "../config/config";
import CollideManager from "./collideManager";

class DamageManager {
  constructor(scene, player, enemies) {
    this.scene = scene;
    this.player = player;
    this.enemies = enemies;
    this.collideManager = new CollideManager(scene, player, enemies);
  }

  // Method to handle damage to the player
  damagePlayer(amount) {
    if (this.player && this.player.takeDamage) {
      this.player.takeDamage(amount);

      // Check if the player's health is zero or below, then trigger game over
      if (this.player.getData("health") <= 0) {
        this.scene.gameOver();
      }
    }
  }

  // Method to handle damage to enemies
  damageEnemy(enemy, amount) {
    if (enemy && enemy.takeDamage) {
      enemy.takeDamage(amount);

      // Check if the enemy's health is zero or below, then destroy
      if (enemy.getData("health") <= 0) {
        this.collideManager.bulletHitEnemy(null, enemy); // Trigger enemy destruction
      }
    }
  }

  // You can add more methods as needed for specific damage scenarios
}

export default DamageManager;
