import Phaser from "phaser";
import gameSettings from "../config/gameSettings";
import config from "../config/config";
import Bullet from "../objects/projectiles/Bullet";
import Player from "../objects/players/Player";
import Shield from "../objects/utilities/Shield";
import EnemyManager from "../manager/enemyManager";
import KeyboardManager from "../manager/KeyboardManager";
import PlayerManager from "../manager/playerManager";
import CollideManager from "../manager/collideManager";
import HPBar from "../objects/ui/HPBar";
import Bug1 from "../objects/enemies/Bug1";
import Bug3 from "../objects/enemies/Bug3";
import Bug5 from "../objects/enemies/Bug5";
import GuiManager from "../manager/GuiManager.js";
import UtilitiesManager from "../manager/UtilitiesManager";
import buttonManager from "../manager/buttonManager";
import ProjectileManager from "../manager/ProjectileManager";
import UpgradeManager from "../manager/UpgradeManager.js";

const BACKGROUND_SCROLL_SPEED = 0.5;
class PlayingScreen extends Phaser.Scene {
  constructor() {
    super("playGame");
    this.buttonManager = null;
  }

  init(data) {
    this.selectedPlayerIndex = data.number;
  }

  preload() {
    this.load.spritesheet({
      key: `player_texture_${this.selectedPlayerIndex}`,
      url: `assets/spritesheets/players/planes_0${this.selectedPlayerIndex}A.png`,
      frameConfig: {
        frameWidth: 96,
        frameHeight: 96,
        startFrame: 0,
        endFrame: 19,
      },
    });
  }

  create() {
    // Creat GUI for PlayingScreen ( Changes in BG except Player and Enemy )
    this.guiManager = new GuiManager(this);
    this.guiManager.createBackground("background_texture_01");

    // if (!(this.anims && this.anims.exists && this.anims.exists("player_anim"))) {
    this.anims.create({
      key: "player_anim",
      frames: this.anims.generateFrameNumbers(
        `player_texture_${this.selectedPlayerIndex}`,
        {
          start: 0,
          end: 3,
        }
      ),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_left",
      frames: this.anims.generateFrameNumbers(
        `player_texture_${this.selectedPlayerIndex}`,
        {
          start: 4,
          end: 7,
        }
      ),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_left_diagonal",
      frames: this.anims.generateFrameNumbers(
        `player_texture_${this.selectedPlayerIndex}`,
        {
          start: 8,
          end: 11,
        }
      ),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_right",
      frames: this.anims.generateFrameNumbers(
        `player_texture_${this.selectedPlayerIndex}`,
        {
          start: 12,
          end: 15,
        }
      ),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "player_anim_right_diagonal",
      frames: this.anims.generateFrameNumbers(
        `player_texture_${this.selectedPlayerIndex}`,
        {
          start: 16,
          end: 19,
        }
      ),
      frameRate: 30,
      repeat: -1,
    });
    // }

    this.player = new Player(
      this,
      config.width / 2,
      config.height - 100,
      `player_texture_${this.selectedPlayerIndex}`,
      1000
    );
    this.player.play("player_anim");

    // Spawn the Enemies
    this.time.delayedCall(
      21000,
      () => {
    // shoot straight bullet
    this.bug3_1 = new Bug3(this, config.width-20, -20, 30);
    this.bug3_2 = new Bug3(this,20, -20, 30);

    // shoot following bullet
    this.bug3_3 = new Bug3(this, 70, -20, 30);
    this.bug3_4 = new Bug3(this, config.width-70, -20, 30);

    // chasing enemies
    this.bug5_1 = new Bug5(this, config.width/2, -20, 30);
    this.bug5_2 = new Bug5(this, config.width/2-50, -20, 30);
    this.bug5_3 = new Bug5(this, config.width/2+50, -20, 30);
  },
  null,
  this
);

    // Create text for level 1
    this.createText();

    // Spawn the Shield
    this.shield = new Shield(this, this.player);
    this.shield.play("shield_anim");

    // Create managers
    this.keyboardManager = new KeyboardManager(this);
    // Score System
    this.upgradeManager = new UpgradeManager(this);
    this.playerManager = new PlayerManager(
      this,
      this.player,
      this.selectedPlayerIndex
    );

    this.enemyManager = new EnemyManager(this);
    this.time.delayedCall(
      3000,
      () => {
    const enemyRow = this.enemyManager.spawnEnemyRow(30, 8, 40, 30);
      this.time.delayedCall(
            6000,
            () => {
              const enemyRow1 = this.enemyManager.spawnEnemyRow(30, 8, 40, 30);
                },
            null,
            this
            );
      this.time.delayedCall(
            12000,
            () => {
              const enemyRow2 = this.enemyManager.spawnEnemyRow(30, 8, 40, 30);
                },
            null,
            this
            );
          },
        null,
        this
      );

    this.time.delayedCall(
      21000,
      () => {
    this.enemyManager.addEnemy(this.bug3_1);
    this.enemyManager.addEnemy(this.bug3_2);
    this.enemyManager.addEnemy(this.bug3_3);
    this.enemyManager.addEnemy(this.bug3_4);
    this.enemyManager.addEnemy(this.bug5_1);
    this.enemyManager.addEnemy(this.bug5_2);
    this.enemyManager.addEnemy(this.bug5_3);
  },
  null,
  this
);

const isDestroyed = this.enemyManager.areEnemiesDestroyed([
  this.bug3_1,
  this.bug3_2,
  this.bug3_3,
  this.bug3_4,
  this.bug5_1,
  this.bug5_2,
  this.bug5_3,
]);
    // FINAL WAVE
    let timer;
    this.time.delayedCall(
      40000,
      () => {
    timer = this.time.addEvent({
      delay: 1000,
      callback: () => {
    if (isDestroyed) {
      timer.remove();
        // Start the final wave
        this.startFinalWave();
    }
  },
  callbackScope: this,
  loop: true, // Set to true for a repeating timer
});
},
null,
this
);
  

    this.UtilitiesManager = new UtilitiesManager(this);
    // Add a delayed event to spawn utilities after a delay
    this.time.addEvent({
      delay: 5000,
      callback: () => {
        this.UtilitiesManager.addUtilitiesForPlayingScreen(3, 4);
        this.collideManager1 = new CollideManager(
          this,
          this.player,
          this.enemyManager.enemies,
          this.UtilitiesManager.healthPacks,
          this.UtilitiesManager.shieldPacks,
          this.shield
        );
      },
      callbackScope: this,
    });
    this.buttonManager = new buttonManager(this);

    this.projectileManager = new ProjectileManager(this);
    this.projectileManager.createPlayerBullet();
    this.projectileManager.createEnemyBullet();
    this.projectileManager.createChaseBullet();
    this.time.addEvent({
      delay: 21000,
      callback: () => {
    this.projectileManager.callEnemyBullet();
    this.projectileManager.callChaseBullet();
  },
  callbackScope: this,
});

    // Create keyboard inputs
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    this.collideManager = new CollideManager(
      this,
      this.player,
      this.enemyManager.enemies,
      this.UtilitiesManager.healthPacks,
      this.UtilitiesManager.shieldPacks,
      this.shield
    );

    this.input.keyboard.on("keydown-ENTER", this.goToNextLevel, this);
  }

  update() {
    // this.buttonManager.update();
    // Pause the game
    this.keyboardManager.pauseGame();

    // Move the background
    this.background.tilePositionY -= BACKGROUND_SCROLL_SPEED;

    // Move the player and enemies
    this.playerManager.movePlayer();

    this.enemyManager.moveEnemies();
    this.enemyManager.enemies.forEach((enemy) => {
      enemy.updateHealthBarPosition();
    });

    if (this.spacebar.isDown) {
      this.player.shootBullet(this.selectedPlayerIndex);
    }

    this.projectiles.children.iterate((bullet) => {
      bullet.update();
    });

    if (this.player.health <= 0) {
      this.gameOver();
    }

    this.shield.updatePosition(this.player);

    this.time.addEvent({
    delay: 22000,
      callback: () => {
    this.bug3_1.rotateToPlayer(this.player);
    this.bug3_2.rotateToPlayer(this.player);
    this.bug3_3.rotateToPlayer(this.player);
    this.bug3_4.rotateToPlayer(this.player);
  },
  callbackScope: this,
  });

    this.time.addEvent({
    delay: 21000,
      callback: () => {
    this.bug5_1.chasePlayer(this.player);
    this.bug5_2.chasePlayer(this.player);
    this.bug5_3.chasePlayer(this.player);
  },
  callbackScope: this,
  });
}

  gameOver() {
    this.events.once("shutdown", this.shutdown, this);
    this.scene.stop("upgradeScreen");
    this.scene.start("gameOver");
  }

  enemyExploded() {
    this.enemyManager.enemyExploded();
  }

  shutdown() {
    // Remove entire texture along with all animations
    this.textures.remove(`player_texture_${this.selectedPlayerIndex}`);

    // Check if the animation exists before trying to remove it
    if (this.anims && this.anims.exists && this.anims.exists("player_anim")) {
      this.anims.remove("player_anim");
    }
    if (
      this.anims &&
      this.anims.exists &&
      this.anims.exists("player_anim_left")
    ) {
      this.anims.remove("player_anim_left");
    }
    if (
      this.anims &&
      this.anims.exists &&
      this.anims.exists("player_anim_left_diagonal")
    ) {
      this.anims.remove("player_anim_left_diagonal");
    }
    if (
      this.anims &&
      this.anims.exists &&
      this.anims.exists("player_anim_right")
    ) {
      this.anims.remove("player_anim_right");
    }
    if (
      this.anims &&
      this.anims.exists &&
      this.anims.exists("player_anim_right_diagonal")
    ) {
      this.anims.remove("player_anim_right_diagonal");
    }
  }

  createText() {
    const Level1Text = this.add
      .text(config.width / 2, config.height / 2, "Level 1", {
        fontSize: "32px",
        fill: "#ffffff",
      })
      .setOrigin(0.5);

    this.time.delayedCall(
      2000,
      () => {
        Level1Text.destroy();
      },
      null,
      this
    );
  }

  goToNextLevel() {
    this.time.delayedCall(1000, () => {
      this.scene.start("playLevelTwo", { number: this.selectedPlayerIndex });
    });
  }

  startFinalWave() {
    // Display "Final Wave" text for 2 seconds
    const finalWaveText = this.add
      .text(config.width / 2, config.height / 2, "Final Wave", {
        fontSize: "32px",
        fill: "#ffffff",
      })
      .setOrigin(0.5);

    this.time.delayedCall(
      2000,
      () => {
        finalWaveText.destroy();

        // Spawn a wave of bugs after the "Final Wave" message disappears
        this.finalWaveBugs = this.enemyManager.spawnCircleOfBugsLv1(
          config.width / 2,
          config.height / 2,
          150,
          14
        );
      },
      null,
      this
    );
  }
}
export default PlayingScreen;
