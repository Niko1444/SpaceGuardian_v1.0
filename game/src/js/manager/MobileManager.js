import Phaser from "phaser";

class MobileManager {
  constructor(scene) {
    this.scene = scene;
    this.createDraggablePlayer();
  }

  createDraggablePlayer() {
    this.scene.input.on("drag", (pointer, gameObject, dragX, dragY) => {
      gameObject.x = dragX;
      gameObject.y = dragY;

      this.scene.player.shootBullet(this.scene.selectedPlayerIndex);
    });
  }
}

export default MobileManager;
