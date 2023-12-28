import Phaser from "phaser";
import config from "../config/config";

class Leaderboard extends Phaser.Scene {
  constructor() {
    super("leaderboard");
  }

  create() {
    this.add.image(0, 0, "background").setOrigin(0, 0);

    const leaderboardText = this.add.text(
      config.width / 2,
      config.height / 4 - 130,
      "LEADERBOARD",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "64px",
        color: "#F3F8FF",
        align: "center",
      }
    );
    leaderboardText.setOrigin(0.5);

    this.tweens.add({
      targets: leaderboardText,
      duration: 500,
      ease: "Sine.easeInOut",
      repeat: -1,
      yoyo: true,
      alpha: 0.4,
    });

    const rankText = this.add.text(
      config.width / 4,
      config.height / 4 - 80,
      "RANK",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "32px",
        color: "#F3F8FF",
        align: "center",
      }
    );
    rankText.setOrigin(0.5);

    const nameText = this.add.text(
      config.width / 2,
      config.height / 4 - 80,
      "NAME",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "32px",
        color: "#F3F8FF",
        align: "center",
      }
    );
    nameText.setOrigin(0.5);

    const scoreText = this.add.text(
      (config.width / 4) * 3,
      config.height / 4 - 80,
      "SCORE",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "32px",
        color: "#F3F8FF",
        align: "center",
      }
    );
    scoreText.setOrigin(0.5);

    const playerName = document.getElementById("playerNameInput").value;
    this.submitScore({ name: playerName, score: 10000 });
  }

  fetchLeaderboard() {
    fetch("https://6585ac26022766bcb8c9202c.mockapi.io/leaderboard")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok, status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        // Sort the data by score in descending order
        const sortedData = this.sortLeaderboard(data);

        // Display only the top 10 scores
        const top10Data = sortedData.slice(0, 10);

        // Process the data or update your game UI here
        this.displayLeaderboard(top10Data);
      })
      .catch((error) => {
        console.error("Error fetching leaderboard:", error);
      });
  }

  submitScore(newScore) {
    // Submit a new score
    fetch("https://6585ac26022766bcb8c9202c.mockapi.io/leaderboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newScore),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok, status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        // Log the response to the console
        console.log("Score submitted successfully:", data);
        this.fetchLeaderboard();
      })
      .catch((error) => {
        console.error("Error submitting score:", error);
      });
  }

  displayLeaderboard(data) {
    // Assuming data is an array of objects with id, name, and score fields
    data.forEach((entry, index) => {
      // Display Rank
      const rankText = this.add.text(
        config.width / 4,
        config.height / 4 + index * 50,
        `${index + 1}`,
        {
          fontFamily: "Pixelify Sans",
          fontSize: "32px",
          color: "#ffffff",
        }
      );
      rankText.setOrigin(0.5);

      // Display Name
      const nameText = this.add.text(
        config.width / 2,
        config.height / 4 + index * 50,
        entry.name,
        {
          fontFamily: "Pixelify Sans",
          fontSize: "32px",
          color: "#ffffff",
        }
      );
      nameText.setOrigin(0.5);

      // Display Score
      const scoreText = this.add.text(
        (config.width / 4) * 3,
        config.height / 4 + index * 50,
        entry.score,
        {
          fontFamily: "Pixelify Sans",
          fontSize: "32px",
          color: "#ffffff",
        }
      );
      scoreText.setOrigin(0.5);
    });
  }

  sortLeaderboard(data) {
    // Sort the data by score in descending order
    return data.sort((a, b) => b.score - a.score);
  }
}

export default Leaderboard;
