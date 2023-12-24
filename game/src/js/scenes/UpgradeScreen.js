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
    this.load.image("upgrade4", "assets/images/upgrades/upgrade_04.png");
  }

  create() {
    this.cameras.main.setAlpha(0.9);

    const middleX = config.width / 2;
    const middleY = (config.height - 100) / 2;

    const rowGap = 150;

    // Create an array of available upgrades
    const availableUpgrades = ["upgrade1", "upgrade2", "upgrade3", "upgrade4"];

    // Shuffle the array to randomize the upgrades
    Phaser.Math.RND.shuffle(availableUpgrades);

    for (let i = 0; i < 3; i++) {
      const upgradeRect = this.add.rectangle(
        middleX,
        middleY - 150 + i * rowGap,
        400,
        80,
        0x000000
      );
      upgradeRect.setInteractive();

      const upgradeImage = this.add.sprite(
        middleX - 150,
        middleY - 150 + i * rowGap,
        availableUpgrades[i]
      );
      upgradeImage.setOrigin(0.5, 0.5);

      const upgradeText = this.add.text(
        middleX - 70,
        middleY - 150 + i * rowGap,
        this.getUpgradeText(availableUpgrades[i]),
        {
          fontSize: "16px",
          fontFamily: "Pixelify Sans",
          fill: "#fff",
          align: "center",
        }
      );
      upgradeText.setOrigin(0, 0.5);

      // Event listener for upgrades
      upgradeRect.on("pointerover", () => {
        upgradeRect.setFillStyle(0x333333);
      });
      upgradeRect.on("pointerout", () => {
        upgradeRect.setFillStyle(0x000000);
      });

      upgradeRect.on("pointerdown", () =>
        this.handleUpgradeChoice(availableUpgrades[i])
      );
    }
  }

  getUpgradeText(upgradeType) {
    switch (upgradeType) {
      case "upgrade1":
        return "Hard As Rock (+200 HP)";
      case "upgrade2":
        return "Wormhole Engine (+100 SPD)";
      case "upgrade3":
        return "Sharp Eye Bullseye (+10 DMG)";
      case "upgrade4":
        return "Stained Warrior (UNKNOWN)";
      default:
        return "";
    }
  }

  handleUpgradeChoice(choice) {
    // Handle the upgrade choice here
    const playGameScene = this.scene.get("playGame");
    const player = playGameScene.player;

    switch (choice) {
      case "upgrade1":
        player.maxHealth += 200;
        player.health += 200;
        break;

      case "upgrade2":
        player.speed += 100;
        break;

      case "upgrade3":
        player.bulletDamage += 10;
        break;

      case "upgrade4":
        player.takeDamage(player.health * 0.9);
        player.bulletDamage += 50;
        player.bulletSize += 0.5;
        break;
    }
    // Close the upgrade scene and resume the parent scene
    this.scene.stop();
    this.scene.resume("playGame");
  }
}

export default UpgradeScreen;