// EnemyManager.js
import Phaser from "phaser";
import config from "../config/config";

class EnemyManager {
  constructor(scene) {
    this.scene = scene;
    this.enemies = [];
  }

  moveEnemies() {
    // Move enemies
    this.enemies.forEach((enemy) => {
      if (enemy.y >= config.height) {
        enemy.y = 0;
        enemy.x = Phaser.Math.Between(0, config.width - 48);
      }
    });
  }

  addEnemy(enemy) {
    this.enemies.push(enemy);
  }
}

export default EnemyManager;
