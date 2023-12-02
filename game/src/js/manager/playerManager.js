import Phaser from "phaser";
import gameSettings from "../config/gameSettings";
import config from "../config/config";

class PlayerManagement {
  constructor(scene, player) {
    this.scene = scene;
    this.player = player;
    this.cursorKeys = scene.input.keyboard.createCursorKeys();
    this.lastKeyPressedTime = null;
    this.delay = 0;
  }

  movePlayerManagement() {
    const currentTime = this.scene.time.now;

    let xVelocity = 0;
    let yVelocity = 0;
    let animationKey = "player_anim";

    if (this.cursorKeys.up.isDown) {
      yVelocity = -gameSettings.playerSpeed;
    } else if (this.cursorKeys.down.isDown) {
      yVelocity = gameSettings.playerSpeed;
    }

    if (this.cursorKeys.left.isDown) {
      xVelocity = -gameSettings.playerSpeed;
      animationKey = "player_anim_left";
    } else if (this.cursorKeys.right.isDown) {
      xVelocity = gameSettings.playerSpeed;
      animationKey = "player_anim_right";
    }

    // Diagonal movement
    if (this.cursorKeys.up.isDown) {
      if (this.cursorKeys.left.isDown) {
        // Diagonal movement: up + left
        xVelocity = -gameSettings.playerSpeed * 0.7071;
        yVelocity = -gameSettings.playerSpeed * 0.7071;
        animationKey = "player_anim_left_diagonal";
      } else if (this.cursorKeys.right.isDown) {
        // Diagonal movement: up + right
        xVelocity = gameSettings.playerSpeed * 0.7071;
        yVelocity = -gameSettings.playerSpeed * 0.7071;
        animationKey = "player_anim_right_diagonal";
      }
    }

    // Diagonal movement
    if (this.cursorKeys.down.isDown) {
      if (this.cursorKeys.left.isDown) {
        // Diagonal movement: down + left
        xVelocity = -gameSettings.playerSpeed * 0.7071;
        yVelocity = gameSettings.playerSpeed * 0.7071;
        animationKey = "player_anim_left_diagonal";
      } else if (this.cursorKeys.right.isDown) {
        // Diagonal movement: down + right
        xVelocity = gameSettings.playerSpeed * 0.7071;
        yVelocity = gameSettings.playerSpeed * 0.7071;
        animationKey = "player_anim_right_diagonal";
      }
    }

    // Set velocities
    this.player.setVelocityX(xVelocity);
    this.player.setVelocityY(yVelocity);

    // Play animation based on the velocities
    if (this.player.anims.currentAnim.key !== animationKey) {
      this.player.play(animationKey);
    }

    this.lastKeyPressedTime = currentTime;
  }
}

export default PlayerManagement;
