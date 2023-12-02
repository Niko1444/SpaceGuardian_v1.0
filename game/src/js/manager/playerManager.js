import Phaser from "phaser";
import gameSettings from "../config/gameSettings";
import config from "../config/config";

class PlayerManagement{
    constructor(scene, player){
        this.scene = scene;
        this.player = player;
        this.cursorKeys = scene.input.keyboard.createCursorKeys();
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
}

export default PlayerManagement;
