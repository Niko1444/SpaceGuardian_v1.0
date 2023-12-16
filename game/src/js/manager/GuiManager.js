import Phaser from "phaser";
import config from "../config/config";
import PlayingScreen from "../scenes/PlayingScreen";
import PauseScreen from "../scenes/PauseScreen";
import GameOver from "../scenes/GameOver";
import LoadingScreen from "../scenes/LoadingScreen";
import TutorialScreen from "../scenes/TutorialScreen";

class GuiManager{
    constructor(scene) {
        this.scene = scene;
        this.loadingSceneStarted = false;
        this.createGui();
    }

    createGui() {
        // Additional GUI elements specific to each scene
        if (this.scene instanceof PauseScreen) {
            this.createPauseGui();
        } else if (this.scene instanceof GameOver) {
            this.createGameOverGui();
        } 
    }

    createPauseGui(){

        this.createSimpleText(config.width / 2,config.height / 2 - 50,"Pause","32px","#fff",0.5)

        this.createSimpleText(config.width / 2,config.height / 2,"Press P to Unpause","24px","#fff",0.5)

        this.createSimpleText(config.width / 2,config.height / 2 + 30,"Press T to TitleScreen","24px","#fff",0.5)
      
    }

    createGameOverGui(){

        this.createSimpleText(config.width / 2,config.height / 2 - 50,"Game Over","32px","#fff",0.5)
      
        this.createSimpleText(config.width / 2,config.height / 2,"Press R to Restart","24px","#fff",0.5)

        this.createSimpleText(config.width / 2,config.height / 2 + 30,"Press T to TitleScreen","24px","#fff",0.5)
    }

    createTitleGui(){
        // Add later
    }

    createSimpleText(x,y,key,font,color,origin){
        const simpleText = this.scene.add.text(
            x,
            y,
            key,
            { fontSize: font, fill: color }
          );
          simpleText.setOrigin(origin);
    }

    createBackground(key){
        this.scene.background = this.scene.add.tileSprite(
            0,
            0,
            config.width,
            config.height,
            key
          );
          this.scene.background.setOrigin(0, 0);
    }

    createTutorialText() {
        
    }
}

export default GuiManager;