import Phaser from "phaser";
import config from "../config/config";
import gameSettings from "../config/gameSettings";
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
    this.cameras.main.setAlpha(0.9);

    const middleX = config.width / 2;
    const middleY = (config.height - 100) / 2;

    const rowGap = 150;

    // Upgrade 1
    const upgrade1Rect = this.add.rectangle(
      middleX,
      middleY - rowGap,
      400,
      80,
      0x000000
    );
    upgrade1Rect.setInteractive();

    const upgrade1Image = this.add.sprite(
      middleX - 150,
      middleY - rowGap,
      "upgrade1"
    );
    upgrade1Image.setOrigin(0.5, 0.5);

    const upgrade1Text = this.add.text(
      middleX - 70,
      middleY - rowGap,
      "Hard As Rock (+200 HP)",
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
      400,
      80,
      0x000000
    );
    upgrade2Rect.setInteractive();

    const upgrade2Image = this.add.sprite(middleX - 150, middleY, "upgrade2");
    upgrade2Image.setOrigin(0.5, 0.5);

    const upgrade2Text = this.add.text(
      middleX - 70,
      middleY,
      "Wormhole Engine (+ 100 SPD)",
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
      400,
      80,
      0x000000
    );
    upgrade3Rect.setInteractive();

    const upgrade3Image = this.add.sprite(
      middleX - 150,
      middleY + rowGap,
      "upgrade3"
    );
    upgrade3Image.setOrigin(0.5, 0.5);

    const upgrade3Text = this.add.text(
      middleX - 70,
      middleY + rowGap,
      "Sharp Eye Bullseye (+ 10 DMG)",
      {
        fontSize: "16px",
        fontFamily: "Pixelify Sans",
        fill: "#fff",
        align: "center",
      }
    );
    upgrade3Text.setOrigin(0, 0.5);

    // Event listener for upgrade123
    upgrade1Rect.on("pointerover", () => {
      upgrade1Rect.setFillStyle(0x333333); // Change the color or apply a tint
    });
    upgrade1Rect.on("pointerout", () => {
      upgrade1Rect.setFillStyle(0x000000); // Revert to the original color or remove the tint
    });

    upgrade2Rect.on("pointerover", () => {
      upgrade2Rect.setFillStyle(0x333333); // Change the color or apply a tint
    });
    upgrade2Rect.on("pointerout", () => {
      upgrade2Rect.setFillStyle(0x000000); // Revert to the original color or remove the tint
    });

    upgrade3Rect.on("pointerover", () => {
      upgrade3Rect.setFillStyle(0x333333); // Change the color or apply a tint
    });
    upgrade3Rect.on("pointerout", () => {
      upgrade3Rect.setFillStyle(0x000000); // Revert to the original color or remove the tint
    });

    upgrade1Rect.on("pointerdown", () => this.handleUpgradeChoice("upgrade1"));
    upgrade2Rect.on("pointerdown", () => this.handleUpgradeChoice("upgrade2"));
    upgrade3Rect.on("pointerdown", () => this.handleUpgradeChoice("upgrade3"));
  }

  handleUpgradeChoice(choice) {
    // Handle the upgrade choice here
    switch (choice) {
      case "upgrade1":
        this.scene.get("playGame").player.maxHealth += 200;
        this.scene.get("playGame").player.health += 200;
        break;

      case "upgrade2":
        this.scene.get("playGame").player.speed += 100;
        break;

      case "upgrade3":
        this.scene.get("playGame").player.bulletDamage += 10;
        break;
    }
    // Close the upgrade scene and resume the parent scene
    this.scene.stop();
    this.scene.resume("playGame");
  }
}

export default UpgradeScreen;
