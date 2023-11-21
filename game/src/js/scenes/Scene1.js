class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image(
      "background",
      "assets/images/backgrounds/purple/nebula_1.png"
    );

    // Load Player Spritesheet
    this.load.spritesheet({
      key: "player",
      url: "assets/spritesheets/player.png",
      frameConfig: {
        frameWidth: 96,
        frameHeight: 96,
        startFrame: 0,
        endFrame: 19,
      },
    });

    // Load Enemy Spritesheet
    this.load.spritesheet({
      key: "enemy_1",
      url: "assets/spritesheets/enemy_1.png",
      frameConfig: {
        frameWidth: 48,
        frameHeight: 48,
        startFrame: 0,
        endFrame: 2,
      },
    });

    this.load.spritesheet({
      key: "enemy_2",
      url: "assets/spritesheets/enemy_2.png",
      frameConfig: {
        frameWidth: 48,
        frameHeight: 48,
        startFrame: 0,
        endFrame: 2,
      },
    });

    // Load Bullet Spritesheet
    this.load.spritesheet({
      key: "bullet",
      url: "assets/spritesheets/bullet.png",
      frameConfig: {
        frameWidth: 9,
        frameHeight: 34,
        startFrame: 0,
        endFrame: 0,
      },
    });

    // Load Effect Spritesheets
    this.load.spritesheet({
      key: "explosion",
      url: "assets/spritesheets/explosion.png",
      frameConfig: {
        frameWidth: 48,
        frameHeight: 48,
        startFrame: 0,
        endFrame: 7,
      },
    });
  }

  create() {
    this.add.text(100, 100, "LOADING GAME...", { fontSize: 20 });

    this.time.delayedCall(1000, () => {
      this.scene.start("playGame");
    });

    // Create player animations
    this.anims.create({
      key: "player_anim",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
      frameRate: 20,
      repeat: -1,
    });

    // Create enemies animations
    this.anims.create({
      key: "enemy_1_anim",
      frames: this.anims.generateFrameNumbers("enemy_1", { start: 0, end: 2 }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "enemy_2_anim",
      frames: this.anims.generateFrameNumbers("enemy_2", { start: 0, end: 2 }),
      frameRate: 20,
      repeat: -1,
    });

    // Create bullet animations (because now bullet has only one frame)

    // Create explosion animations
    this.anims.create({
      key: "explosion",
      frames: this.anims.generateFrameNumbers("explosion", {
        start: 0,
        end: 7,
      }),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });
  }
}
