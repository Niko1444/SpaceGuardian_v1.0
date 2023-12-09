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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/config/config.js */ \"./js/config/config.js\");\n// game.js\r\n\r\n\r\n\r\n// Create a new Phaser game instance\r\nconst game = new (phaser__WEBPACK_IMPORTED_MODULE_0___default().Game)(_js_config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\n\n//# sourceURL=webpack://src/./game.js?");

/***/ }),

/***/ "./js/config/config.js":
/*!*****************************!*\
  !*** ./js/config/config.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scenes_TitleScreen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scenes/TitleScreen.js */ \"./js/scenes/TitleScreen.js\");\n/* harmony import */ var _scenes_LoadingScreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scenes/LoadingScreen.js */ \"./js/scenes/LoadingScreen.js\");\n/* harmony import */ var _scenes_PlayingScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scenes/PlayingScreen.js */ \"./js/scenes/PlayingScreen.js\");\n/* harmony import */ var _scenes_GameOver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scenes/GameOver.js */ \"./js/scenes/GameOver.js\");\n/* harmony import */ var _scenes_PauseScreen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scenes/PauseScreen.js */ \"./js/scenes/PauseScreen.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst rem =\r\n  (parseFloat(getComputedStyle(document.documentElement).fontSize) * 62.5) /\r\n  100;\r\n\r\nconst gameWidth = 40 * rem;\r\nconst gameHeight = 75 * rem;\r\n\r\nconst config = {\r\n  pauseGame: false,\r\n  width: gameWidth,\r\n  height: gameHeight,\r\n  backgroundColor: 0x000000,\r\n  scene: [_scenes_TitleScreen_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _scenes_LoadingScreen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scenes_PlayingScreen_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _scenes_GameOver_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _scenes_PauseScreen_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]],\r\n  pixelArt: true,\r\n  physics: {\r\n    default: \"arcade\",\r\n    arcade: {\r\n      debug: true,\r\n    },\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\r\n\n\n//# sourceURL=webpack://src/./js/config/config.js?");

/***/ }),

/***/ "./js/config/gameSettings.js":
/*!***********************************!*\
  !*** ./js/config/gameSettings.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst gameSettings = {\r\n  playerSpeed: 200,\r\n  enemySpeed: 200,\r\n  bulletSpeed: 400,\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameSettings);\r\n\n\n//# sourceURL=webpack://src/./js/config/gameSettings.js?");

/***/ }),

/***/ "./js/manager/collideManager.js":
/*!**************************************!*\
  !*** ./js/manager/collideManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CollideManager {\r\n  constructor(scene, player, enemies) {\r\n    this.scene = scene;\r\n    this.player = player;\r\n    this.enemies = enemies;\r\n\r\n    // Add collision between bullets and enemies\r\n    this.scene.physics.add.collider(\r\n      this.scene.projectiles,\r\n      this.enemies,\r\n      this.bulletHitEnemy,\r\n      null,\r\n      this.scene\r\n    );\r\n\r\n    // Add collision between player and enemies\r\n    this.scene.physics.add.collider(\r\n      this.player,\r\n      this.enemies,\r\n      this.playerHitEnemy,\r\n      null,\r\n      this.scene\r\n    );\r\n  }\r\n\r\n  bulletHitEnemy(enemy, bullet) {\r\n    bullet.destroy();\r\n    enemy.explode(true);\r\n  }\r\n\r\n  playerHitEnemy(player, enemy) {\r\n    enemy.explode(true);\r\n    player.explode(true);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollideManager);\r\n\n\n//# sourceURL=webpack://src/./js/manager/collideManager.js?");

/***/ }),

/***/ "./js/manager/enemyManager.js":
/*!************************************!*\
  !*** ./js/manager/enemyManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n/* harmony import */ var _objects_enemies_Bug1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/enemies/Bug1 */ \"./js/objects/enemies/Bug1.js\");\n\r\n\r\n\r\n\r\nclass EnemyManager {\r\n  constructor(scene) {\r\n    this.scene = scene;\r\n    this.enemies = [];\r\n    this.respawnDelays = []; // Array to store individual respawn delays\r\n    this.lastRespawnTimes = []; // Array to store individual last respawn times\r\n\r\n    // Set initial random delays and times for each enemy\r\n    for (let i = 0; i < this.enemies.length; i++) {\r\n      this.respawnDelays[i] = phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(2000, 5000);\r\n      this.lastRespawnTimes[i] = 0;\r\n    }\r\n  }\r\n\r\n  spawnCircleOfBugs(centerX, centerY, radius, numBugs) {\r\n    const angleIncrement = (2 * Math.PI) / numBugs;\r\n\r\n    for (let i = 0; i < numBugs; i++) {\r\n      const angle = i * angleIncrement;\r\n      const bugX = centerX + radius * Math.cos(angle);\r\n      const bugY = centerY + radius * Math.sin(angle);\r\n\r\n      // Create a new bug\r\n      const newBug = new _objects_enemies_Bug1__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.scene, bugX, -20, 100); // Initialize at the top\r\n      this.addEnemy(newBug); // Add the bug to the array\r\n\r\n      // Add a tween to move the bug downward\r\n      this.scene.tweens.add({\r\n        targets: newBug,\r\n        y: bugY, // Final Y position (centerY)\r\n        duration: 10000, // Duration of the drop (in milliseconds)\r\n        ease: \"Linear\", // Linear easing for constant speed\r\n        onComplete: () => {\r\n          // Bug has reached its final position\r\n          // You can add any additional logic here if needed\r\n        },\r\n      });\r\n    }\r\n  }\r\n\r\n  moveEnemies(time) {\r\n    // Move enemies\r\n    this.enemies.forEach((enemy, index) => {\r\n      if (enemy.y >= _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height) {\r\n        const currentTime = this.scene.time.now;\r\n\r\n        // Check if enough time has passed for the next respawn for this specific enemy\r\n        if (\r\n          currentTime - this.lastRespawnTimes[index] >=\r\n          this.respawnDelays[index]\r\n        ) {\r\n          enemy.y = 0;\r\n          enemy.x = phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(0, _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width - 48);\r\n\r\n          // Set a new random delay for the next respawn for this specific enemy\r\n          this.respawnDelays[index] = phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(5000, 7000);\r\n          this.lastRespawnTimes[index] = currentTime;\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\n  addEnemy(enemy) {\r\n    // When adding a new enemy, initialize its random delay and last respawn time\r\n    this.enemies.push(enemy);\r\n    this.respawnDelays.push(phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(5000, 7000));\r\n    this.lastRespawnTimes.push(0);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnemyManager);\r\n\n\n//# sourceURL=webpack://src/./js/manager/enemyManager.js?");

/***/ }),

/***/ "./js/manager/playerManager.js":
/*!*************************************!*\
  !*** ./js/manager/playerManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/gameSettings */ \"./js/config/gameSettings.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n\r\n\r\n\r\n\r\nclass PlayerManager {\r\n  constructor(scene, player) {\r\n    this.scene = scene;\r\n    this.player = player;\r\n    this.cursorKeys = scene.input.keyboard.createCursorKeys();\r\n  }\r\n\r\n  movePlayer() {\r\n    const currentTime = this.scene.time.now;\r\n\r\n    let xVelocity = 0;\r\n    let yVelocity = 0;\r\n    let animationKey = \"player_anim\";\r\n\r\n    if (this.cursorKeys.up.isDown) {\r\n      yVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed;\r\n    } else if (this.cursorKeys.down.isDown) {\r\n      yVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed;\r\n    }\r\n\r\n    if (this.cursorKeys.left.isDown) {\r\n      xVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed;\r\n      animationKey = \"player_anim_left\";\r\n    } else if (this.cursorKeys.right.isDown) {\r\n      xVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed;\r\n      animationKey = \"player_anim_right\";\r\n    }\r\n\r\n    // Diagonal movement\r\n    if (this.cursorKeys.up.isDown) {\r\n      if (this.cursorKeys.left.isDown) {\r\n        // Diagonal movement: up + left\r\n        xVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\r\n        yVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\r\n        animationKey = \"player_anim_left_diagonal\";\r\n      } else if (this.cursorKeys.right.isDown) {\r\n        // Diagonal movement: up + right\r\n        xVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\r\n        yVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\r\n        animationKey = \"player_anim_right_diagonal\";\r\n      }\r\n    }\r\n\r\n    // Diagonal movement\r\n    if (this.cursorKeys.down.isDown) {\r\n      if (this.cursorKeys.left.isDown) {\r\n        // Diagonal movement: down + left\r\n        xVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\r\n        yVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\r\n        animationKey = \"player_anim_left_diagonal\";\r\n      } else if (this.cursorKeys.right.isDown) {\r\n        // Diagonal movement: down + right\r\n        xVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\r\n        yVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\r\n        animationKey = \"player_anim_right_diagonal\";\r\n      }\r\n    }\r\n\r\n    // Set velocities\r\n    this.player.setVelocityX(xVelocity);\r\n    this.player.setVelocityY(yVelocity);\r\n\r\n    // Play animation based on the velocities\r\n    if (this.player.anims.currentAnim.key !== animationKey) {\r\n      this.player.play(animationKey);\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerManager);\r\n\n\n//# sourceURL=webpack://src/./js/manager/playerManager.js?");

/***/ }),

/***/ "./js/objects/Entity.js":
/*!******************************!*\
  !*** ./js/objects/Entity.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./js/config/config.js\");\n/* harmony import */ var _config_gameSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/gameSettings.js */ \"./js/config/gameSettings.js\");\n\r\n\r\n\r\n\r\nclass Entity extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().GameObjects).Sprite {\r\n  constructor(scene, x, y, key, health) {\r\n    super(scene, x, y, key);\r\n    this.scene = scene;\r\n    this.scene.add.existing(this);\r\n    this.scene.physics.world.enableBody(this, 0);\r\n    this.setData(\"isDead\", false);\r\n    this.setData(\"health\", health);\r\n\r\n    this.setInteractiveEntity();\r\n  }\r\n\r\n  explode(canDestroy) {\r\n    if (!this.getData(\"isDead\")) {\r\n      this.setTexture(\"explosion_texture\");\r\n      this.play(\"explosion_anim\");\r\n\r\n      if (this.shootTimer !== undefined) {\r\n        if (this.shootTimer) {\r\n          this.shootTimer.remove(false);\r\n        }\r\n      }\r\n\r\n      this.setAngle(0);\r\n      this.body.setVelocity(0, 0);\r\n\r\n      this.on(\r\n        \"animationcomplete\",\r\n        function () {\r\n          if (canDestroy) {\r\n            this.destroy();\r\n          } else {\r\n            this.setVisible(false);\r\n          }\r\n        },\r\n        this\r\n      );\r\n      this.setData(\"isDead\", true);\r\n    }\r\n  }\r\n\r\n  setInteractiveEntity() {\r\n    this.setInteractive();\r\n  }\r\n\r\n  setVelocityY(velocity) {\r\n    this.body.setVelocityY(velocity);\r\n  }\r\n\r\n  setVelocityX(velocity) {\r\n    this.body.setVelocityX(velocity);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entity);\r\n\n\n//# sourceURL=webpack://src/./js/objects/Entity.js?");

/***/ }),

/***/ "./js/objects/enemies/Bug1.js":
/*!************************************!*\
  !*** ./js/objects/enemies/Bug1.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./js/objects/Entity.js\");\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/gameSettings */ \"./js/config/gameSettings.js\");\n\r\n\r\n\r\nclass Bug1 extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(scene, x, y, health) {\r\n    super(scene, x, y, \"bug1_texture\", health);\r\n    this.body.velocity.y = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].enemySpeed;\r\n    this.health = health;\r\n\r\n    this.setInteractiveEntity();\r\n  }\r\n\r\n  onDestroy() {\r\n    super.onDestroy();\r\n  }\r\n\r\n  takeDamage(amount) {\r\n    super.takeDamage(amount);\r\n  }\r\n\r\n  setVelocityY(velocity) {\r\n    super.setVelocityY(velocity);\r\n  }\r\n\r\n  setVelocityX(velocity) {\r\n    super.setVelocityX(velocity);\r\n  }\r\n\r\n  setInteractiveEntity() {\r\n    super.setInteractiveEntity();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bug1);\r\n\n\n//# sourceURL=webpack://src/./js/objects/enemies/Bug1.js?");

/***/ }),

/***/ "./js/objects/enemies/Bug3.js":
/*!************************************!*\
  !*** ./js/objects/enemies/Bug3.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./js/objects/Entity.js\");\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/gameSettings */ \"./js/config/gameSettings.js\");\n\r\n\r\n\r\nclass Bug3 extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(scene, x, y, health) {\r\n    super(scene, x, y, \"bug3_texture\", health);\r\n    this.body.velocity.y = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].enemySpeed;\r\n    this.health = health;\r\n\r\n    this.setInteractiveEntity();\r\n  }\r\n\r\n  onDestroy() {\r\n    super.onDestroy();\r\n  }\r\n\r\n  takeDamage(amount) {\r\n    super.takeDamage(amount);\r\n  }\r\n\r\n  setVelocityY(velocity) {\r\n    super.setVelocityY(velocity);\r\n  }\r\n\r\n  setVelocityX(velocity) {\r\n    super.setVelocityX(velocity);\r\n  }\r\n\r\n  setInteractiveEntity() {\r\n    super.setInteractiveEntity();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bug3);\r\n\n\n//# sourceURL=webpack://src/./js/objects/enemies/Bug3.js?");

/***/ }),

/***/ "./js/objects/enemies/Bug5.js":
/*!************************************!*\
  !*** ./js/objects/enemies/Bug5.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./js/objects/Entity.js\");\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/gameSettings */ \"./js/config/gameSettings.js\");\n\r\n\r\n\r\nclass Bug5 extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(scene, x, y, health) {\r\n    super(scene, x, y, \"bug5_texture\", health);\r\n    this.body.velocity.y = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].enemySpeed;\r\n    this.health = health;\r\n\r\n    this.setInteractiveEntity();\r\n  }\r\n\r\n  onDestroy() {\r\n    super.onDestroy();\r\n  }\r\n\r\n  takeDamage(amount) {\r\n    super.takeDamage(amount);\r\n  }\r\n\r\n  setVelocityY(velocity) {\r\n    super.setVelocityY(velocity);\r\n  }\r\n\r\n  setVelocityX(velocity) {\r\n    super.setVelocityX(velocity);\r\n  }\r\n\r\n  setInteractiveEntity() {\r\n    super.setInteractiveEntity();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bug5);\r\n\n\n//# sourceURL=webpack://src/./js/objects/enemies/Bug5.js?");

/***/ }),

/***/ "./js/objects/players/Player.js":
/*!**************************************!*\
  !*** ./js/objects/players/Player.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./js/objects/Entity.js\");\n/* harmony import */ var _projectiles_Bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projectiles/Bullet */ \"./js/objects/projectiles/Bullet.js\");\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/gameSettings */ \"./js/config/gameSettings.js\");\n\r\n\r\n\r\n\r\nclass Player extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(scene, x, y, health) {\r\n    super(scene, x, y, \"player_texture\", health);\r\n    this.body.velocity.y = _config_gameSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].playerSpeed;\r\n    this.health = health;\r\n    this.setInteractiveEntity();\r\n  }\r\n\r\n  setVelocityY(velocity) {\r\n    super.setVelocityY(velocity);\r\n  }\r\n\r\n  setVelocityX(velocity) {\r\n    super.setVelocityX(velocity);\r\n  }\r\n\r\n  explode(canDestroy) {\r\n    super.explode(canDestroy);\r\n  }\r\n\r\n  setInteractiveEntity() {\r\n    super.setInteractiveEntity();\r\n  }\r\n\r\n  shootBullet() {\r\n    const bullet = new _projectiles_Bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, this.x, this.y);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://src/./js/objects/players/Player.js?");

/***/ }),

/***/ "./js/objects/projectiles/Bullet.js":
/*!******************************************!*\
  !*** ./js/objects/projectiles/Bullet.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity.js */ \"./js/objects/Entity.js\");\n/* harmony import */ var _config_gameSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/gameSettings.js */ \"./js/config/gameSettings.js\");\n\r\n\r\nclass Bullet extends _Entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(scene) {\r\n    super(\r\n      scene,\r\n      scene.player.x,\r\n      scene.player.y - 10,\r\n      \"bullet_texture\",\r\n      \"bullet\",\r\n      1\r\n    );\r\n    scene.add.existing(this);\r\n    scene.physics.world.enableBody(this);\r\n    scene.projectiles.add(this);\r\n    this.body.velocity.y = -_config_gameSettings_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bulletSpeed;\r\n\r\n    this.setDepth(1);\r\n  }\r\n\r\n  update() {\r\n    if (this.y < 20) {\r\n      this.destroy();\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bullet);\r\n\n\n//# sourceURL=webpack://src/./js/objects/projectiles/Bullet.js?");

/***/ }),

/***/ "./js/scenes/GameOver.js":
/*!*******************************!*\
  !*** ./js/scenes/GameOver.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./js/config/config.js\");\n\r\n\r\nclass GameOver extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\r\n  constructor() {\r\n    super(\"gameOver\");\r\n  }\r\n\r\n  create() {\r\n    // Add a game over message\r\n    const gameOverText = this.add.text(\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 50,\r\n      \"Game Over\",\r\n      { fontSize: \"32px\", fill: \"#fff\" }\r\n    );\r\n    gameOverText.setOrigin(0.5);\r\n\r\n    // Add instructions to restart the game\r\n    const restartText = this.add.text(\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2,\r\n      \"Press R to Restart\",\r\n      { fontSize: \"24px\", fill: \"#fff\" }\r\n    );\r\n    restartText.setOrigin(0.5);\r\n\r\n    // Add instructions to back to the title screen\r\n    const backToTitleText = this.add.text(\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 + 30,\r\n      \"Press T to TitleScreen\",\r\n      { fontSize: \"24px\", fill: \"#fff\" }\r\n    );\r\n    backToTitleText.setOrigin(0.5);\r\n\r\n    // Define the \"R\" key to restart the game\r\n    const restartKey = this.input.keyboard.addKey(\r\n      (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.R\r\n    );\r\n\r\n    restartKey.on(\"down\", () => {\r\n      this.scene.start(\"playGame\");\r\n      this.scene.stop(\"gameOver\");\r\n    });\r\n\r\n    // Define the \"T\" key to back to the title screen\r\n    const backToTitleKey = this.input.keyboard.addKey(\r\n      (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.T\r\n    );\r\n\r\n    backToTitleKey.on(\"down\", () => {\r\n      this.scene.start(\"bootGame\");\r\n      this.scene.stop(\"gameOver\");\r\n    });\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameOver);\r\n\n\n//# sourceURL=webpack://src/./js/scenes/GameOver.js?");

/***/ }),

/***/ "./js/scenes/LoadingScreen.js":
/*!************************************!*\
  !*** ./js/scenes/LoadingScreen.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./js/config/config.js\");\n\r\n\r\nclass LoadingScreen extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\r\n  constructor() {\r\n    super(\"loadingScreen\");\r\n  }\r\n\r\n  preload() {\r\n    this.load.image(\r\n      \"background_texture\",\r\n      \"assets/images/backgrounds/purple/nebula_1.png\"\r\n    );\r\n\r\n    // Load Player Spritesheet\r\n    this.load.spritesheet({\r\n      key: \"player_texture\",\r\n      url: \"assets/spritesheets/players/planes_03A.png\",\r\n      frameConfig: {\r\n        frameWidth: 96,\r\n        frameHeight: 96,\r\n        startFrame: 0,\r\n        endFrame: 19,\r\n      },\r\n    });\r\n\r\n    // Load Enemy Spritesheets\r\n    this.load.spritesheet({\r\n      key: \"bug1_texture\",\r\n      url: \"assets/spritesheets/enemies/bug_1.png\",\r\n      frameConfig: {\r\n        frameWidth: 64,\r\n        frameHeight: 64,\r\n        startFrame: 0,\r\n        endFrame: 5,\r\n      },\r\n    });\r\n\r\n    this.load.spritesheet({\r\n      key: \"bug3_texture\",\r\n      url: \"assets/spritesheets/enemies/bug_3.png\",\r\n      frameConfig: {\r\n        frameWidth: 64,\r\n        frameHeight: 64,\r\n        startFrame: 0,\r\n        endFrame: 5,\r\n      },\r\n    });\r\n\r\n    this.load.spritesheet({\r\n      key: \"bug5_texture\",\r\n      url: \"assets/spritesheets/enemies/bug_5.png\",\r\n      frameConfig: {\r\n        frameWidth: 64,\r\n        frameHeight: 64,\r\n        startFrame: 0,\r\n        endFrame: 5,\r\n      },\r\n    });\r\n\r\n    // Load Bullet Spritesheet\r\n    this.load.spritesheet({\r\n      key: \"bullet_texture\",\r\n      url: \"assets/spritesheets/vfx/bullet.png\",\r\n      frameConfig: {\r\n        frameWidth: 9,\r\n        frameHeight: 34,\r\n        startFrame: 0,\r\n        endFrame: 0,\r\n      },\r\n    });\r\n\r\n    // Load Effect Spritesheets\r\n    this.load.spritesheet({\r\n      key: \"explosion_texture\",\r\n      url: \"assets/spritesheets/vfx/explosion.png\",\r\n      frameConfig: {\r\n        frameWidth: 48,\r\n        frameHeight: 48,\r\n        startFrame: 0,\r\n        endFrame: 7,\r\n      },\r\n    });\r\n  }\r\n\r\n  create() {\r\n    // Create player animations\r\n    this.anims.create({\r\n      key: \"player_anim\",\r\n      frames: this.anims.generateFrameNumbers(\"player_texture\", {\r\n        start: 0,\r\n        end: 3,\r\n      }),\r\n      frameRate: 30,\r\n      repeat: -1,\r\n    });\r\n\r\n    this.anims.create({\r\n      key: \"player_anim_left\",\r\n      frames: this.anims.generateFrameNumbers(\"player_texture\", {\r\n        start: 4,\r\n        end: 7,\r\n      }),\r\n      frameRate: 30,\r\n      repeat: -1,\r\n    });\r\n\r\n    this.anims.create({\r\n      key: \"player_anim_left_diagonal\",\r\n      frames: this.anims.generateFrameNumbers(\"player_texture\", {\r\n        start: 8,\r\n        end: 11,\r\n      }),\r\n      frameRate: 30,\r\n      repeat: -1,\r\n    });\r\n\r\n    this.anims.create({\r\n      key: \"player_anim_right\",\r\n      frames: this.anims.generateFrameNumbers(\"player_texture\", {\r\n        start: 12,\r\n        end: 15,\r\n      }),\r\n      frameRate: 30,\r\n      repeat: -1,\r\n    });\r\n\r\n    this.anims.create({\r\n      key: \"player_anim_right_diagonal\",\r\n      frames: this.anims.generateFrameNumbers(\"player_texture\", {\r\n        start: 16,\r\n        end: 19,\r\n      }),\r\n      frameRate: 30,\r\n      repeat: -1,\r\n    });\r\n\r\n    // Create enemy animations\r\n    this.anims.create({\r\n      key: \"bug1_anim\",\r\n      frames: this.anims.generateFrameNumbers(\"bug1_texture\", {\r\n        start: 0,\r\n        end: 5,\r\n      }),\r\n      frameRate: 20,\r\n      repeat: -1,\r\n    });\r\n\r\n    this.anims.create({\r\n      key: \"bug3_anim\",\r\n      frames: this.anims.generateFrameNumbers(\"bug3_texture\", {\r\n        start: 0,\r\n        end: 5,\r\n      }),\r\n      frameRate: 20,\r\n      repeat: -1,\r\n    });\r\n\r\n    this.anims.create({\r\n      key: \"bug5_anim\",\r\n      frames: this.anims.generateFrameNumbers(\"bug5_texture\", {\r\n        start: 0,\r\n        end: 5,\r\n      }),\r\n      frameRate: 20,\r\n      repeat: -1,\r\n    });\r\n\r\n    // Create explosion animations\r\n    this.anims.create({\r\n      key: \"explosion_anim\",\r\n      frames: this.anims.generateFrameNumbers(\"explosion_texture\", {\r\n        start: 0,\r\n        end: 7,\r\n      }),\r\n      frameRate: 20,\r\n      repeat: 0,\r\n      hideOnComplete: true,\r\n    });\r\n\r\n    const loadingText = this.add.text(\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 50,\r\n      \"LOADING\",\r\n      { fontSize: \"32px\", fill: \"#fff\" }\r\n    );\r\n    loadingText.setOrigin(0.5);\r\n\r\n    this.time.delayedCall(1000, () => {\r\n      this.scene.start(\"playGame\");\r\n    });\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingScreen);\r\n\n\n//# sourceURL=webpack://src/./js/scenes/LoadingScreen.js?");

/***/ }),

/***/ "./js/scenes/PauseScreen.js":
/*!**********************************!*\
  !*** ./js/scenes/PauseScreen.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n\r\n\r\nclass PauseScreen extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\r\n  constructor() {\r\n    super(\"pauseScreen\");\r\n  }\r\n\r\n  create() {\r\n    const pauseText = this.add.text(\r\n      _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\r\n      _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 50,\r\n      \"Pause\",\r\n      { fontSize: \"32px\", fill: \"#fff\" }\r\n    );\r\n    pauseText.setOrigin(0.5);\r\n\r\n    // Add instructions to restart the game\r\n    const unpauseText = this.add.text(\r\n      _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\r\n      _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2,\r\n      \"Press P to Unpause\",\r\n      { fontSize: \"24px\", fill: \"#fff\" }\r\n    );\r\n    unpauseText.setOrigin(0.5);\r\n\r\n    // Add instructions to back to the title screen\r\n    const backToTitleText = this.add.text(\r\n      _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\r\n      _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 + 30,\r\n      \"Press T to TitleScreen\",\r\n      { fontSize: \"24px\", fill: \"#fff\" }\r\n    );\r\n    backToTitleText.setOrigin(0.5);\r\n\r\n    // Define the \"P\" key to unpause the game\r\n    const unpauseKey = this.input.keyboard.addKey(\r\n      (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.P\r\n    );\r\n\r\n    // Define the \"T\" key to back to the title screen\r\n    const backToTitleKey = this.input.keyboard.addKey(\r\n      (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.T\r\n    );\r\n\r\n    unpauseKey.on(\"down\", () => {\r\n      _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pauseGame = false;\r\n      this.scene.resume(\"playGame\");\r\n      this.scene.stop();\r\n    });\r\n\r\n    backToTitleKey.on(\"down\", () => {\r\n      this.scene.start(\"bootGame\");\r\n      this.scene.stop(\"playGame\");\r\n      this.scene.stop(\"pauseScreen\");\r\n    });\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PauseScreen);\r\n\n\n//# sourceURL=webpack://src/./js/scenes/PauseScreen.js?");

/***/ }),

/***/ "./js/scenes/PlayingScreen.js":
/*!************************************!*\
  !*** ./js/scenes/PlayingScreen.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/gameSettings */ \"./js/config/gameSettings.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n/* harmony import */ var _objects_projectiles_Bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/projectiles/Bullet */ \"./js/objects/projectiles/Bullet.js\");\n/* harmony import */ var _objects_players_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../objects/players/Player */ \"./js/objects/players/Player.js\");\n/* harmony import */ var _objects_enemies_Bug1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../objects/enemies/Bug1 */ \"./js/objects/enemies/Bug1.js\");\n/* harmony import */ var _objects_enemies_Bug3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../objects/enemies/Bug3 */ \"./js/objects/enemies/Bug3.js\");\n/* harmony import */ var _objects_enemies_Bug5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../objects/enemies/Bug5 */ \"./js/objects/enemies/Bug5.js\");\n/* harmony import */ var _manager_enemyManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../manager/enemyManager */ \"./js/manager/enemyManager.js\");\n/* harmony import */ var _manager_playerManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../manager/playerManager */ \"./js/manager/playerManager.js\");\n/* harmony import */ var _manager_collideManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../manager/collideManager */ \"./js/manager/collideManager.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst BACKGROUND_SCROLL_SPEED = 0.5;\r\nclass PlayingScreen extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\r\n  constructor() {\r\n    super(\"playGame\");\r\n  }\r\n\r\n  create() {\r\n    this.background = this.add.tileSprite(\r\n      0,\r\n      0,\r\n      _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].width,\r\n      _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].height,\r\n      \"background_texture\"\r\n    );\r\n    this.background.setOrigin(0, 0);\r\n\r\n    // Spawn the Player\r\n    this.player = new _objects_players_Player__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].width / 2, _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].height - 100, 100);\r\n    this.player.play(\"player_anim\");\r\n\r\n    // Spawn the Enemies\r\n    this.bug3_1 = new _objects_enemies_Bug3__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, 150, 200, 100);\r\n    this.bug3_1.play(\"bug3_anim\");\r\n    this.bug3_2 = new _objects_enemies_Bug3__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, 100, 100, 100);\r\n    this.bug3_2.play(\"bug3_anim\");\r\n\r\n    this.bug5 = new _objects_enemies_Bug5__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, 300, 80, 100);\r\n    this.bug5.play(\"bug5_anim\");\r\n\r\n    this.bug1 = new _objects_enemies_Bug1__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 200, 180, 100);\r\n    this.bug1.play(\"bug1_anim\");\r\n    // Create managers\r\n    this.playerManager = new _manager_playerManager__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this, this.player);\r\n    this.enemyManager = new _manager_enemyManager__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this);\r\n    // this.enemyManager.addEnemy(this.bug3_1);\r\n    // this.enemyManager.addEnemy(this.bug3_2);\r\n    // this.enemyManager.addEnemy(this.bug5);\r\n    // this.enemyManager.addEnemy(this.bug1);\r\n\r\n    const centerX = _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].width / 2;\r\n    const centerY = _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].height / 2; // You can adjust this as needed\r\n    const radius = 150; // Adjust the radius as needed\r\n    const numBugs = 8; // Number of bugs in the circle\r\n\r\n    this.enemyManager.spawnCircleOfBugs(centerX, centerY, radius, numBugs);\r\n\r\n    // Create keyboard inputs\r\n    this.spacebar = this.input.keyboard.addKey(\r\n      (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.SPACE\r\n    );\r\n    this.P = this.input.keyboard.addKey((phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.P);\r\n\r\n    // Create a group to manage bullets\r\n    this.projectiles = this.physics.add.group({\r\n      classType: _objects_projectiles_Bullet__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n      runChildUpdate: true,\r\n    });\r\n\r\n    // Create a manager to handle collisions\r\n    this.collideManager = new _manager_collideManager__WEBPACK_IMPORTED_MODULE_10__[\"default\"](\r\n      this,\r\n      this.player,\r\n      this.enemyManager.enemies\r\n    );\r\n  }\r\n\r\n  update() {\r\n    // Pause the game\r\n    if (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input.Keyboard.JustDown(this.P)) {\r\n      _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pauseGame = !_config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pauseGame;\r\n      if (_config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pauseGame === true) {\r\n        this.scene.launch(\"pauseScreen\");\r\n        this.scene.pause();\r\n      }\r\n    }\r\n\r\n    // Move the background\r\n    this.background.tilePositionY -= BACKGROUND_SCROLL_SPEED;\r\n\r\n    // Move the player and enemies\r\n    this.playerManager.movePlayer();\r\n    this.enemyManager.moveEnemies();\r\n\r\n    if (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input.Keyboard.JustDown(this.spacebar)) {\r\n      this.player.shootBullet();\r\n    }\r\n\r\n    this.projectiles.children.iterate((bullet) => {\r\n      bullet.update();\r\n    });\r\n  }\r\n\r\n  gameOver() {\r\n    this.scene.start(\"gameOver\");\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayingScreen);\r\n\n\n//# sourceURL=webpack://src/./js/scenes/PlayingScreen.js?");

/***/ }),

/***/ "./js/scenes/TitleScreen.js":
/*!**********************************!*\
  !*** ./js/scenes/TitleScreen.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./js/config/config.js\");\n\r\n\r\nclass TitleScreen extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\r\n  constructor() {\r\n    super(\"bootGame\");\r\n  }\r\n\r\n  preload() {\r\n    this.load.image(\r\n      \"background\",\r\n      \"assets/images/backgrounds/purple/nebula_3.png\"\r\n    );\r\n\r\n    this.load.spritesheet({\r\n      key: \"button_play\",\r\n      url: \"assets/gui/button.png\",\r\n      frameConfig: {\r\n        frameWidth: 93,\r\n        frameHeight: 28,\r\n        startFrame: 2,\r\n        endFrame: 2,\r\n      },\r\n    });\r\n\r\n    this.load.spritesheet({\r\n      key: \"button_hover\",\r\n      url: \"assets/gui/button_hover.png\",\r\n      frameConfig: {\r\n        frameWidth: 93,\r\n        frameHeight: 28,\r\n        startFrame: 2,\r\n        endFrame: 2,\r\n      },\r\n    });\r\n  }\r\n\r\n  create() {\r\n    // Create Background\r\n    this.background = this.add.tileSprite(\r\n      0,\r\n      0,\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width,\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height,\r\n      \"background\"\r\n    );\r\n    this.background.setOrigin(0, 0);\r\n\r\n    const titleText = \"SPACE GUARDIAN\";\r\n\r\n    // Create \"SPACE\" text\r\n    const spaceText = this.add.text(\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 100,\r\n      \"SPACE\",\r\n      {\r\n        fontFamily: \"Pixelify Sans\",\r\n        fontSize: \"64px\",\r\n        color: \"#FF454D\", // Set the color for \"SPACE\"\r\n        align: \"center\",\r\n      }\r\n    );\r\n    spaceText.setOrigin(0.5);\r\n\r\n    // Create \"GUARDIAN\" text with each letter in a different color\r\n    const guardianText = this.add.text(\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 30,\r\n      \"Guardian\",\r\n      {\r\n        fontFamily: \"Pixelify Sans\",\r\n        color: \"#FF454D\",\r\n        fontSize: \"64px\",\r\n        align: \"center\",\r\n      }\r\n    );\r\n    guardianText.setOrigin(0.5);\r\n\r\n    // Tween animation for the rainbow effect on \"GUARDIAN\"\r\n    this.tweens.add({\r\n      targets: guardianText,\r\n      duration: 1000, // Adjust the duration as needed\r\n      ease: \"Sine.easeInOut\",\r\n      repeat: -1,\r\n      yoyo: true,\r\n      alpha: 0.2, // Optional: You can adjust the alpha for a fading effect\r\n    });\r\n\r\n    // Tween animation for the rainbow effect on \"SPACE\"\r\n    this.tweens.add({\r\n      targets: spaceText,\r\n      duration: 1000, // Adjust the duration as needed\r\n      ease: \"Sine.easeInOut\",\r\n      repeat: -1,\r\n      yoyo: true,\r\n      alpha: 0.2, // Optional: You can adjust the alpha for a fading effect\r\n    });\r\n\r\n    // Create Play Button\r\n    this.button_play = this.add.sprite(\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\r\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 + 60,\r\n      \"button_play\"\r\n    );\r\n    this.button_play.setInteractive();\r\n    this.button_play.on(\"pointerdown\", () => {\r\n      this.scene.start(\"loadingScreen\");\r\n    });\r\n    this.button_play.on(\"pointerover\", () => {\r\n      this.button_play.setTexture(\"button_hover\");\r\n    });\r\n    this.button_play.on(\"pointerout\", () => {\r\n      this.button_play.setTexture(\"button_play\");\r\n    });\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleScreen);\r\n\n\n//# sourceURL=webpack://src/./js/scenes/TitleScreen.js?");

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