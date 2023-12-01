// EnemyManager.js
import Phaser from "phaser";
import gameSettings from "../config/gameSettings";
import config from "../config/config";

class EnemyManager {
  constructor(scene, bug3) {
    this.scene = scene;
    this.bug3 = bug3;
  }

  moveEnemies() {
    // Move bug3
    if (this.bug3.y >= config.height) {
      this.bug3.y = 0;
      this.bug3.x = Phaser.Math.Between(0, config.width - 48);
    }
  }
}

export default EnemyManager;
