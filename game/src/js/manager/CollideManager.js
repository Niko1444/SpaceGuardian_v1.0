class CollideManager {
  constructor(
    scene,
    player,
    enemies,
    healthPacks,
    shieldPacks,
    shield,
    soundManager
  ) {
    this.scene = scene;
    this.player = player;
    this.enemies = enemies;
    this.healthPacks = healthPacks;
    this.shieldPacks = shieldPacks;
    this.shield = shield;
    this.shieldActive = false;
    this.soundManager = soundManager;

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
    // Add collision between player having shield and bullet
    this.scene.physics.add.overlap(
      this.scene.enemyProjectiles,
      this.shield, // Assuming the shield is a property of the player
      this.shieldCollideBullet,
      null,
      this.scene
    );

    // Add collision between enemy bullets and player
    this.scene.physics.add.overlap(
      this.scene.enemyProjectiles,
      this.player,
      this.bulletHitPlayer,
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
    this.healthPacks.forEach((HealthPack) => {
      this.scene.physics.add.overlap(
        this.player,
        HealthPack,
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
    if (this.shieldActive) {
      enemy.takeDamage(100);
      // enemy.play("explosion_anim");
      shield.hide();
      this.shieldActive = false;
    }
  }
  shieldCollideBullet(shield, enemyBullet) {
    if (this.shieldActive) {
      enemyBullet.destroy();
      shield.hide();
      this.shieldActive = false;
    }
  }

  bulletHitEnemy(enemy, bullet) {
    bullet.destroy();
    enemy.takeDamage(bullet.damage);
  }

  bulletHitPlayer(player, enemyBullet) {
    enemyBullet.destroy();
    player.takeDamage(enemyBullet.damage);
  }

  playerHitEnemy(player, enemy) {
    player.takeDamage(enemy.damage);
    enemy.takeDamage(player.damage);
  }

  playerCollideHealthPack(player, healthPack) {
    this.soundManager.playHealthSound();
    const healthAmount = 500; // Set the amount of health to increase
    player.getHeal(healthAmount);
    healthPack.destroy();
  }

  playerCollideShieldPack(player, shieldPack) {
    this.soundManager.playShieldSound();
    shieldPack.destroy(); // Destroy the shield pack after collision
    this.shield.show();
    this.shieldActive = true;
  }
}

export default CollideManager;