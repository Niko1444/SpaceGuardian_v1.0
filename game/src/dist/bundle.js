/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/config/config.js */ \"./js/config/config.js\");\n// game.js\n\n\n\n// Create a new Phaser game instance\nconst game = new (phaser__WEBPACK_IMPORTED_MODULE_0___default().Game)(_js_config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack://src/./game.js?");

/***/ }),

/***/ "./js/config/config.js":
/*!*****************************!*\
  !*** ./js/config/config.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scenes_TitleScreen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scenes/TitleScreen.js */ \"./js/scenes/TitleScreen.js\");\n/* harmony import */ var _scenes_LoadingScreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scenes/LoadingScreen.js */ \"./js/scenes/LoadingScreen.js\");\n/* harmony import */ var _scenes_PlayingScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scenes/PlayingScreen.js */ \"./js/scenes/PlayingScreen.js\");\n/* harmony import */ var _scenes_GameOver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scenes/GameOver.js */ \"./js/scenes/GameOver.js\");\n/* harmony import */ var _scenes_PauseScreen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scenes/PauseScreen.js */ \"./js/scenes/PauseScreen.js\");\n\n\n\n\n\n\nconst rem =\n  (parseFloat(getComputedStyle(document.documentElement).fontSize) * 62.5) /\n  100;\n\nconst gameWidth = 40 * rem;\nconst gameHeight = 75 * rem;\n\nconst config = {\n  pauseGame: false,\n  width: gameWidth,\n  height: gameHeight,\n  backgroundColor: 0x000000,\n  scene: [_scenes_TitleScreen_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _scenes_LoadingScreen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scenes_PlayingScreen_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _scenes_GameOver_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _scenes_PauseScreen_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]],\n  pixelArt: true,\n  physics: {\n    default: \"arcade\",\n    arcade: {\n      debug: false,\n    },\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n\n//# sourceURL=webpack://src/./js/config/config.js?");

/***/ }),

/***/ "./js/config/gameSettings.js":
/*!***********************************!*\
  !*** ./js/config/gameSettings.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst gameSettings = {\n  playerSpeed: 200,\n  enemySpeed: 200,\n  bulletSpeed: 400,\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameSettings);\n\n\n//# sourceURL=webpack://src/./js/config/gameSettings.js?");

/***/ }),

/***/ "./js/manager/KeyboardManager.js":
/*!***************************************!*\
  !*** ./js/manager/KeyboardManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scenes_PauseScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scenes/PauseScreen */ \"./js/scenes/PauseScreen.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n\n\n\n\nclass KeyboardManager{\n    constructor(scene) {\n        this.scene = scene;\n\n        // Store the keys in a property\n        this.keys = this.scene.input.keyboard.addKeys({\n            spacebar: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.SPACE,\n            P: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.P,\n            T: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.T\n            // Add more keys as needed\n        });\n\n        // Ensure the keys are initialized\n        this.scene.input.keyboard.removeKey((phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.SPACE);\n        this.scene.input.keyboard.removeKey((phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.P);\n        this.keys.spacebar = this.scene.input.keyboard.addKey((phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.SPACE);\n        this.keys.P = this.scene.input.keyboard.addKey((phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.P);\n    }\n\n    pauseGame() {\n        // Access keys using this.keys.spacebar and this.keys.P\n        if (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input.Keyboard.JustDown(this.keys.P)) {\n            // Assuming config.pauseGame is a global variable\n            _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pauseGame = !_config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pauseGame;\n\n            if (_config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pauseGame === true) {\n                this.scene.scene.launch(\"pauseScreen\");\n                this.scene.scene.pause();\n            }\n        }\n    }\n\n    unpauseGame() {\n        this.keys.P.on(\"down\", () => {\n            _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pauseGame = false;\n            this.scene.scene.resume(\"playGame\");\n            this.scene.scene.stop();\n        });\n    }\n\n    titleScreen() {\n        this.keys.T.on(\"down\", () => {\n            this.scene.scene.start(\"bootGame\");\n            this.scene.scene.stop(\"playGame\");\n            this.scene.scene.stop(\"pauseScreen\");\n        });\n    }\n\n    restartGame(){\n\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyboardManager);\n\n//# sourceURL=webpack://src/./js/manager/KeyboardManager.js?");

/***/ }),

/***/ "./js/manager/collideManager.js":
/*!**************************************!*\
  !*** ./js/manager/collideManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CollideManager {\n  constructor(scene, player, enemies) {\n    this.scene = scene;\n    this.player = player;\n    this.enemies = enemies;\n\n    // Add collision between bullets and enemies\n    this.scene.physics.add.collider(\n      this.scene.projectiles,\n      this.enemies,\n      this.bulletHitEnemy,\n      null,\n      this.scene\n    );\n\n    // Add collision between player and enemies\n    this.scene.physics.add.collider(\n      this.player,\n      this.enemies,\n      this.playerHitEnemy,\n      null,\n      this.scene\n    );\n  }\n\n  bulletHitEnemy(enemy, bullet) {\n    // Handle bullet hit logic here\n    bullet.destroy();\n\n    // Assuming that enemies have a method `takeDamage` to handle damage\n    if (enemy.takeDamage) {\n      enemy.takeDamage(10); // Adjust the damage amount as needed\n    }\n\n    // Example: Check if the enemy's health is zero or below, then destroy\n    if (enemy.getData(\"health\") <= 0) {\n      enemy.destroy();\n      // Optionally play an explosion animation, etc.\n    }\n  }\n\n  playerHitEnemy(player, enemy) {\n    // Handle player hit logic here\n\n    // Assuming that both player and enemy have a method `takeDamage` to handle damage\n    if (player.takeDamage && enemy.takeDamage) {\n      player.takeDamage(20); // Adjust the damage amount as needed\n      enemy.takeDamage(10); // Adjust the damage amount as needed\n    }\n\n    // Example: Check if the player's health is zero or below, then trigger game over\n    if (player.getData(\"health\") <= 0) {\n      this.scene.gameOver();\n    }\n\n    // Example: Check if the enemy's health is zero or below, then destroy\n    if (enemy.getData(\"health\") <= 0) {\n      enemy.destroy();\n      // Optionally play an explosion animation, etc.\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollideManager);\n\n\n//# sourceURL=webpack://src/./js/manager/collideManager.js?");

/***/ }),

/***/ "./js/manager/enemyManager.js":
/*!************************************!*\
  !*** ./js/manager/enemyManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n\n\n\nclass EnemyManager {\n  constructor(scene) {\n    this.scene = scene;\n    this.enemies = [];\n    this.respawnDelays = []; // Array to store individual respawn delays\n    this.lastRespawnTimes = []; // Array to store individual last respawn times\n\n    // Set initial random delays and times for each enemy\n    for (let i = 0; i < this.enemies.length; i++) {\n      this.respawnDelays[i] = phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(2000, 5000);\n      this.lastRespawnTimes[i] = 0;\n    }\n  }\n\n  moveEnemies(time) {\n    // Move enemies\n    this.enemies.forEach((enemy, index) => {\n      if (enemy.y >= _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height) {\n        const currentTime = this.scene.time.now;\n\n        // Check if enough time has passed for the next respawn for this specific enemy\n        if (\n          currentTime - this.lastRespawnTimes[index] >=\n          this.respawnDelays[index]\n        ) {\n          enemy.y = 0;\n          enemy.x = phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(0, _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width - 48);\n\n          // Set a new random delay for the next respawn for this specific enemy\n          this.respawnDelays[index] = phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(5000, 7000);\n          this.lastRespawnTimes[index] = currentTime;\n        }\n      }\n    });\n  }\n\n  addEnemy(enemy) {\n    // When adding a new enemy, initialize its random delay and last respawn time\n    this.enemies.push(enemy);\n    this.respawnDelays.push(phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(5000, 7000));\n    this.lastRespawnTimes.push(0);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnemyManager);\n\n\n//# sourceURL=webpack://src/./js/manager/enemyManager.js?");

/***/ }),

/***/ "./js/manager/playerManager.js":
/*!*************************************!*\
  !*** ./js/manager/playerManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/gameSettings */ \"./js/config/gameSettings.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n\n\n\n\nclass PlayerManagement {\n  constructor(scene, player) {\n    this.scene = scene;\n    this.player = player;\n    this.cursorKeys = scene.input.keyboard.createCursorKeys();\n  }\n\n  movePlayerManagement() {\n    const currentTime = this.scene.time.now;\n\n    let xVelocity = 0;\n    let yVelocity = 0;\n    let animationKey = \"player_anim\";\n\n    if (this.cursorKeys.up.isDown) {\n      yVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed;\n    } else if (this.cursorKeys.down.isDown) {\n      yVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed;\n    }\n\n    if (this.cursorKeys.left.isDown) {\n      xVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed;\n      animationKey = \"player_anim_left\";\n    } else if (this.cursorKeys.right.isDown) {\n      xVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed;\n      animationKey = \"player_anim_right\";\n    }\n\n    // Diagonal movement\n    if (this.cursorKeys.up.isDown) {\n      if (this.cursorKeys.left.isDown) {\n        // Diagonal movement: up + left\n        xVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        yVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        animationKey = \"player_anim_left_diagonal\";\n      } else if (this.cursorKeys.right.isDown) {\n        // Diagonal movement: up + right\n        xVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        yVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        animationKey = \"player_anim_right_diagonal\";\n      }\n    }\n\n    // Diagonal movement\n    if (this.cursorKeys.down.isDown) {\n      if (this.cursorKeys.left.isDown) {\n        // Diagonal movement: down + left\n        xVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        yVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        animationKey = \"player_anim_left_diagonal\";\n      } else if (this.cursorKeys.right.isDown) {\n        // Diagonal movement: down + right\n        xVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        yVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        animationKey = \"player_anim_right_diagonal\";\n      }\n    }\n\n    // Set velocities\n    this.player.setVelocityX(xVelocity);\n    this.player.setVelocityY(yVelocity);\n\n    // Play animation based on the velocities\n    if (this.player.anims.currentAnim.key !== animationKey) {\n      this.player.play(animationKey);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerManagement);\n\n//# sourceURL=webpack://src/./js/manager/playerManager.js?");

/***/ }),

/***/ "./js/objects/Entity.js":
/*!******************************!*\
  !*** ./js/objects/Entity.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./js/config/config.js\");\n/* harmony import */ var _config_gameSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/gameSettings.js */ \"./js/config/gameSettings.js\");\n\n\n\n\nclass Entity extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().GameObjects).Sprite {\n  constructor(scene, x, y, key, health) {\n    super(scene, x, y, key);\n    this.scene = scene;\n    this.scene.add.existing(this);\n    this.scene.physics.world.enableBody(this, 0);\n    this.setData(\"isDead\", false);\n    this.setData(\"health\", health);\n\n    this.setInteractiveEntity();\n  }\n\n  takeDamage(amount) {\n    // Reduce health by the specified amount\n    const currentHealth = this.getData(\"health\");\n    const newHealth = Math.max(0, currentHealth - amount);\n    this.setData(\"health\", newHealth);\n\n    // Check if the entity is still alive\n    if (newHealth <= 0) {\n      this.explode(true);\n    }\n  }\n\n  onDestroy() {\n    if (this.shootTimer !== undefined) {\n      if (this.shootTimer) {\n        this.shootTimer.remove(false);\n      }\n    }\n  }\n\n  explode(canDestroy) {\n    if (!this.getData(\"isDead\")) {\n      this.setTexture(\"explosion\");\n      this.play(\"explosion\");\n\n      if (this.shootTimer !== undefined) {\n        if (this.shootTimer) {\n          this.shootTimer.remove(false);\n        }\n      }\n\n      this.setAngle(0);\n      this.body.setVelocity(0, 0);\n\n      this.on(\n        \"animationcomplete\",\n        function () {\n          if (canDestroy) {\n            this.destroy();\n          } else {\n            this.setVisible(false);\n          }\n        },\n        this\n      );\n      this.setData(\"isDead\", true);\n    }\n  }\n\n  setInteractiveEntity() {\n    this.setInteractive();\n  }\n\n  setVelocityY(velocity) {\n    this.body.setVelocityY(velocity);\n  }\n\n  setVelocityX(velocity) {\n    this.body.setVelocityX(velocity);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entity);\n\n\n//# sourceURL=webpack://src/./js/objects/Entity.js?");

/***/ }),

/***/ "./js/objects/enemies/Bug1.js":
/*!************************************!*\
  !*** ./js/objects/enemies/Bug1.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./js/objects/Entity.js\");\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/gameSettings */ \"./js/config/gameSettings.js\");\n\n\n\nclass Bug1 extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(scene, x, y, health) {\n    super(scene, x, y, \"bug1_texture\", health);\n    this.body.velocity.y = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].enemySpeed;\n    this.health = health;\n\n    this.setInteractiveEntity();\n  }\n\n  onDestroy() {\n    super.onDestroy();\n  }\n\n  takeDamage(amount) {\n    super.takeDamage(amount);\n  }\n\n  setVelocityY(velocity) {\n    super.setVelocityY(velocity);\n  }\n\n  setVelocityX(velocity) {\n    super.setVelocityX(velocity);\n  }\n\n  setInteractiveEntity() {\n    super.setInteractiveEntity();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bug1);\n\n\n//# sourceURL=webpack://src/./js/objects/enemies/Bug1.js?");

/***/ }),

/***/ "./js/objects/enemies/Bug3.js":
/*!************************************!*\
  !*** ./js/objects/enemies/Bug3.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./js/objects/Entity.js\");\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/gameSettings */ \"./js/config/gameSettings.js\");\n\n\n\nclass Bug3 extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(scene, x, y, health) {\n    super(scene, x, y, \"bug3_texture\", health);\n    this.body.velocity.y = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].enemySpeed;\n    this.health = health;\n\n    this.setInteractiveEntity();\n  }\n\n  onDestroy() {\n    super.onDestroy();\n  }\n\n  takeDamage(amount) {\n    super.takeDamage(amount);\n  }\n\n  setVelocityY(velocity) {\n    super.setVelocityY(velocity);\n  }\n\n  setVelocityX(velocity) {\n    super.setVelocityX(velocity);\n  }\n\n  setInteractiveEntity() {\n    super.setInteractiveEntity();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bug3);\n\n\n//# sourceURL=webpack://src/./js/objects/enemies/Bug3.js?");

/***/ }),

/***/ "./js/objects/enemies/Bug5.js":
/*!************************************!*\
  !*** ./js/objects/enemies/Bug5.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./js/objects/Entity.js\");\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/gameSettings */ \"./js/config/gameSettings.js\");\n\n\n\nclass Bug5 extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(scene, x, y, health) {\n    super(scene, x, y, \"bug5_texture\", health);\n    this.body.velocity.y = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].enemySpeed;\n    this.health = health;\n\n    this.setInteractiveEntity();\n  }\n\n  onDestroy() {\n    super.onDestroy();\n  }\n\n  takeDamage(amount) {\n    super.takeDamage(amount);\n  }\n\n  setVelocityY(velocity) {\n    super.setVelocityY(velocity);\n  }\n\n  setVelocityX(velocity) {\n    super.setVelocityX(velocity);\n  }\n\n  setInteractiveEntity() {\n    super.setInteractiveEntity();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bug5);\n\n\n//# sourceURL=webpack://src/./js/objects/enemies/Bug5.js?");

/***/ }),

/***/ "./js/objects/players/Player.js":
/*!**************************************!*\
  !*** ./js/objects/players/Player.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./js/objects/Entity.js\");\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/gameSettings */ \"./js/config/gameSettings.js\");\n\n\n\nclass Player extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(scene, x, y, health) {\n    super(scene, x, y, \"player_texture\", health);\n    this.body.velocity.y = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed;\n    this.health = health;\n    this.setInteractiveEntity();\n  }\n\n  setVelocityY(velocity) {\n    super.setVelocityY(velocity);\n  }\n\n  setVelocityX(velocity) {\n    super.setVelocityX(velocity);\n  }\n\n  explode(canDestroy) {\n    super.explode(canDestroy);\n  }\n\n  setInteractiveEntity() {\n    super.setInteractiveEntity();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://src/./js/objects/players/Player.js?");

/***/ }),

/***/ "./js/objects/projectiles/Bullet.js":
/*!******************************************!*\
  !*** ./js/objects/projectiles/Bullet.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity.js */ \"./js/objects/Entity.js\");\n/* harmony import */ var _config_gameSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/gameSettings.js */ \"./js/config/gameSettings.js\");\n\n\nclass Bullet extends _Entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(scene) {\n    super(\n      scene,\n      scene.player.x,\n      scene.player.y - 10,\n      \"bullet_texture\",\n      \"bullet\",\n      1\n    );\n    scene.add.existing(this);\n    scene.physics.world.enableBody(this);\n    scene.projectiles.add(this);\n    this.body.velocity.y = -_config_gameSettings_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bulletSpeed;\n\n    this.setDepth(1);\n  }\n\n  update() {\n    if (this.y < 20) {\n      this.destroy();\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bullet);\n\n\n//# sourceURL=webpack://src/./js/objects/projectiles/Bullet.js?");

/***/ }),

/***/ "./js/scenes/GameOver.js":
/*!*******************************!*\
  !*** ./js/scenes/GameOver.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./js/config/config.js\");\n\n\nclass GameOver extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\n  constructor() {\n    super(\"gameOver\");\n  }\n\n  create() {\n    // Add a game over message\n    const gameOverText = this.add.text(\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 50,\n      \"Game Over\",\n      { fontSize: \"32px\", fill: \"#fff\" }\n    );\n    gameOverText.setOrigin(0.5);\n\n    // Add instructions to restart the game\n    const restartText = this.add.text(\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2,\n      \"Press R to Restart\",\n      { fontSize: \"24px\", fill: \"#fff\" }\n    );\n    restartText.setOrigin(0.5);\n\n    // Add instructions to back to the title screen\n    const backToTitleText = this.add.text(\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 + 30,\n      \"Press T to TitleScreen\",\n      { fontSize: \"24px\", fill: \"#fff\" }\n    );\n    backToTitleText.setOrigin(0.5);\n\n    // Define the \"R\" key to restart the game\n    const restartKey = this.input.keyboard.addKey(\n      (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.R\n    );\n\n    restartKey.on(\"down\", () => {\n      this.scene.start(\"playGame\");\n      this.scene.stop(\"gameOver\");\n    });\n\n    // Define the \"T\" key to back to the title screen\n    const backToTitleKey = this.input.keyboard.addKey(\n      (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.T\n    );\n\n    backToTitleKey.on(\"down\", () => {\n      this.scene.start(\"bootGame\");\n      this.scene.stop(\"gameOver\");\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameOver);\n\n\n//# sourceURL=webpack://src/./js/scenes/GameOver.js?");

/***/ }),

/***/ "./js/scenes/LoadingScreen.js":
/*!************************************!*\
  !*** ./js/scenes/LoadingScreen.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./js/config/config.js\");\n\n\nclass LoadingScreen extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\n  constructor() {\n    super(\"loadingScreen\");\n  }\n\n  preload() {\n    this.load.image(\n      \"background_texture\",\n      \"assets/images/backgrounds/purple/nebula_1.png\"\n    );\n\n    // Load Player Spritesheet\n    this.load.spritesheet({\n      key: \"player_texture\",\n      url: \"assets/spritesheets/players/planes_08A.png\",\n      frameConfig: {\n        frameWidth: 96,\n        frameHeight: 96,\n        startFrame: 0,\n        endFrame: 19,\n      },\n    });\n\n    // Load Enemy Spritesheets\n    this.load.spritesheet({\n      key: \"bug1_texture\",\n      url: \"assets/spritesheets/enemies/bug_1.png\",\n      frameConfig: {\n        frameWidth: 64,\n        frameHeight: 64,\n        startFrame: 0,\n        endFrame: 5,\n      },\n    });\n\n    this.load.spritesheet({\n      key: \"bug3_texture\",\n      url: \"assets/spritesheets/enemies/bug_3.png\",\n      frameConfig: {\n        frameWidth: 64,\n        frameHeight: 64,\n        startFrame: 0,\n        endFrame: 5,\n      },\n    });\n\n    this.load.spritesheet({\n      key: \"bug5_texture\",\n      url: \"assets/spritesheets/enemies/bug_5.png\",\n      frameConfig: {\n        frameWidth: 64,\n        frameHeight: 64,\n        startFrame: 0,\n        endFrame: 5,\n      },\n    });\n\n    // Load Bullet Spritesheet\n    this.load.spritesheet({\n      key: \"bullet_texture\",\n      url: \"assets/spritesheets/vfx/bullet.png\",\n      frameConfig: {\n        frameWidth: 9,\n        frameHeight: 34,\n        startFrame: 0,\n        endFrame: 0,\n      },\n    });\n\n    // Load Effect Spritesheets\n    this.load.spritesheet({\n      key: \"explosion_texture\",\n      url: \"assets/spritesheets/vfx/explosion.png\",\n      frameConfig: {\n        frameWidth: 48,\n        frameHeight: 48,\n        startFrame: 0,\n        endFrame: 7,\n      },\n    });\n  }\n\n  create() {\n    // Create player animations\n    this.anims.create({\n      key: \"player_anim\",\n      frames: this.anims.generateFrameNumbers(\"player_texture\", {\n        start: 0,\n        end: 3,\n      }),\n      frameRate: 30,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"player_anim_left\",\n      frames: this.anims.generateFrameNumbers(\"player_texture\", {\n        start: 4,\n        end: 7,\n      }),\n      frameRate: 30,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"player_anim_left_diagonal\",\n      frames: this.anims.generateFrameNumbers(\"player_texture\", {\n        start: 8,\n        end: 11,\n      }),\n      frameRate: 30,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"player_anim_right\",\n      frames: this.anims.generateFrameNumbers(\"player_texture\", {\n        start: 12,\n        end: 15,\n      }),\n      frameRate: 30,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"player_anim_right_diagonal\",\n      frames: this.anims.generateFrameNumbers(\"player_texture\", {\n        start: 16,\n        end: 19,\n      }),\n      frameRate: 30,\n      repeat: -1,\n    });\n\n    // Create enemy animations\n    this.anims.create({\n      key: \"bug1_anim\",\n      frames: this.anims.generateFrameNumbers(\"bug1_texture\", {\n        start: 0,\n        end: 5,\n      }),\n      frameRate: 20,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"bug3_anim\",\n      frames: this.anims.generateFrameNumbers(\"bug3_texture\", {\n        start: 0,\n        end: 5,\n      }),\n      frameRate: 20,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"bug5_anim\",\n      frames: this.anims.generateFrameNumbers(\"bug5_texture\", {\n        start: 0,\n        end: 5,\n      }),\n      frameRate: 20,\n      repeat: -1,\n    });\n\n    // Create explosion animations\n    this.anims.create({\n      key: \"explosion_anim\",\n      frames: this.anims.generateFrameNumbers(\"explosion_texture\", {\n        start: 0,\n        end: 7,\n      }),\n      frameRate: 20,\n      repeat: 0,\n      hideOnComplete: true,\n    });\n\n    const loadingText = this.add.text(\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 50,\n      \"LOADING\",\n      { fontSize: \"32px\", fill: \"#fff\" }\n    );\n    loadingText.setOrigin(0.5);\n\n    this.time.delayedCall(1000, () => {\n      this.scene.start(\"playGame\");\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingScreen);\n\n\n//# sourceURL=webpack://src/./js/scenes/LoadingScreen.js?");

/***/ }),

/***/ "./js/scenes/PauseScreen.js":
/*!**********************************!*\
  !*** ./js/scenes/PauseScreen.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n/* harmony import */ var _manager_KeyboardManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/KeyboardManager */ \"./js/manager/KeyboardManager.js\");\n\n\n\n\nclass PauseScreen extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\n  constructor() {\n    super(\"pauseScreen\");\n  }\n\n  create() {\n    this.keyboardManager = new _manager_KeyboardManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n\n    const pauseText = this.add.text(\n      _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\n      _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 50,\n      \"Pause\",\n      { fontSize: \"32px\", fill: \"#fff\" }\n    );\n    pauseText.setOrigin(0.5);\n\n    // Add instructions to restart the game\n    const unpauseText = this.add.text(\n      _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\n      _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2,\n      \"Press P to Unpause\",\n      { fontSize: \"24px\", fill: \"#fff\" }\n    );\n    unpauseText.setOrigin(0.5);\n\n    // Add instructions to back to the title screen\n    const backToTitleText = this.add.text(\n      _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\n      _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 + 30,\n      \"Press T to TitleScreen\",\n      { fontSize: \"24px\", fill: \"#fff\" }\n    );\n    backToTitleText.setOrigin(0.5);\n\n    this.keyboardManager.unpauseGame();\n\n    this.keyboardManager.titleScreen();\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PauseScreen);\n\n\n//# sourceURL=webpack://src/./js/scenes/PauseScreen.js?");

/***/ }),

/***/ "./js/scenes/PlayingScreen.js":
/*!************************************!*\
  !*** ./js/scenes/PlayingScreen.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/gameSettings */ \"./js/config/gameSettings.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n/* harmony import */ var _objects_projectiles_Bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/projectiles/Bullet */ \"./js/objects/projectiles/Bullet.js\");\n/* harmony import */ var _objects_players_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../objects/players/Player */ \"./js/objects/players/Player.js\");\n/* harmony import */ var _objects_enemies_Bug1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../objects/enemies/Bug1 */ \"./js/objects/enemies/Bug1.js\");\n/* harmony import */ var _objects_enemies_Bug3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../objects/enemies/Bug3 */ \"./js/objects/enemies/Bug3.js\");\n/* harmony import */ var _objects_enemies_Bug5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../objects/enemies/Bug5 */ \"./js/objects/enemies/Bug5.js\");\n/* harmony import */ var _manager_enemyManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../manager/enemyManager */ \"./js/manager/enemyManager.js\");\n/* harmony import */ var _manager_KeyboardManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../manager/KeyboardManager */ \"./js/manager/KeyboardManager.js\");\n/* harmony import */ var _manager_playerManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../manager/playerManager */ \"./js/manager/playerManager.js\");\n/* harmony import */ var _manager_collideManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../manager/collideManager */ \"./js/manager/collideManager.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst BACKGROUND_SCROLL_SPEED = 0.5;\nclass PlayingScreen extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\n  constructor() {\n    super(\"playGame\");\n  }\n\n  create() {\n    this.background = this.add.tileSprite(\n      0,\n      0,\n      _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].width,\n      _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].height,\n      \"background_texture\"\n    );\n    this.background.setOrigin(0, 0);\n\n    // Spawn the Player\n    this.player = new _objects_players_Player__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].width / 2, _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].height - 100, 100);\n    this.player.play(\"player_anim\");\n\n    // Spawn the Enemies\n    this.bug3_1 = new _objects_enemies_Bug3__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, 150, 200, 100);\n    this.bug3_1.play(\"bug3_anim\");\n    this.bug3_2 = new _objects_enemies_Bug3__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, 100, 100, 100);\n    this.bug3_2.play(\"bug3_anim\");\n\n    this.bug5 = new _objects_enemies_Bug5__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, 300, 80, 100);\n    this.bug5.play(\"bug5_anim\");\n\n    this.bug1 = new _objects_enemies_Bug1__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 200, 180, 100);\n    this.bug1.play(\"bug1_anim\");\n    // Create managers\n    this.keyboardManager = new _manager_KeyboardManager__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this);\n    this.playerManagement = new _manager_playerManager__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this, this.player);\n    this.enemyManager = new _manager_enemyManager__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this);\n    this.enemyManager.addEnemy(this.bug3_1);\n    this.enemyManager.addEnemy(this.bug3_2);\n    this.enemyManager.addEnemy(this.bug5);\n    this.enemyManager.addEnemy(this.bug1);\n\n    // Create keyboard inputs\n    this.spacebar = this.input.keyboard.addKey(\n      (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.SPACE\n    );\n\n    // Create a group to manage bullets\n    this.projectiles = this.physics.add.group({\n      classType: _objects_projectiles_Bullet__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      runChildUpdate: true,\n    });\n  }\n\n  update() {\n\n    this.keyboardManager.pauseGame();\n\n    // Move the background\n    this.background.tilePositionY -= BACKGROUND_SCROLL_SPEED;\n\n    // Move the player and enemies\n    this.playerManagement.movePlayerManagement();\n    this.enemyManager.moveEnemies();\n\n    if (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input.Keyboard.JustDown(this.spacebar)) {\n      this.shootBullet();\n    }\n\n    this.projectiles.children.iterate((bullet) => {\n      bullet.update();\n    });\n  }\n\n  shootBullet() {\n    const bullet = new _objects_projectiles_Bullet__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n  }\n\n  gameOver() {\n    this.scene.start(\"gameOver\");\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayingScreen);\n\n\n//# sourceURL=webpack://src/./js/scenes/PlayingScreen.js?");

/***/ }),

/***/ "./js/scenes/TitleScreen.js":
/*!**********************************!*\
  !*** ./js/scenes/TitleScreen.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./js/config/config.js\");\n\n\nclass TitleScreen extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\n  constructor() {\n    super(\"bootGame\");\n  }\n\n  preload() {\n    this.load.image(\n      \"background\",\n      \"assets/images/backgrounds/purple/nebula_3.png\"\n    );\n\n    this.load.spritesheet({\n      key: \"button_play\",\n      url: \"assets/gui/button.png\",\n      frameConfig: {\n        frameWidth: 93,\n        frameHeight: 28,\n        startFrame: 2,\n        endFrame: 2,\n      },\n    });\n\n    this.load.spritesheet({\n      key: \"button_hover\",\n      url: \"assets/gui/button_hover.png\",\n      frameConfig: {\n        frameWidth: 93,\n        frameHeight: 28,\n        startFrame: 2,\n        endFrame: 2,\n      },\n    });\n  }\n\n  create() {\n    // Create Background\n    this.background = this.add.tileSprite(\n      0,\n      0,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height,\n      \"background\"\n    );\n    this.background.setOrigin(0, 0);\n\n    const titleText = \"SPACE GUARDIAN\";\n\n    // Create \"SPACE\" text\n    const spaceText = this.add.text(\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 100,\n      \"SPACE\",\n      {\n        fontFamily: \"Pixelify Sans\",\n        fontSize: \"64px\",\n        color: \"#FF454D\", // Set the color for \"SPACE\"\n        align: \"center\",\n      }\n    );\n    spaceText.setOrigin(0.5);\n\n    // Create \"GUARDIAN\" text with each letter in a different color\n    const guardianText = this.add.text(\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 30,\n      \"Guardian\",\n      {\n        fontFamily: \"Pixelify Sans\",\n        color: \"#FF454D\",\n        fontSize: \"64px\",\n        align: \"center\",\n      }\n    );\n    guardianText.setOrigin(0.5);\n\n    // Tween animation for the rainbow effect on \"GUARDIAN\"\n    this.tweens.add({\n      targets: guardianText,\n      duration: 1000, // Adjust the duration as needed\n      ease: \"Sine.easeInOut\",\n      repeat: -1,\n      yoyo: true,\n      alpha: 0.2, // Optional: You can adjust the alpha for a fading effect\n    });\n\n    // Tween animation for the rainbow effect on \"SPACE\"\n    this.tweens.add({\n      targets: spaceText,\n      duration: 1000, // Adjust the duration as needed\n      ease: \"Sine.easeInOut\",\n      repeat: -1,\n      yoyo: true,\n      alpha: 0.2, // Optional: You can adjust the alpha for a fading effect\n    });\n\n    // Create Play Button\n    this.button_play = this.add.sprite(\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 + 60,\n      \"button_play\"\n    );\n    this.button_play.setInteractive();\n    this.button_play.on(\"pointerdown\", () => {\n      this.scene.start(\"loadingScreen\");\n    });\n    this.button_play.on(\"pointerover\", () => {\n      this.button_play.setTexture(\"button_hover\");\n    });\n    this.button_play.on(\"pointerout\", () => {\n      this.button_play.setTexture(\"button_play\");\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleScreen);\n\n\n//# sourceURL=webpack://src/./js/scenes/TitleScreen.js?");

/***/ }),

/***/ "phaser":
/*!*************************!*\
  !*** external "Phaser" ***!
  \*************************/
/***/ ((module) => {

module.exports = Phaser;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./game.js");
/******/ 	
/******/ })()
;