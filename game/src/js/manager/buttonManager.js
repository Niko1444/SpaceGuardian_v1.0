import config from "../config/config";
import Phaser from "phaser";
import Button from "../objects/Button";

class buttonManager {
    // constructor(scene) {
    //   this.scene = scene;
    //   this.pauseButton = null;
    //   this.resumeButton = null;

    //   this.PauseButton();
    //   this.ResumeButton();
    // }

    // PauseButton() {
    //   this.pauseButton = this.scene.add
    //     .sprite(20, 60, "pauseDis_texture");
    //   this.pauseButton.setInteractive();
    //   // this.pauseButton.setVisible(true);

    //   this.pauseButton.on("pointerdown", () => {
    //     this.pause();
    //   });
    // }

    // ResumeButton() {
    //   this.resumeButton = this.scene.add
    //     .sprite(20, 20, "pauseButton_texture");
    //   this.resumeButton.setInteractive();
    //   // this.resumeButton.setVisible(false);
    //   this.resumeButton.on("pointerdown", () => {
    //     this.resume();
    //   });
    // }
    // pause() {
    //   // this.pauseButton.setVisible(false);
    //   // this.pauseButton.disableInteractive();
    //   // this.resumeButton.setVisible(true);
    //   // this.resumeButton.setInteractive();
    //   // config.pauseGame = !config.pauseGame;
    //   // if (config.pauseGame === true) {
    //     this.scene.scene.launch("pauseScreen");
    //     this.scene.scene.pause("playGame");
    //   // }

    // }

    // resume() {
    //   this.scene.scene.stop("pauseScreen");
    //   this.scene.scene.resume("playGame");
    //   // this.resumeButton.setVisible(false);
    //   // this.resumeButton.disableInteractive();
    //   // this.pauseButton.setVisible(true);
    //   // this.pauseButton.setInteractive();
    // }
  constructor(scene) {
    this.scene = scene;
    // this.createButton();
    // this.update();
    //----
    //  this.button = this.scene.add.sprite(20, 20, "pauseButton_texture");
    // this.button.setInteractive();
    // this.button.on("pointerup", () => {
    //   this.toggleGamePause();
    // });
    //----
    this.button = this.scene.add.sprite(20, 30, "settingButton_texture");
    // this.button1 = this.scene.add.sprite(20, 20, "pauseDis_texture");
    // this.button.disableInteractive();
    // this.button.setVisible(false);
    // this.button1.setInteractive();

    // this.button1.setVisible(true);
    this.button.setInteractive();

    this.button.on("pointerup", () => {
      config.pauseGame = !config.pauseGame;
      if (config.pauseGame == true) {
        // this.button.play("pauseButton_anim");
        // this.button.play("resumeButton_anim");
        this.pause();
      } else {
        config.pauseGame = false;
        // this.button.play("resumeButton_anim");
        // this.button.play("pauseButton_anim");
        this.resume();
      }
    });
   
    this.button.on("pointerover", () => {
      this.button.setTexture("settingHover_texture");
    });
    this.button.on("pointerout", () => {
      this.button.setTexture("settingButton_texture");
    });


    // this.button1.on("pointerup", () => {
    //   this.button1.play("pauseDis_anim");
    //   this.button.setInteractive();
    //   this.button.setVisible(true);
    // });
    
    
  }

  // createButton() {
  //   this.button = this.scene.add.sprite(20, 20, "pauseButton_texture");
  //   this.button.setInteractive();
  //   this.button.on("pointerup", () => {
  //     config.pauseGame = !config.pauseGame;
  //     if (config.pauseGame == true) {
  //       this.button.play("pauseButton_anim");
  //       // this.button.play("resumeButton_anim");
  //       this.pause();
  //     } else {
  //       config.pauseGame = false;

  //       this.button.play("resumeButton_anim");
  //       // this.button.play("pauseButton_anim");

  //       this.resume();
  //     }
  //   });
  // }

  toggleGamePause() {
    config.pauseGame = !config.pauseGame;

    if (config.pauseGame === true) {
      this.button.play("pauseButton_anim");
      this.pauseGame();
    } else {
      config.pauseGame = false;
      this.button.play("resumeButton_anim");
      this.resumeGame();
    }
  }

  pause() {
    // Pause the game logic or handle pausing
    // Show pause screen, etc.
    this.scene.scene.pause("playGame");
    this.scene.scene.launch("pauseScreen");
    // Code for animating the button to show as "resume"
  }

  resume() {
    // Resume the game logic or handle resuming
    this.scene.scene.resume("playGame");
    this.scene.scene.stop("pauseScreen");
    // Code for animating the button to show as "pause"
  }


  // }
  

}
export default buttonManager;
