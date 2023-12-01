// EnemyManager.js
import Phaser from "phaser";
import gameSettings from "../config/gameSettings";
import config from "../config/config";

class EnemyManager {
  constructor(scene, enemy1, enemy2, bug3) {
    this.scene = scene;
    this.enemy_1 = enemy1;
    this.enemy_2 = enemy2;
    this.bug3 = bug3;
  }

  moveEnemies() {
    // Move enemy_1
    if (this.enemy_1.y >= config.height) {
      this.enemy_1.y = 0;
      this.enemy_1.x = Phaser.Math.Between(0, config.gameWidth - 48);
    }

    this.enemy_1.setVelocityY(gameSettings.enemySpeed);

    // Move enemy_2
    if (this.enemy_2.y >= config.height) {
      this.enemy_2.y = 0;
      this.enemy_2.x = Phaser.Math.Between(0, config.gameWidth - 48);
    }

    this.enemy_2.setVelocityY(gameSettings.enemySpeed);

    // Move bug3
    if (this.bug3.y >= config.height) {
      this.bug3.y = 0;
      this.bug3.x = Phaser.Math.Between(0, config.gameWidth - 48);
    }

    this.bug3.setVelocityY(gameSettings.enemySpeed);
  }
}

export default EnemyManager;
