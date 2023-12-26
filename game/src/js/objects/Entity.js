import Phaser from "phaser";
import config from "../config/config.js";
import gameSettings from "../config/gameSettings.js";
import DamageNumber from "./ui/DamageNumber.js";
import soundManager from "../manager/soundManager.js";
class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, health) {
    super(scene, x, y, key);
    this.scene = scene;
    this.health = health;
    this.maxHealth = health;
    this.setData("isDead", false);
    this.hpBarWidth = 20;
    this.hpBarHeight = 5;
    this.speed = 0;
    this.soundManager = new soundManager(scene);

    this.scene.physics.world.enableBody(this, 0);
    this.scene.add.existing(this);
    // this.music = this.sys.game.globals.music;
    // scene.load.audio('explosionSound', 'assets/audio/explosion.mp3');

  }

  updateHealthBarValue(health, maxHealth) {
    this.hpBar.setValue(this.health, this.maxHealth);
  }

  updateHealthBarPosition() {
    if(this.hpBarWidth < 30){
      this.hpBar.x = this.x - this.hpBarWidth / 2;
      this.hpBar.y = this.y + 30;
    }
    else{
      this.hpBar.x = this.x - this.hpBarWidth / 2;
      this.hpBar.y = this.y + 120;
    }
  }


  explode(canDestroy) {
    if (!this.getData("isDead")) {
      this.body.enable = false;

      this.setTexture("explosion_texture");
      // if (this.scene.sys.game.globals.music.soundOn) {
      // this.scene.sound.play('explosionSound', { volume: 1 }); // Adjust volume as needed
      // }
      this.soundManager.playExplosionSound();
      this.play("explosion_anim");

      if (this.shootTimer !== undefined) {
        if (this.shootTimer) {
          this.shootTimer.remove(false);
        }
      }

      this.setAngle(0);
      this.body.setVelocity(0, 0);

      this.on(
        "animationcomplete",
        function () {
          if (canDestroy) {
            this.destroy();
          } else {
            this.setVisible(false);
          }
        },
        this
      );
        // this.scene.sfx.explosion.play();

      this.setData("isDead", true);
    }
  }

  setInteractiveEntity() {
    this.setInteractive();
  }

  setVelocityY(velocity) {
    this.body.setVelocityY(velocity);
  }

  setVelocityX(velocity) {
    this.body.setVelocityX(velocity);
  }

  setPhysics(scene) {
    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.body.setCollideWorldBounds(true);
  }

  takeDamage(damage) {
    if (!this.getData("isDead")) {
      this.health -= damage;
      new DamageNumber(this.scene, this.x, this.y, damage);

      this.updateHealthBarValue();

      if (this.health <= 0) {
        this.explode(true);
        this.hpBar.destroy();
      }
    }
  }
}

export default Entity;
