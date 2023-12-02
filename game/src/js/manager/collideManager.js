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
    // Handle bullet hit logic here
    bullet.destroy();

    // Assuming that enemies have a method `takeDamage` to handle damage
    if (enemy.takeDamage) {
      enemy.takeDamage(10); // Adjust the damage amount as needed
    }

    // Example: Check if the enemy's health is zero or below, then destroy
    if (enemy.getData("health") <= 0) {
      enemy.destroy();
      // Optionally play an explosion animation, etc.
    }
  }

  playerHitEnemy(player, enemy) {
    // Handle player hit logic here

    // Assuming that both player and enemy have a method `takeDamage` to handle damage
    if (player.takeDamage && enemy.takeDamage) {
      player.takeDamage(20); // Adjust the damage amount as needed
      enemy.takeDamage(10); // Adjust the damage amount as needed
    }

    // Example: Check if the player's health is zero or below, then trigger game over
    if (player.getData("health") <= 0) {
      this.scene.gameOver();
    }

    // Example: Check if the enemy's health is zero or below, then destroy
    if (enemy.getData("health") <= 0) {
      enemy.destroy();
      // Optionally play an explosion animation, etc.
    }
  }
}

export default CollideManager;
