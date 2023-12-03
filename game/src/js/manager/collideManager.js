class CollideManager {
  constructor(scene, player, enemies) {
    this.scene = scene;
    this.player = player;
    this.enemies = enemies;

    // Add collision between bullets and enemies
    this.scene.physics.add.collider(
      this.scene.projectiles,
      this.enemies,
      this.bulletHitEnemy,
      null,
      this.scene
    );

    // Add collision between player and enemies
    this.scene.physics.add.collider(
      this.player,
      this.enemies,
      this.playerHitEnemy,
      null,
      this.scene
    );
  }

  bulletHitEnemy(enemy, bullet) {
    bullet.destroy();
    enemy.explode(true);
  }

  playerHitEnemy(player, enemy) {
    enemy.explode(true);
    player.explode(true);
  }
}

export default CollideManager;
