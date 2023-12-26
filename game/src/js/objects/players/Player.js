import Entity from "../Entity";
import Bullet from "../projectiles/Bullet";
import gameSettings from "../../config/gameSettings";
import HPBar from "../ui/HPBar";
import HPBar2 from "../ui/HPBar2";
import soundManager from "../../manager/soundManager";
class Player extends Entity {
  constructor(scene, x, y, key, health) {
    super(scene, x, y, key, health);
    this.body.velocity.y = gameSettings.playerSpeed;
    this.health = health;
    this.maxHealth = health;
    this.damage = 100;
    // this.hpBarWidth = 180;
    // this.hpBarHeight = 3;
    
    this.shield = null;
    this.setInteractiveEntity();
    this.setPhysics(scene);
    this.body.setSize(48, 48);
    this.soundManager = new soundManager(scene);


    this.hpBar = new HPBar2(
      scene,
      // this.x,
      // this.y - 30,
      scene.sys.game.config.width - 400,
      scene.sys.game.config.height - 40,
      200, // Width of the health bar
      41, 
      this.health,
      this.maxHealth
    );
    this.scene.add.existing(this.hpBar);
    this.key = key;
    // this.music = this.sys.game.globals.music;
    // scene.load.audio('shootSound', 'assets/audio/bullet.wav');
    // scene.load.audio('health', 'assets/audio/health.wav');

  }

  // preload(){
  //   this.load.audio('shootSound', 'assets/audio/missile.ogg');

  // }
  setVelocityY(velocity) {
    super.setVelocityY(velocity);
  }

  setVelocityX(velocity) {
    super.setVelocityX(velocity);
  }

  explode(canDestroy) {
    super.explode(canDestroy);
  }

  setInteractiveEntity() {
    super.setInteractiveEntity();
  }

  shootBullet(number) {
    const bullet = new Bullet(this.scene, number );

    bullet.play(`bullet${number}_anim`);
    // if (this.scene.sys.game.globals.music.soundOn) {

    // this.scene.sound.play('shootSound', { volume: 1 }); // Adjust volume as needed
    // }
    this.soundManager.playBulletSound();
  }

  setPhysics(scene) {
    super.setPhysics(scene);
  }

  getHeal(heal) {
    if (this.health + heal > this.maxHealth) {
      this.health = this.maxHealth;
    } else if (this.health < this.maxHealth) {
      this.health += heal;
    }
    this.updateHealthBarValue();
  }
}

export default Player;
