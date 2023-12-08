class CollideManager {
  constructor(scene, player, enemies) {
    this.scene = scene;
    this.player = player;
    this.enemies = enemies;

    // Add overlap between bullets and enemies
    this.scene.physics.add.overlap(
      this.scene.projectiles,
      this.enemies,
      this.bulletHitEnemy,
      null,
      this
    );

    // Add overlap between player and enemies
    this.scene.physics.add.overlap(
      this.player,
      this.enemies,
      this.playerHitEnemy,
      null,
      this
    );
  }

  bulletHitEnemy(enemy, bullet) {
    console.log("Bullet hit enemy");

    // Enemy takes damage
    enemy.takeDamage(bullet.damage);

    // Destroy the bullet
    bullet.destroy();
  }

  playerHitEnemy(player, enemy) {
    // Player takes damage
    player.takeDamage(enemy.damage);
    enemy.takeDamage(player.damage);
  }
}

export default CollideManager;
