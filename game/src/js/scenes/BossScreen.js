import Phaser from "phaser";
import gameSettings from "../config/gameSettings.js";
import config from "../config/config.js";
import Bullet from "../objects/projectiles/Bullet.js";
import Player from "../objects/players/Player.js";
import Shield from "../objects/utilities/Shield.js";
import EnemyManager from "../manager/enemyManager.js";
import KeyboardManager from "../manager/KeyboardManager.js";
import PlayerManager from "../manager/playerManager.js";
import CollideManager from "../manager/collideManager.js";
import HPBar from "../objects/ui/HPBar.js";
import Bug1 from "../objects/enemies/Bug1.js";
import Bug3 from "../objects/enemies/Bug3.js";
import Bug5 from "../objects/enemies/Bug5.js";
import GuiManager from "../manager/GuiManager.js";
import UtilitiesManager from "../manager/UtilitiesManager.js";
import buttonManager from "../manager/buttonManager.js";
import ProjectileManager from "../manager/ProjectileManager.js";
import UpgradeManager from "../manager/UpgradeManager.js";
import Boss from "../objects/enemies/Boss.js";
import MiniBot from "../objects/enemies/Minibot.js";
import soundManager from "../manager/soundManager.js";

const BACKGROUND_SCROLL_SPEED = 0.5;
class BossScreen extends Phaser.Scene {
  constructor() {
    super("bossGame");
    this.spawnedEnemies = [];
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

    this.music = this.sys.game.globals.music;
    if (this.music.musicOn === true) {
      this.sys.game.globals.bgMusic.stop();
      this.bgMusic = this.sound.add("desertMusic", { volume: 0.6, loop: true });
      this.bgMusic.play();
      this.music.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
      this.sys.game.globals.bgMusic.play();
    }

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

    this.boss = new Boss(this, config.width / 2, 0, 1000);
    this.boss.play("boss_move_anim");

    this.firstMini = new MiniBot(this, config.width / 5, -96, 100);
    this.secondMini = new MiniBot(this, config.width * 4 / 5, -96, 100);

    this.player = new Player(
      this,
      config.width / 2,
      config.height - 100,
      `player_texture_${this.selectedPlayerIndex}`,
      1000
    );
    this.player.play("player_anim");

    // Spawn the Enemies
    this.bug3_1 = new Bug3(this, 50, 0, 30);
    this.bug3_1.play("bug3_anim");
    this.bug3_2 = new Bug3(this, config.width - 50, 0, 30);
    this.bug3_2.play("bug3_anim");
    this.bug5 = new Bug5(this, 300, 0, 30);
    this.bug5.play("bug5_anim");

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
    this.enemyManager.addEnemy(this.bug3_1);
    this.enemyManager.addEnemy(this.bug3_2);
    this.enemyManager.addEnemy(this.bug5);
    this.enemyManager.addEnemy(this.boss);
    this.enemyManager.addEnemy(this.firstMini);
    this.enemyManager.addEnemy(this.secondMini);

    // spawn the enemies
    if (this.boss.health < 800) {
      this.time.delayedCall(
        100,
        () => {
          this.bossBelow80HP();
        },
        null,
        this
      );
    }

    // this.enemyManager.spawnCircleOfBugsLv1(
    //   config.width / 2,
    //   config.height / 2,
    //   150,
    //   8
    // );

    // FINAL WAVE
    // this.time.delayedCall(
    //   20000,
    //   () => {
    //     // Destroy all spawned enemies
    //     this.destroySpawnedEnemies();

    //     // Start the final wave
    //     this.startFinalWave();
    //   },
    //   null,
    //   this
    // );

    this.UtilitiesManager = new UtilitiesManager(this);
    this.soundManager = new soundManager(this);
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
    this.projectileManager.callEnemyBulletBoss();
    this.projectileManager.callChaseBulletBoss();

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
      this.shield,
      this.soundManager
    );

    this.checkBossHeal = false;
    this.timeHealth = 1;

    this.musicButton = this.add.image(config.width - 60, 30, "sound_texture");
    this.musicButton.setInteractive();

    this.musicButton.on(
      "pointerdown",
      function () {
        this.music.soundOn = !this.music.soundOn;
        this.music.musicOn = !this.music.musicOn;

        this.updateAudio();
      },
      this
    );
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

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      this.player.shootBullet(this.selectedPlayerIndex);
    }

    this.projectiles.children.iterate((bullet) => {
      bullet.update();
    });

    if (this.player.health <= 0) {
      this.gameOver();
    }

    this.shield.updatePosition(this.player);

    this.bug3_1.rotateToPlayer(this.player);
    this.bug3_2.rotateToPlayer(this.player);

    this.bug5.chasePlayer(this.player);

    this.bossProcess();

  }

  updateAudio() {
    if (this.music.musicOn === false && this.music.soundOn === false) {
      this.musicButton.setTexture("mute_texture");
      this.sys.game.globals.bgMusic.stop();
      this.music.bgMusicPlaying = false;
    } else if (this.music.musicOn === true && this.music.soundOn === true) {
      this.musicButton.setTexture("sound_texture");
      if (this.music.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.music.bgMusicPlaying = true;
      }
    }
  }

  gameOver() {
    this.events.once("shutdown", this.shutdown, this);
    this.scene.start("gameOver");
  }

  enemyExploded() {
    this.enemyManager.enemyExploded();
  }



  bossProcess() {
    if (this.boss.health < 800 && this.boss.health > 550) {
      this.boss.moveToCenter();
    }

    if ((this.boss.health < 550 && this.boss.health > 350) || this.checkBossHeal === true) {
      this.boss.bossBound();
      if (this.timeHealth === 0) {
        this.callMini;
      }
    }

    if (this.boss.health < 350 || this.checkBossHeal === true) {
      this.boss.moveToCenter();
      this.callMini();
    }

    if (this.checkBossHeal === true && this.boss.health < 350) {
      this.healthBoss();
      this.boss.updateHealthBarValue(this.boss.health, this.boss.maxHealth);
      if (this.boss.health >= 350) {
        this.checkBossHeal = false;
      }
    }

    if (this.boss.health < 200 && this.checkBossHeal === false && this.timeHealth === 1) {
      this.checkBossHeal = true;
      this.timeHealth = 0;
    }

    if(this.boss.health < 150){
      this.boss.shootBullet(this, this.boss);
    }
  }

  callMini() {
    if (this.firstMini.health > 0) {
      this.firstMini.followPlayer(this.player, -100, -100);
    }

    if (this.secondMini.health > 0) {
      this.secondMini.followPlayer(this.player, 100, -100);
    }
  }

  healthBoss() {
    if (this.boss.health < 350) {
      this.boss.health += 2;
    }
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
      .text(config.width / 2, config.height / 2, "Boss", {
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


}
export default BossScreen;