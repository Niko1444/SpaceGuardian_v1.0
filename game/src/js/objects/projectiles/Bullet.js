class Bullet extends Entity {
  constructor(scene) {
    super(scene, scene.player.x, scene.player.y - 10, "bullet");

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    scene.projectiles.add(this);
    this.body.velocity.y = -gameSettings.bulletSpeed;

    this.setDepth(1);
  }

  update() {
    if (this.y < 20) {
      this.destroy();
    }
  }
}
