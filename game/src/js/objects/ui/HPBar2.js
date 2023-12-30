import Phaser from "phaser";
class HPBar2 extends Phaser.GameObjects.Container {
  constructor(scene, x, y, width, height, value, max) {
    super(scene, x, y);

    // Create the health bar background
    this.backgroundBar = scene.add.image(0, 0, "healthBar_texture");
    this.backgroundBar.setOrigin(0);
    this.add(this.backgroundBar);

    // Create the health bar (filled with red)
    this.foregroundBar = scene.add.rectangle(
      41,
      9,
      width - 46,
      height - 19,
      0xff0000
    );
    this.foregroundBar.setOrigin(0);
    this.add(this.foregroundBar);

    // Set the red bar to be masked by the health bar texture
    // this.foregroundBar.setMask(this.backgroundBar.createBitmapMask());

    // // Crop the health bar based on the value and max health
    // const fillWidth = Phaser.Math.Clamp((value / max) * (width - 40), 0, width - 40);
    // this.foregroundBar.setCrop(0, 0, fillWidth, height - 40);
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

// class HPBar2 extends Phaser.GameObjects.Container {
//   constructor(scene, x, y, width, height, value, max) {
//     super(scene, x, y);

//     // Load the HealthBar texture
//     this.hpBarFrame = scene.add.image(0, 0, "healthBar_texture");
//     this.add(this.hpBarFrame);

//     // Create a red rectangle representing the health level
//     this.hpBarFill = new Phaser.GameObjects.Rectangle(scene, -width / 2, -height / 2, width * (value / max), height, 0xff0000);
//     this.add(this.hpBarFill);

//     // Create a mask based on the HealthBar texture
//     const mask = this.createBitmapMask(this.hpBarFrame);
//     this.hpBarFill.setMask(mask);

//     // Add the container to the scene
//     scene.add.existing(this);
//   }

//   // Helper function to create a mask
//   createBitmapMask(image) {
//     const maskImage = image.createBitmapMask();
//     return new Phaser.Display.Masks.BitmapMask(this.scene, maskImage);
//   }

//   setValue(value, max) {
//     // Update the width of the red bar based on the value
//     this.hpBarFill.width = this.hpBarFill.displayWidth = this.hpBarFrame.width * (value / max);
//   }
// }

// export default HPBar2;
