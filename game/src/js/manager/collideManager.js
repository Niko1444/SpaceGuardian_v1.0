import Phaser from "phaser";

import HealthPack from "../objects/utilities/healthPack";
import ShieldPack from "../objects/utilities/ShieldPack";
import Shield from "../objects/utilities/Shield";
class CollideManager {
  constructor(scene, player, enemies, healthPacks, shieldPacks, shield, health) {
    this.scene = scene;
    this.player = player;
    this.enemies = enemies;
    this.healthPacks = healthPacks;
    this.shieldPacks = shieldPacks;
    this.shield = shield;
    

    // Add collision between bullets and enemies
    this.scene.physics.add.overlap(
      this.scene.projectiles,
      this.enemies,
      this.bulletHitEnemy,
      null,
      this.scene
    );

    // Add collision between player and enemies
    this.scene.physics.add.overlap(
      this.player,
      this.enemies,
      this.playerHitEnemy,
      null,
      this
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
    enemy.takeDamage(bullet.damage);
  }

  playerHitEnemy(player, enemy) {
    // Player takes damage
    player.takeDamage(enemy.damage);
    enemy.takeDamage(player.damage);
  }

  playerCollideHealthPack(player, HealthPack) {
    const healthAmount = 500; // Set the amount of health to increase
    player.getHeal(healthAmount);
    HealthPack.destroy();
  }

  playerCollideShieldPack(player, ShieldPack) {
    ShieldPack.destroy(); // Destroy the shield pack after collision
    this.shield.show();
  }
}

export default CollideManager;
