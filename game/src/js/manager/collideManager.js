import HealthPack from "../objects/utilities/healthPack";
import ShieldPack from "../objects/utilities/ShieldPack";
import Shield from "../objects/utilities/Shield";
class CollideManager {
  constructor(scene, player, enemies, healthPacks, shieldPacks, shield) {
    this.scene = scene;
    this.player = player;
    this.enemies = enemies;
    this.healthPacks = healthPacks;
    this.shieldPacks = shieldPacks;
    this.shield = shield

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
    
     // Add collision between player and health packs
     this.healthPacks.forEach((healthPack) => {
      this.scene.physics.add.overlap(
        this.player,
        healthPack,
        this.playerCollideHealthPack,
        null,
        this.scene
      );
    });

    // Add collision between player and shield packs
    this.shieldPacks.forEach((shieldPack) => {
      this.scene.physics.add.overlap(
        this.player,
        shieldPack,
        this.playerCollideShieldPack,
        null,
        this.scene
      );
    });
  }

  bulletHitEnemy(enemy, bullet) {
    bullet.destroy();
    enemy.explode(true);
  }

  playerHitEnemy(player, enemy) {
    enemy.explode(true);
    player.explode(true);
  }

  playerCollideHealthPack(player, HealthPack) {
    // const healthAmount = 20; // Set the amount of health to increase
    // const maxHealth = 100; // Set the maximum health value for the player
  
    // const currentHealth = player.getData('health');
    // if (currentHealth < maxHealth) {
    //   const newHealth = Math.min(currentHealth + healthAmount, maxHealth);
    //   // const healthGained = newHealth - currentHealth;
    //   player.setData('health', newHealth);
    // }
    // else if(currentHealth == maxHealth) {
    //   player.setData('health', maxHealth);
    // }
    //   // Increase player's health by the amount, ensuring it doesn't exceed the maximum
  
    HealthPack.destroy();
  
  }

  playerCollideShieldPack(player, ShieldPack) {
      ShieldPack.destroy(); // Destroy the shield pack after collision
      this.shield.show();
    }
  
}

export default CollideManager;
