import Phaser from "phaser";
import HealthPack from "../objects/utilities/healthPack";

class HealthPackManager {
    constructor(scene) {
        this.scene = scene;
        this.healthPacks = scene.physics.add.group(); // Group to manage health packs
        this.maxHealthPacks = 5; // Maximum number of health packs on screen at a time
    }

    createHealthPack() {
        if (this.healthPacks.getChildren().length < this.maxHealthPacks) {
            const healthPack = new HealthPack(this.scene);
            this.healthPacks.add(healthPack);
        }
    }

    startDroppingHealthPacks() {
        const randomDropTime = Phaser.Math.Between(5000, 10000); // Random interval between 5 to 10 seconds

        this.dropHealthPack(); // Drop a health pack immediately when starting

        this.dropTimer = this.scene.time.addEvent({
            delay: randomDropTime,
            loop: true,
            callback: this.dropHealthPack,
            callbackScope: this
        });
    }

    dropHealthPack() {
        if (this.healthPacks.getChildren().length < this.maxHealthPacks) {
            const healthPack = new HealthPack(this.scene);
            this.healthPacks.add(healthPack);
        }
    }

    // Other HealthPackManager methods...
}

export default HealthPackManager;