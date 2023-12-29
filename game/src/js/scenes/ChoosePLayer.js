import Phaser, { Create } from "phaser";
import config from "../config/config.js";
import GuiManager from "../manager/GuiManager.js";

class ChoosePLayer extends Phaser.Scene {
  constructor() {
    super("choosePlayer");
  }

  preload() {
    this.load.image(
      "background",
      "assets/images/backgrounds/purple/nebula_3.png"
    );

    for (let i = 1; i <= 9; i++) {
      this.load.spritesheet({
        key: `player_texture_${i}`,
        url: `assets/spritesheets/players/planes_0${i}A.png`,
        frameConfig: {
          frameWidth: 96,
          frameHeight: 96,
          startFrame: 0,
          endFrame: 19,
        },
      });
    }
  }

  create() {
    this.background = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background"
    );

    this.background.setOrigin(0, 0);

    const chooseText = this.add.text(
      config.width / 2,
      config.height / 4 - 130,
      "CHOOSE YOUR SHIP!",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "40px",
        color: "#F3F8FF", // Set the color for "SPACE"
        align: "center",
      }
    );
    chooseText.setOrigin(0.5);

    let count = 1;
    this.under_player = this.add.image(
      (config.width * 2) / 3 - config.width / 6,
      (config.height * 2) / 4 + 12,
      "under_player_hover"
    );
    this.under_player.setOrigin(0.5);
    this.under_player.setScale(5);

    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        const playerImage = this.add.image(
          (config.width * j) / 3 - config.width / 6,
          (config.height * i) / 4,
          `player_texture_${count}`,
          0
        );
        playerImage.setOrigin(0.5);
        playerImage.setScale(2);
        playerImage.setInteractive();
        count = count + 1;

        playerImage.on("pointerover", () => {
          this.under_player.x = playerImage.x;
          this.under_player.y = playerImage.y + 12;
        });

        playerImage.on("pointerdown", () => {
          // Call a function to handle player selection
          this.enterPlayer();
        });
      }
    }

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.isKeyPressInProgess = false;

    this.input.keyboard.on(
      "keydown",
      function (event) {
        if (event.code === "Enter") {
          // Call a function to handle player selection
          this.enterPlayer();
        }
      },
      this
    );

    // Create "LOGO" image
    // Create "LOGO" image
    const bottomLeftImage = this.add.image(
      (config.width / 10) * 8.5,
      (config.height / 10) * 9.78,
      "logo"
    );
    bottomLeftImage.setOrigin(0, 1);
    bottomLeftImage.setScale(0.3);

    this.hideTextInput();
  }

  update() {
    if (this.cursorKeys.up.isDown && !this.isKeyPressInProgess) {
      if (this.under_player.y == config.height / 4 + 12) {
        this.under_player.y = (config.height * 3) / 4 + 12;
      } else {
        this.under_player.y = this.under_player.y - config.height / 4;
      }
      this.isKeyPressInProgess = true;
    } else if (this.cursorKeys.down.isDown && !this.isKeyPressInProgess) {
      if (this.under_player.y == (config.height * 3) / 4 + 12) {
        this.under_player.y = config.height / 4 + 12;
      } else {
        this.under_player.y = this.under_player.y + config.height / 4;
      }
      this.isKeyPressInProgess = true;
    }

    if (this.cursorKeys.left.isDown && !this.isKeyPressInProgess) {
      if (this.under_player.x == config.width / 3 - config.width / 6) {
        this.under_player.x = config.width - config.width / 6;
      } else {
        this.under_player.x = this.under_player.x - config.width / 3;
      }
      this.isKeyPressInProgess = true;
    } else if (this.cursorKeys.right.isDown && !this.isKeyPressInProgess) {
      if (this.under_player.x == config.width - config.width / 6) {
        this.under_player.x = config.width / 3 - config.width / 6;
      } else {
        this.under_player.x = this.under_player.x + config.width / 3;
      }
      this.isKeyPressInProgess = true;
    }

    if (
      this.cursorKeys.up.isUp &&
      this.cursorKeys.down.isUp &&
      this.cursorKeys.left.isUp &&
      this.cursorKeys.right.isUp
    ) {
      this.isKeyPressInProgess = false;
    }
  }

  enterPlayer() {
    let value = this.getPlayerIndexByPosition(
      this.under_player.x,
      this.under_player.y
    );

    this.scene.start("loadingScreen", { number: value });
  }

  getPlayerIndexByPosition(x, y) {
    if (y == config.height / 4 + 12) {
      if (x < (config.width * 2) / 3 - config.width / 6) {
        return 1;
      } else if (x == (config.width * 2) / 3 - config.width / 6) {
        return 2;
      } else {
        return 3;
      }
    } else if (y == (config.height * 2) / 4 + 12) {
      if (x < (config.width * 2) / 3 - config.width / 6) {
        return 4;
      } else if (x == (config.width * 2) / 3 - config.width / 6) {
        return 5;
      } else {
        return 6;
      }
    } else {
      if (x < (config.width * 2) / 3 - config.width / 6) {
        return 7;
      } else if (x == (config.width * 2) / 3 - config.width / 6) {
        return 8;
      } else {
        return 9;
      }
    }
  }

  hideTextInput() {
    const playerNameInput = document.getElementById("playerNameInput");
    playerNameInput.style.display = "none";
  }
}

export default ChoosePLayer;
