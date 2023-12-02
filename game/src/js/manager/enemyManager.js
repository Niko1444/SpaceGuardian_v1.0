import Phaser from "phaser";
import config from "../config/config";

class EnemyManager {
  constructor(scene) {
    this.scene = scene;
    this.enemies = [];
    this.respawnDelays = []; // Array to store individual respawn delays
    this.lastRespawnTimes = []; // Array to store individual last respawn times

    // Set initial random delays and times for each enemy
    for (let i = 0; i < this.enemies.length; i++) {
      this.respawnDelays[i] = Phaser.Math.Between(2000, 5000);
      this.lastRespawnTimes[i] = 0;
    }
  }

  moveEnemies(time) {
    // Move enemies
    this.enemies.forEach((enemy, index) => {
      if (enemy.y >= config.height) {
        const currentTime = this.scene.time.now;

        // Check if enough time has passed for the next respawn for this specific enemy
        if (
          currentTime - this.lastRespawnTimes[index] >=
          this.respawnDelays[index]
        ) {
          enemy.y = 0;
          enemy.x = Phaser.Math.Between(0, config.width - 48);

          // Set a new random delay for the next respawn for this specific enemy
          this.respawnDelays[index] = Phaser.Math.Between(5000, 7000);
          this.lastRespawnTimes[index] = currentTime;
        }
      }
    });
  }

  addEnemy(enemy) {
    // When adding a new enemy, initialize its random delay and last respawn time
    this.enemies.push(enemy);
    this.respawnDelays.push(Phaser.Math.Between(5000, 7000));
    this.lastRespawnTimes.push(0);
  }
}

export default EnemyManager;
