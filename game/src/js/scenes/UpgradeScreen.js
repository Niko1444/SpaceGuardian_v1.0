import Phaser from "phaser";
import config from "../config/config";

class UpgradeScreen extends Phaser.Scene {
  constructor() {
    super("upgradeScreen");
    // change for commit
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
      middleX - 50,
      middleY - rowGap,
      "Increase Health",
      {
        fontSize: "16px",
        fontFamily: "Pixelify Sans",
        fill: "#fff",
        align: "center",
      }
    );
    upgrade1Text.setOrigin(0, 0.5);

    // Upgrade 2
    const upgrade2Rect = this.add.rectangle(
      middleX,
      middleY,
      300,
      100,
      0x000000
    );
    upgrade2Rect.setInteractive();

    const upgrade2Image = this.add.sprite(middleX - 100, middleY, "upgrade2");
    upgrade2Image.setOrigin(0.5, 0.5);

    const upgrade2Text = this.add.text(
      middleX - 50,
      middleY,
      "Increase Speed",
      {
        fontSize: "16px",
        fontFamily: "Pixelify Sans",
        fill: "#fff",
        align: "center",
      }
    );
    upgrade2Text.setOrigin(0, 0.5);

    // Upgrade 3
    const upgrade3Rect = this.add.rectangle(
      middleX,
      middleY + rowGap,
      300,
      100,
      0x000000
    );
    upgrade3Rect.setInteractive();

    const upgrade3Image = this.add.sprite(
      middleX - 100,
      middleY + rowGap,
      "upgrade3"
    );
    upgrade3Image.setOrigin(0.5, 0.5);

    const upgrade3Text = this.add.text(
      middleX - 50,
      middleY + rowGap,
      "Increase Damage",
      {
        fontSize: "16px",
        fontFamily: "Pixelify Sans",
        fill: "#fff",
        align: "center",
      }
    );
    upgrade3Text.setOrigin(0, 0.5);

    // Event listener for upgrade123
    upgrade1Rect.on("pointerdown", () => this.handleUpgradeChoice("upgrade1"));
    upgrade2Rect.on("pointerdown", () => this.handleUpgradeChoice("upgrade2"));
    upgrade3Rect.on("pointerdown", () => this.handleUpgradeChoice("upgrade3"));
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
