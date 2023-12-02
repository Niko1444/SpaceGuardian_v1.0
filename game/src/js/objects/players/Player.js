import Entity from "../Entity";
import gameSettings from "../../config/gameSettings";

class Player extends Entity {
    constructor(scene, x, y) {
        super(scene, x, y, "player", "player");
        this.body.velocity.y = Phaser.Math.Between(
          gameSettings.playerSpeed / 2,
          gameSettings.playerSpeed
        );

        this.setInteractiveEntity();
    }

    setVelocityY(velocity) {
        super.setVelocityY(velocity);
      }
    
    setVelocityX(velocity) {
        super.setVelocityX(velocity);
    }

    explode(canDestroy){
        super.explode(canDestroy);
    }

    setInteractiveEntity() {
        super.setInteractiveEntity();
    }
}

export default Player;