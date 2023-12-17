import Phaser from "phaser";
import config from "../config/config";
import Bug1 from "../objects/enemies/Bug1";
import Bug3 from "../objects/enemies/Bug3";
import Bug5 from "../objects/enemies/Bug5";
import LoadingScreen from "../scenes/LoadingScreen";

class EnemyManager {
  constructor(scene) {
    this.scene = scene;
    this.enemies = [];
    this.enemiesBug1 = [];
    this.enemiesBug3 = [];
    this.enemiesBug5 = [];
    this.respawnDelays = []; // Array to store individual respawn delays
    this.lastRespawnTimes = []; // Array to store individual last respawn times
    this.explosionCounter = 0;
    this.enemyCounter = 0;

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

  addEnemyForOnce(enemy) {
    this.enemies.push(enemy);
    this.respawnDelays.push(Phaser.Math.Between(5000, 7000));
    this.lastRespawnTimes.push(0);

    this.scene.tweens.add({
        targets: enemy,
        y: config.height,
        duration: 5000, 
        ease: "Linear", 
    });
}

getRandomBugX() {
  const gameWidth = config.width; 
  return Math.random() * gameWidth;
}

spawnRandomEnemy(number) {
    const randomX = this.getRandomBugX();
    if (number == 1) {
    var newEnemy = new Bug1(this.scene, randomX, -20, 30);
    newEnemy.play("bug1_anim");
    this.addEnemy(newEnemy);
    }
    else if (number == 3) {
    var newEnemy = new Bug3(this.scene, randomX, -20, 30);
    newEnemy.play("bug3_anim");
    this.addEnemy(newEnemy);
    } else {
    var newEnemy = new Bug5(this.scene, randomX, -20, 30);
    newEnemy.play("bug5_anim");
    this.addEnemy(newEnemy);
    }

    this.enemyCounter++;

    this.scene.tweens.add({
        targets: newEnemy,
        y: config.height, 
        duration: 4000, 
    });
}

scheduleRandomEnemySpawn(numEnemies, duration = 20000) {
    const endTime = this.scene.time.now + duration;
    const spawnedEnemies = [];

    const spawnEvent = () => {
      // Check if the current time is still within the allowed duration
      if (this.scene.time.now < endTime) {
        for (let i = 0; i < numEnemies; i++) {
          const newEnemy = this.spawnRandomEnemy(Phaser.Math.Between(1, 3));
          spawnedEnemies.push(newEnemy);
        }

        // Schedule the next random enemy spawn
        this.scene.time.addEvent({
          delay: Phaser.Math.Between(3000, 5000),
          callback: null,
          callbackScope: this,
        });
      }
    };

    // Start the initial spawn event
    spawnEvent();

    // Return the array of spawned enemies
    return spawnedEnemies;
  }

  // FOR TUTORIAL SCREEN
  addEnemyTutorial() {
      var newBug = new Bug1(this.scene, config.width/2, -20, 30);
      newBug.play("bug1_anim");
      this.addEnemyForOnce(newBug);
}

// FOR LEVEL 1
  spawnCircleOfBugsLv1(centerX, centerY, radius, numBugs) {
    const angleIncrement = (2 * Math.PI) / numBugs;
    const finalWaveBugs = [];

    for (let i = 0; i < numBugs; i++) {
      const angle = i * angleIncrement;
      const bugX = centerX + radius * Math.cos(angle);
      const bugY = centerY + radius * Math.sin(angle);

      // Create a new bug
      const newBug = new Bug1(this.scene, bugX, -20, 30);
      newBug.play("bug1_anim");
      this.addEnemyForOnce(newBug);
      finalWaveBugs.push(newBug);

      // Add a tween to move the bug downward
      this.scene.tweens.add({
        targets: newBug,
        y: bugY,
        duration: 5000, 
        ease: "Linear", 
      });
    }
    return finalWaveBugs;
  }
}

export default EnemyManager;
