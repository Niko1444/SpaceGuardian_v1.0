import Phaser from "phaser";
class HPBar2 extends Phaser.GameObjects.Container {
  constructor(scene, x, y, width, height, value, max) {
    super(scene, x, y);
    // Create the health bar (filled with red)
    this.foregroundBar = scene.add.rectangle(
      50,
      9,
      width + 50,
      height - 19,
      0xea3327
    );
    this.foregroundBar.setOrigin(0);
    this.foregroundBar.setDepth(1);

    this.add(this.foregroundBar);

    // Create the health bar background
    this.backgroundBar = scene.add.image(0, 0, "healthBar_texture");
    this.backgroundBar.setOrigin(0);
    this.backgroundBar.setDepth(1);

    this.add(this.backgroundBar);
    this.setValue(value, max);

    // Add the container to the scene
    scene.add.existing(this);
  }

  setValue(value, max) {
    // Update the bar's foreground width based on the value
    this.foregroundBar.scaleX = value / max;
  }
}
export default HPBar2;

