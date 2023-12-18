import config from "../config/config.js";
import Phaser from "phaser";
import Button from "../objects/Button.js";

class LeaderBoard extends Phaser.Scene {
    constructor() {
        super("leaderBoard");
    }

    preload() {
        // Preload assets like images, fonts, etc., if needed
        this.load.image(
            "background1",
            "assets/images/backgrounds/blue/nebula_1.png"
          );

          this.load.spritesheet({
            key: "quit_button",
            url: "assets/gui/button.png",
            frameConfig: {
              frameWidth: 93,
              frameHeight: 28,
              startFrame: 5,
              endFrame: 5,
            },
          });
      
          this.load.spritesheet({
            key: "buttonQuit_hover",
            url: "assets/gui/button_hover.png",
            frameConfig: {
              frameWidth: 93,
              frameHeight: 28,
              startFrame: 5,
              endFrame: 5,
            },
          });
      
    }

    create() {
        // Create your leaderboard UI and elements
        this.background = this.add.tileSprite(
            0,
            0,
            config.width,
            config.height,
            "background1"
          );
          this.background.setOrigin(0, 0);

          // Create "SPACE" text
    const leaderBoardText = this.add.text(
        config.width / 2,
        50,
        "LEADER BOARD",
        {
          fontFamily: "Pixelify Sans",
          fontSize: "50px",
          color: "#FF454D", // Set the color for "SPACE"
          align: "center",
        }
      );
      leaderBoardText.setOrigin(0.5);
  
  
      // Tween animation for the rainbow effect on "GUARDIAN"
      this.tweens.add({
        targets: leaderBoardText,
        duration: 1000, // Adjust the duration as needed
        ease: "Sine.easeInOut",
        repeat: -1,
        yoyo: true,
        alpha: 0.2, // Optional: You can adjust the alpha for a fading effect
      });
      this.quitButton = new Button(this, config.width/2 , 550, 'quit_button', 'buttonQuit_hover', 'bootGame');

      const textStyle = {
        fontFamily: "Pixelify Sans",
          fontSize: "20px",
          color: "#FF454D", // Set the color for "SPACE"
          align: "center",
      };
  
      // Display the leaderboard headers
      this.add.text(config.width/ 2 - 38 - 150, 150, 'Rank', textStyle);
      this.add.text(config.width/ 2 - 30, 150, 'Score', textStyle);
      this.add.text(config.width/ 2 - 38 + 170 , 150, 'Name', textStyle);
  
      // Sample leaderboard data - replace with your actual data
      const leaderboardData = [
        { rank: 1, score: 1000, name: 'JASON' },
        { rank: 2, score: 900, name: 'LEON' },
        { rank: 3, score: 800, name: 'TOM' },
        { rank: 4, score: 700, name: 'MIKE' },
        { rank: 5, score: 600, name: 'HARRY' },
        { rank: 6, score: 500, name: 'JACK' },


        // Add more player data as needed
      ];
  
      // Display leaderboard data dynamically
      let offsetY = 200;
      leaderboardData.forEach((playerData, index) => {
        this.add.text(config.width/ 2 - 25 - 150, offsetY, playerData.rank, textStyle);
        this.add.text(config.width/ 2 - 24, offsetY, playerData.score, textStyle);
        this.add.text(config.width/ 2 - 38 + 170, offsetY, playerData.name, textStyle);
        offsetY += 50; // Adjust the vertical spacing
      });
  
    }

    update() {
        // Update logic, if any, for the leaderboard
    }
}

export default LeaderBoard;