import Phaser from "phaser";
import config from "../config/config";
import HealthPack from "../objects/utilities/healthPack";



class UtilitiesManager {
    constructor(scene) {
        this.scene = scene;
        this.healthPacks = [];
        this.shieldPacks = [];
    //     this.respawnDelays = []; // Array to store individual respawn delays
    //     this.lastRespawnTimes = []; // Array to store individual last respawn times

    // // Set initial random delays and times for each enemy
    // for (let i = 0; i < this.Utilities.length; i++) {
    //   this.respawnDelays[i] = Phaser.Math.Between(2000, 5000);
    //   this.lastRespawnTimes[i] = 0;
    // }
    }

    // moveUtilities(time) {
    //     // Move healthpacks
    //     this.Utilities.forEach((utility, index) => {
    //       if (utility.y >= config.height) {
    //         const currentTime = this.scene.time.now;
    
    //         // Check if enough time has passed for the next respawn for this specific enemy
    //         if (
    //           currentTime - this.lastRespawnTimes[index] >=
    //           this.respawnDelays[index]
    //         ) {
    //           utility.y = Phaser.Math.Between(-100, 100);
    //           utility.x = Phaser.Math.Between(-100, 100);
    //             //config.width - 48
    //           // Set a new random delay for the next respawn for this specific enemy
    //           this.respawnDelays[index] = Phaser.Math.Between(5000, 7000);
    //           this.lastRespawnTimes[index] = currentTime;
    //         }
    //       }
    //     });
    //   }

    addHealthPack(HealthPack) {
      this.healthPacks.push(HealthPack);
      // ... other code for managing respawn delays, etc.
    }
  
    addShieldPack(ShieldPack) {
      this.shieldPacks.push(ShieldPack);
      // ... other code for managing respawn delays, etc.
    }
      // addUtility(utility) {
      //   // When adding a new enemy, initialize its random delay and last respawn time
      //   this.Utilities.push(utility);
      //   // this.respawnDelays.push(Phaser.Math.Between(5000, 7000));
      //   // this.lastRespawnTimes.push(0);
      // }
    }
    

    

export default UtilitiesManager;