import Phaser from "phaser";
import UtilitiesManager from "./UtilitiesManager";
class CollideManager{
  constructor(scene, player, enemies, healthPacks, shieldPacks, shield) {
    this.scene = scene;
    this.player = player;
    this.enemies = enemies;
    this.healthPacks = healthPacks;
    this.shieldPacks = shieldPacks;
    this.shield = shield;
    this.shieldActive = false;

    // Add collision between bullets and enemies
    this.scene.physics.add.overlap(
      this.scene.projectiles,
      this.enemies,
      this.bulletHitEnemy,
      null,
      this.scene
    );
    // player and enemies
      this.scene.physics.add.overlap(
        this.player,
        this.enemies,
        this.playerHitEnemy,
        null,
        this
      );
              // Add collision between player having shield and enemies
        this.scene.physics.add.overlap(
        this.shield, // Assuming the shield is a property of the player
        this.enemies,
        this.shieldCollideEnemy,
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


  shieldCollideEnemy(shield, enemy, player) {
    if(this.shieldActive){
    enemy.set0health();
    enemy.explode(true);
    // enemy.play("explosion_anim");
    shield.hide();
    this.shieldActive = false;
    }
  }

  bulletHitEnemy(enemy, bullet) {
    bullet.destroy();
    enemy.takeDamage(bullet.damage);
  }

  playerHitEnemy(player, enemy) {
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
    this.shieldActive = true;
  }

  
}

export default CollideManager;
