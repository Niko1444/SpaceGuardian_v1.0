class Bullet extends Phaser.GameObjects.Sprite {
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

class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    this.background = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background"
    );
    this.background.setOrigin(0, 0);

    // Spawn objects
    // Spawn the Player
    this.player = this.physics.add.sprite(
      config.width / 2,
      config.height / 2 + 180,
      "player"
    );
    this.player.setDepth(2);

    // Spawn the Enemies
    this.enemy_1 = this.physics.add.sprite(100, 100, "enemy_1");
    this.enemy_2 = this.physics.add.sprite(300, 200, "enemy_2");

    // Set interactive objects
    this.player.setInteractive();
    this.enemy_1.setInteractive();
    this.enemy_2.setInteractive();

    // Create keyboard inputs
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.P = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

    this.player.setCollideWorldBounds(true);

    // Play animations
    this.player.play("player_anim");
    this.enemy_1.play("enemy_1_anim");
    this.enemy_2.play("enemy_2_anim");

    // Create a group to manage bullets
    this.projectiles = this.physics.add.group({
      classType: Bullet,
      runChildUpdate: true,
    });

    // Collider detection
    this.physics.add.collider(
      this.projectiles,
      this.enemy_1,
      this.bulletHitEnemy,
      null,
      this
    );
    this.physics.add.collider(
      this.projectiles,
      this.enemy_2,
      this.bulletHitEnemy,
      null,
      this
    );

    this.physics.add.collider(
      this.player,
      this.enemy_1,
      this.playerHitEnemy,
      null,
      this
    );
    this.physics.add.collider(
      this.player,
      this.enemy_2,
      this.playerHitEnemy,
      null,
      this
    );
  }

  update() {
    // Pause the game
    if (Phaser.Input.Keyboard.JustDown(this.P)) {
      config.pauseGame = !config.pauseGame;
      if (config.pauseGame === true) {
        this.scene.launch("pauseScreen");
        this.scene.pause();
      }
    }

    // Move the background
    this.background.tilePositionY -= 0.5;

    // Move the player and enemies
    this.movePlayerManagement();
    this.moveEnemyManagement();

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      console.log("shoot");
      this.shootBullet();
    }

    this.projectiles.children.iterate((bullet) => {
      bullet.update();
    });
  }

  movePlayerManagement() {
    if (this.cursorKeys.up.isDown) {
      this.player.setVelocityY(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.down.isDown) {
      this.player.setVelocityY(gameSettings.playerSpeed);
    } else {
      this.player.setVelocityY(0);
    }

    if (this.cursorKeys.left.isDown) {
      this.player.setVelocityX(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.right.isDown) {
      this.player.setVelocityX(gameSettings.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }
  }

  moveEnemyManagement() {
    if (this.enemy_1.y >= config.height) {
      this.enemy_1.y = 0;
      this.enemy_1.x = Phaser.Math.Between(0, config.width - 48);
    }

    if (this.enemy_2.y >= config.height) {
      this.enemy_2.y = 0;
      this.enemy_2.x = Phaser.Math.Between(0, config.width - 48);
    }

    this.enemy_1.setVelocityY(gameSettings.enemySpeed);
    this.enemy_2.setVelocityY(gameSettings.enemySpeed);
  }

  shootBullet() {
    const bullet = new Bullet(this);
  }

  bulletHitEnemy(enemy, bullet) {
    bullet.destroy();
    this.explosion = this.add.sprite(enemy.x, enemy.y, "explosion");
    this.explosion.play("explosion");
    this.explosion.on("animationcomplete", () => {
      this.explosion.destroy();
    });
    enemy.x = Phaser.Math.Between(0, config.width - 48);
    enemy.y = -50;
  }

  playerHitEnemy(player, enemy) {
    this.explosion = this.add.sprite(player.x, player.y, "explosion");
    this.explosion.play("explosion");
    this.gameOver();

    this.time.delayedCall(5000, this.gameOver, [], this);
  }

  gameOver() {
    this.scene.start("gameOver");
  }
}
