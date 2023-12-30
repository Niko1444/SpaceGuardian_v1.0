import Phaser from 'phaser';

class CreditsScene extends Phaser.Scene {
    constructor() {
      super('CreditsScene');
      this.callingScene = "CreditsScene";
    }
  
    create() {
      this.cameras.main.setBackgroundColor('#000'); // Set the background color to black
  
      let creditsText = `
        SPACE GUARDIAN
        TEAM: FLY TEAM
        LEADER:
        Tien Phat
        MEMBERS:
        Minh Luong 
        Giang Nguyen 
        Tien Luan
        Special Thanks for playing our game!
      `;
  
      let text = this.add.text(0, this.cameras.main.height, creditsText, { color: '#fff', align: 'center', fontFamily: "Pixelify Sans", fontSize: '32px' });
      text.x = this.cameras.main.width / 2 - text.width / 2; // Center the text
  
      // Create a tween to move the text to the top of the screen
      this.tweens.add({
        targets: text,
        y: -text.height,
        duration: 10000, // 10 seconds
        ease: 'Linear'
      });
    }

  }
  export default CreditsScene;
