import Phaser from "phaser";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "regenerator-runtime";

import { LeaderBoard } from "phaser3-rex-plugins/plugins/firebase-components";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyzLpmJ77rwmWQzdwqksDZkGNeqmmo8RE",
  authDomain: "space-guardian-77d1d.firebaseapp.com",
  projectId: "space-guardian-77d1d",
  storageBucket: "space-guardian-77d1d.appspot.com",
  messagingSenderId: "552291259827",
  appId: "1:552291259827:web:771bd91f3083c7d5baa7c6",
  measurementId: "G-272W7V49DS",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

class Leaderboard extends Phaser.Scene {
  constructor() {
    super("leaderboard");
  }

  create() {
    // Initialize leaderboard
    const leaderboard = this.plugins
      .get("rexLeaderBoard")
      .add(app, "leaderboard");

    // Customize leaderboard

    // Example: Show the top 10 players
    leaderboard.load((entries) => {
      console.log("Top 10 players: ", entries);
    });
  }
}

export default Leaderboard;
