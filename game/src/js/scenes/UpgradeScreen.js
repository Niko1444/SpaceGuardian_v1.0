import Phaser from "phaser";
import config from "../config/config";

class UpgradeScreen extends Phaser.Scene {
  constructor() {
    super("upgradeScreen");
  }

  preload() {
    // Load upgrade images
    this.load.image("upgrade1", "assets/images/upgrades/upgrade_01.png");
    this.load.image("upgrade2", "assets/images/upgrades/upgrade_02.png");
    this.load.image("upgrade3", "assets/images/upgrades/upgrade_03.png");
  }

  create() {
    this.cameras.main.setAlpha(0.8);

    const middleX = config.width / 2;
    const middleY = (config.height - 100) / 2;

    const rowGap = 150;

    // Upgrade 1
    const upgrade1Rect = this.add.rectangle(
      middleX,
      middleY - rowGap,
      300,
      100,
      0x000000
    );
    upgrade1Rect.setInteractive();

    const upgrade1Image = this.add.sprite(
      middleX - 100,
      middleY - rowGap,
      "upgrade1"
    );
    upgrade1Image.setOrigin(0.5, 0.5);

    const upgrade1Text = this.add.text(
      middleX,
      middleY - rowGap,
      "Increase Health",
      {
        fontSize: "16px",
        fill: "#fff",
        align: "left",
      }
    );
    upgrade1Text.setOrigin(0, 0.5);

    const upgrade2 = this.add.sprite(middleX, middleY, "upgrade2");
    upgrade2.setInteractive();

    const upgrade3 = this.add.sprite(middleX, middleY + rowGap, "upgrade3");
    upgrade3.setInteractive();

    // Event listener for upgrade123
    upgrade1Rect.on("pointerdown", () => this.handleUpgradeChoice("upgrade1"));
    upgrade2.on("pointerdown", () => this.handleUpgradeChoice("upgrade2"));
    upgrade3.on("pointerdown", () => this.handleUpgradeChoice("upgrade3"));
  }

  handleUpgradeChoice(choice) {
    // Handle the upgrade choice here
    switch (choice) {
      case "upgrade1":
        // Implement logic for upgrade 1 (increase health)
        console.log("Upgrading Health");
        break;

      case "upgrade2":
        // Implement logic for upgrade 2 (increase damage)
        console.log("Upgrading Speed");
        break;

      case "upgrade3":
        // Implement logic for upgrade 3 (other upgrade)
        console.log("Upgrading Damage");
        break;
    }
    // Close the upgrade scene and resume the parent scene
    this.scene.stop();
    this.scene.resume("playGame");
  }
}

export default UpgradeScreen;
