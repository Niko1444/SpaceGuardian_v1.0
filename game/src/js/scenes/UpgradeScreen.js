import Phaser from "phaser";
import config from "../config/config";

class UpgradeScreen extends Phaser.Scene {
  constructor() {
    super("upgradeScreen");
  }

  create() {
    this.cameras.main.setAlpha(0.5);

    const middleX = config.width / 2;
    const middleY = config.height / 2;

    const rowGap = 150;

    const upgrade1 = this.add.rectangle(
      middleX,
      middleY - rowGap,
      100,
      50,
      0xff0000
    );
    upgrade1.setInteractive();

    const upgrade2 = this.add.rectangle(middleX, middleY, 100, 50, 0xff0000);
    upgrade2.setInteractive();

    const upgrade3 = this.add.rectangle(
      middleX,
      middleY + rowGap,
      100,
      50,
      0xff0000
    );
    upgrade3.setInteractive();

    // Event listener for upgrade123
    upgrade1.on("pointerdown", () => this.handleUpgradeChoice(1));
    upgrade2.on("pointerdown", () => this.handleUpgradeChoice(2));
    upgrade3.on("pointerdown", () => this.handleUpgradeChoice(3));
  }

  handleUpgradeChoice(choice) {
    // Handle the upgrade choice here
    console.log(`Upgrade Choice: ${choice}`);

    // Close the upgrade scene and resume the parent scene
    this.scene.stop();
    this.scene.resume("playGame");
  }

  drawUpgrade() {}
}

export default UpgradeScreen;
