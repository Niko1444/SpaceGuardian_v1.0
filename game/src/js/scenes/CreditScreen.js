import Phaser from 'phaser';

class CreditsScene extends Phaser.Scene {
    constructor() {
      super('CreditsScene');
      this.callingScene = "CreditsScene";
    }
  
    create() {
      this.cameras.main.setBackgroundColor('#000'); // Set the background color to black
  
      let creditsText = `
        Director: John Doe
        Producer: Jane Doe
        Lead Programmer: Alice
        Art Director: Bob
        Music: Charlie
        Special Thanks: Our Players
      `;
  
      let text = this.add.text(0, this.cameras.main.height, creditsText, { color: '#fff', align: 'center' });
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
