import Phaser from "phaser";
import config from "../config/config";
import Bug1 from "../objects/enemies/Bug1";

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

  spawnCircleOfBugs(centerX, centerY, radius, numBugs) {
    const angleIncrement = (2 * Math.PI) / numBugs;

    for (let i = 0; i < numBugs; i++) {
      const angle = i * angleIncrement;
      const bugX = centerX + radius * Math.cos(angle);
      const bugY = centerY + radius * Math.sin(angle);

      // Create a new bug
      const newBug = new Bug1(this.scene, bugX, -20, 100); // Initialize at the top
      this.addEnemy(newBug); // Add the bug to the array

      // Add a tween to move the bug downward
      this.scene.tweens.add({
        targets: newBug,
        y: bugY, // Final Y position (centerY)
        duration: 10000, // Duration of the drop (in milliseconds)
        ease: "Linear", // Linear easing for constant speed
        onComplete: () => {
          // Bug has reached its final position
          // You can add any additional logic here if needed
        },
      });
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
