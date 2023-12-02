import Phaser from "phaser";
import gameSettings from "../config/gameSettings";
import config from "../config/config";

class PlayerManagement {
  constructor(scene, player) {
    this.scene = scene;
    this.player = player;
    this.cursorKeys = scene.input.keyboard.createCursorKeys();
    this.lastKeyPressedTime = null;
    this.lastKeyPressedKey = null;
    this.delay = 150; // 500 milliseconds delay
  }

  movePlayerManagement() {
    const currentTime = this.scene.time.now;

    if (this.cursorKeys.up.isDown) {
      this.handlePlayerMovement("player_anim", -gameSettings.playerSpeed, currentTime);
    } else if (this.cursorKeys.down.isDown) {
      this.handlePlayerMovement("player_anim", gameSettings.playerSpeed, currentTime);
    } else {
      this.player.setVelocityY(0);
    }

    if (this.cursorKeys.left.isDown) {
      this.handlePlayerMovement("player_anim_left", -gameSettings.playerSpeed, currentTime);
    } else if (this.cursorKeys.right.isDown) {
      this.handlePlayerMovement("player_anim_right", gameSettings.playerSpeed, currentTime);
    } else {
      this.player.setVelocityX(0);
    }
  }

  handlePlayerMovement(animationKey, velocity, currentTime) {
    if (currentTime - this.lastKeyPressedTime > this.delay) {
      this.player.play(animationKey);
      this.player.setVelocityY(0); // Reset velocityY to avoid diagonal movement issues
      this.player.setVelocityX(0); // Reset velocityX to avoid diagonal movement issues
      if (animationKey.includes("left") || animationKey.includes("right")) {
        this.player.setVelocityX(velocity);
      } else {
        this.player.setVelocityY(velocity);
      }
      this.lastKeyPressedTime = currentTime;
    }
  }
}

export default PlayerManagement;
