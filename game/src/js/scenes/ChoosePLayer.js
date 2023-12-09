import Phaser, { Create } from "phaser";
import config from "../config/config.js";
import GuiManager from "../manager/uiManager.js";

class ChoosePLayer extends Phaser.Scene{
    constructor(){
        super("choosePlayer");
    }

    preload(){
        this.load.image(
            "background",
            "assets/images/backgrounds/purple/nebula_3.png"
        );

        this.load.spritesheet({
            key: "button_continue",
            url: "assets/gui/button.png",
            frameConfig: {
                frameWidth: 93,
                frameHeight: 28,
                startFrame: 3,
                endFrame: 3,
            },
        });

        this.load.spritesheet({
            key: "button_continue_hover",
            url: "assets/gui/button_hover.png",
            frameConfig: {
              frameWidth: 93,
              frameHeight: 28,
              startFrame: 3,
              endFrame: 3,
            },
        });

        this.load.image("under_player", "assets/gui/under_player.png");
        this.load.image("under_player_hover", "assets/gui/under_player_hover.png");

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
    
    create(){
        this.background = this.add.tileSprite(
            0,
            0,
            config.width,
            config.height,
            "background"
          );
        
        this.background.setOrigin(0,0);

        const chooseText = this.add.text(
            config.width/2,
            config.height / 4 - 100,
            "Choose your player",
            {
                fontFamily: "Pixelify Sans",
                fontSize: "40px",
                color: "#FF454D", // Set the color for "SPACE"
                align: "center",
            }
        )
        chooseText.setOrigin(0.5);
            
        this.button_continue = this.add.sprite(
            config.width / 2,
            config.height*4/5 + 60,
            "button_continue"
          );
          this.button_continue.setInteractive();
          this.button_continue.on("pointerdown", () => {
              this.scene.start("loadingScreen");
          });
          this.button_continue.on("pointerover", () => {
            this.button_continue.setTexture("button_continue_hover");
          });
          this.button_continue.on("pointerout", () => {
            this.button_continue.setTexture("button_continue");
          });


        
        let count = 1; 

        for(let i = 1 ; i <= 3; i++){
            for(let j = 1 ; j <= 3 ; j++){
                const under_player = this.add.image(config.width*j/3 - config.width/6, config.height*i/4 + 12, "under_player_hover");
                under_player.setVisible(false);

                const playerImage = this.add.image(config.width*j/3 -config.width/6, config.height*i/4 , `player_texture_${count}`, 0);
                count = count + 1;
                playerImage.setOrigin(0.5);
                playerImage.setInteractive();

                playerImage.on("pointerover", () => {
                    under_player.setVisible(true);
                });

                playerImage.on("pointerout", () => {
                    under_player.setVisible(false);
                });
            }
        }



    }
}

export default ChoosePLayer;

    