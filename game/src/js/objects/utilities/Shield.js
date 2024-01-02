import Entity from "../Entity.js";
import gameSettings from "../../config/gameSettings.js";
import Phaser from "phaser";
import Player from "../players/Player.js";

class Shield extends Entity {
  constructor(scene, player) {
    super(scene, player.x, player.y, "shield_texture");
    scene.add.existing(this);
    this.setDepth(1);
    this.setVisible(false);

    this.setInteractiveEntity();
  }

  show() {
    this.setVisible(true); // Show the shield
  }

  hide() {
    this.setVisible(false); // Hide the shield
  }

  updatePosition(player) {
    this.setPosition(player.x, player.y);
  }

  setInteractiveEntity() {
    super.setInteractiveEntity();
  }
}
export default Shield;
