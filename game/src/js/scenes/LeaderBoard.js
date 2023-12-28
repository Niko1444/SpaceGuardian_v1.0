import Phaser from "phaser";
import config from "../config/config";
import gameSettings from "../config/gameSettings";

class Leaderboard extends Phaser.Scene {
  constructor() {
    super("leaderboard");
  }

  create() {
    this.add.image(0, 0, "background").setOrigin(0, 0);

    const theText = this.add.text(
      config.width / 2,
      config.height / 4 - 165,
      "THE",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "32px",
        color: "#000",
        align: "center",
      }
    );
    theText.setOrigin(0.5);
    theText.setShadow(2, 2, "#FFFB73", 2, true, true);

    const leaderboardText = this.add.text(
      config.width / 2,
      config.height / 4 - 130,
      "LEADERBOARD",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "64px",
        color: "#FFFB73",
        align: "center",
      }
    );
    leaderboardText.setOrigin(0.5);
    leaderboardText.setShadow(0, 0, "#FFFB73", 10, true, true, true);

    const rankText = this.add.text(
      config.width / 4 - 70,
      config.height / 4 - 50,
      "RANK",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "32px",
        color: "#000",
        align: "center",
      }
    );
    rankText.setOrigin(0.5);
    rankText.setShadow(2, 2, "#FFFB73", 2, true, true);

    const nameText = this.add.text(
      config.width / 2,
      config.height / 4 - 50,
      "NAME",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "32px",
        color: "#000",
        align: "center",
      }
    );
    nameText.setOrigin(0.5);
    nameText.setShadow(2, 2, "#FFFB73", 2, true, true);

    this.time.delayedCall({});

    const scoreText = this.add.text(
      (config.width / 4) * 3 + 70,
      config.height / 4 - 50,
      "SCORE",
      {
        fontFamily: "Pixelify Sans",
        fontSize: "32px",
        color: "#000",
        align: "center",
      }
    );
    scoreText.setOrigin(0.5);
    scoreText.setShadow(2, 2, "#FFFB73", 2, true, true);

    const playerName = document.getElementById("playerNameInput").value;
    this.submitScore({
      name: playerName,
      score: gameSettings.playerScore,
    });
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
    let previousScore = null; // To track the previous score
    let currentRank = 0; // To track the current rank

    // Assuming data is an array of objects with id, name, and score fields
    data.forEach((entry, index) => {
      // Check if the current score is different from the previous one
      if (entry.score !== previousScore) {
        currentRank = index + 1; // Increment rank if scores are different
      }

      // Display Rank
      const rankText = this.add.text(
        config.width / 4 - 70,
        config.height / 4 + index * 50,
        `${index + 1}`,
        {
          fontFamily: "Pixelify Sans",
          fontSize: "32px",
          color: "#FFFB73",
        }
      );
      rankText.setOrigin(0.5);
      rankText.setShadow(2, 2, "#000", 2, true, true);

      // Display Name
      const nameText = this.add.text(
        config.width / 2,
        config.height / 4 + index * 50,
        entry.name,
        {
          fontFamily: "Pixelify Sans",
          fontSize: "32px",
          color: "#FFFB73",
        }
      );
      nameText.setOrigin(0.5);
      nameText.setShadow(2, 2, "#000", 2, true, true);

      // Display Score
      const scoreText = this.add.text(
        (config.width / 4) * 3 + 70,
        config.height / 4 + index * 50,
        entry.score,
        {
          fontFamily: "Pixelify Sans",
          fontSize: "32px",
          color: "#FFFB73",
        }
      );
      scoreText.setOrigin(0.5);
      scoreText.setShadow(2, 2, "#000", 2, true, true);
      // Update the previous score for the next iteration
      previousScore = entry.score;
    });
  }

  sortLeaderboard(data) {
    // Sort the data by score in descending order
    return data.sort((a, b) => b.score - a.score);
  }
}

export default Leaderboard;
