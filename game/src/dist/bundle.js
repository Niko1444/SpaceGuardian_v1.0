/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/config/config.js */ \"./js/config/config.js\");\n// game.js\n\n\n\n// Create a new Phaser game instance\nconst game = new (phaser__WEBPACK_IMPORTED_MODULE_0___default().Game)(_js_config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack://src/./game.js?");
  
  /***/ }),
  
  /***/ "./js/config/config.js":
  /*!*****************************!*\
    !*** ./js/config/config.js ***!
    \*****************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scenes_TitleScreen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scenes/TitleScreen.js */ \"./js/scenes/TitleScreen.js\");\n/* harmony import */ var _scenes_LoadingScreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scenes/LoadingScreen.js */ \"./js/scenes/LoadingScreen.js\");\n/* harmony import */ var _scenes_PlayingScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scenes/PlayingScreen.js */ \"./js/scenes/PlayingScreen.js\");\n/* harmony import */ var _scenes_GameOver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scenes/GameOver.js */ \"./js/scenes/GameOver.js\");\n/* harmony import */ var _scenes_PauseScreen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scenes/PauseScreen.js */ \"./js/scenes/PauseScreen.js\");\n/* harmony import */ var _scenes_ChoosePLayer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scenes/ChoosePLayer.js */ \"./js/scenes/ChoosePLayer.js\");\n/* harmony import */ var _scenes_ChoosePLayer_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scenes_ChoosePLayer_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst rem =\n  (parseFloat(getComputedStyle(document.documentElement).fontSize) * 62.5) /\n  100;\n\nconst gameWidth = 40 * rem;\nconst gameHeight = 75 * rem;\n\nconst config = {\n  pauseGame: false,\n  width: gameWidth,\n  height: gameHeight,\n  backgroundColor: 0x000000,\n  scene: [_scenes_TitleScreen_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _scenes_LoadingScreen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scenes_PlayingScreen_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _scenes_GameOver_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _scenes_PauseScreen_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (_scenes_ChoosePLayer_js__WEBPACK_IMPORTED_MODULE_5___default())],\n  pixelArt: true,\n  physics: {\n    default: \"arcade\",\n    arcade: {\n      debug: true,\n    },\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n\n//# sourceURL=webpack://src/./js/config/config.js?");
  
  /***/ }),
  
  /***/ "./js/config/gameSettings.js":
  /*!***********************************!*\
    !*** ./js/config/gameSettings.js ***!
    \***********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst gameSettings = {\n  playerSpeed: 250,\n  enemySpeed: 200,\n  bulletSpeed: 400,\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameSettings);\n\n\n//# sourceURL=webpack://src/./js/config/gameSettings.js?");
  
  /***/ }),
  
  /***/ "./js/manager/KeyboardManager.js":
  /*!***************************************!*\
    !*** ./js/manager/KeyboardManager.js ***!
    \***************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scenes_PauseScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scenes/PauseScreen */ \"./js/scenes/PauseScreen.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n\n\n\n\nclass KeyboardManager {\n  constructor(scene) {\n    this.scene = scene;\n\n    // Create A,W,S,D key\n    this.cursorKeys = scene.input.keyboard.createCursorKeys();\n\n    // Store the keys in a property\n    this.keys = this.scene.input.keyboard.addKeys({\n      spacebar: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.SPACE,\n      P: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.P,\n      T: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.T,\n      R: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.R\n      // Add more keys as needed\n    });\n  }\n\n  controlGame(){\n    \n  }\n\n  pauseGame() {\n    // Access keys using this.keys.spacebar and this.keys.P\n    if (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input.Keyboard.JustDown(this.keys.P)) {\n      // Assuming config.pauseGame is a global variable\n      _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pauseGame = !_config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pauseGame;\n\n      if (_config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pauseGame === true) {\n        this.scene.scene.launch(\"pauseScreen\");\n        this.scene.scene.pause();\n      }\n    }\n  }\n\n  unpauseGame() {\n    this.keys.P.on(\"down\", () => {\n      _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pauseGame = false;\n      this.scene.scene.resume(\"playGame\");\n      this.scene.scene.stop();\n    });\n  }\n\n  titleScreen() {\n    this.keys.T.on(\"down\", () => {\n      this.scene.scene.start(\"bootGame\");\n      this.scene.scene.stop(\"playGame\");\n      this.scene.scene.stop(\"pauseScreen\");\n    });\n  }\n\n  restartGame(){\n    this.keys.R.on(\"down\", () => {\n      this.scene.scene.start(\"playGame\");\n      this.scene.scene.stop(\"gameOver\");\n    });\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyboardManager);\n\n\n//# sourceURL=webpack://src/./js/manager/KeyboardManager.js?");
  
  /***/ }),
  
  /***/ "./js/manager/collideManager.js":
  /*!**************************************!*\
    !*** ./js/manager/collideManager.js ***!
    \**************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass CollideManager {\n  constructor(scene, player, enemies) {\n    this.scene = scene;\n    this.player = player;\n    this.enemies = enemies;\n\n    // Add overlap between bullets and enemies\n    this.scene.physics.add.overlap(\n      this.scene.projectiles,\n      this.enemies,\n      this.bulletHitEnemy,\n      null,\n      this\n    );\n\n    // Add overlap between player and enemies\n    this.scene.physics.add.overlap(\n      this.player,\n      this.enemies,\n      this.playerHitEnemy,\n      null,\n      this\n    );\n  }\n\n  bulletHitEnemy(enemy, bullet) {\n    // Enemy takes damage\n    enemy.takeDamage(bullet.damage);\n\n    // Destroy the bullet\n    bullet.destroy();\n  }\n\n  playerHitEnemy(player, enemy) {\n    // Player takes damage\n    player.takeDamage(enemy.damage);\n    enemy.takeDamage(player.damage);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollideManager);\n\n\n//# sourceURL=webpack://src/./js/manager/collideManager.js?");
  
  /***/ }),
  
  /***/ "./js/manager/enemyManager.js":
  /*!************************************!*\
    !*** ./js/manager/enemyManager.js ***!
    \************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n\n\n\nclass EnemyManager {\n  constructor(scene) {\n    this.scene = scene;\n    this.enemies = [];\n    this.respawnDelays = []; // Array to store individual respawn delays\n    this.lastRespawnTimes = []; // Array to store individual last respawn times\n\n    // Set initial random delays and times for each enemy\n    for (let i = 0; i < this.enemies.length; i++) {\n      this.respawnDelays[i] = phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(2000, 5000);\n      this.lastRespawnTimes[i] = 0;\n    }\n  }\n\n  moveEnemies(time) {\n    // Move enemies\n    this.enemies.forEach((enemy, index) => {\n      if (enemy.y >= _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height) {\n        const currentTime = this.scene.time.now;\n\n        // Check if enough time has passed for the next respawn for this specific enemy\n        if (\n          currentTime - this.lastRespawnTimes[index] >=\n          this.respawnDelays[index]\n        ) {\n          enemy.y = 0;\n          enemy.x = phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(0, _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width - 48);\n\n          // Set a new random delay for the next respawn for this specific enemy\n          this.respawnDelays[index] = phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(5000, 7000);\n          this.lastRespawnTimes[index] = currentTime;\n        }\n      }\n    });\n  }\n\n  addEnemy(enemy) {\n    // When adding a new enemy, initialize its random delay and last respawn time\n    this.enemies.push(enemy);\n    this.respawnDelays.push(phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(5000, 7000));\n    this.lastRespawnTimes.push(0);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnemyManager);\n\n\n//# sourceURL=webpack://src/./js/manager/enemyManager.js?");
  
  /***/ }),
  
  /***/ "./js/manager/playerManager.js":
  /*!*************************************!*\
    !*** ./js/manager/playerManager.js ***!
    \*************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/gameSettings */ \"./js/config/gameSettings.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n\n\n\n\nclass PlayerManager {\n  constructor(scene, player, selectedPlayerIndex) {\n    this.scene = scene;\n    this.player = player;\n    this.cursorKeys = scene.input.keyboard.createCursorKeys();\n    this.selectedPlayerIndex = selectedPlayerIndex;\n  }\n\n  movePlayer() {\n    const currentTime = this.scene.time.now;\n\n    let xVelocity = 0;\n    let yVelocity = 0;\n    let animationKey = \"player_anim\";\n\n    if (this.cursorKeys.up.isDown) {\n      yVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed;\n    } else if (this.cursorKeys.down.isDown) {\n      yVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed;\n    }\n\n    if (this.cursorKeys.left.isDown) {\n      xVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed;\n      animationKey = \"player_anim_left\";\n    } else if (this.cursorKeys.right.isDown) {\n      xVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed;\n      animationKey = \"player_anim_right\";\n    }\n\n    // Diagonal movement\n    if (this.cursorKeys.up.isDown) {\n      if (this.cursorKeys.left.isDown) {\n        // Diagonal movement: up + left\n        xVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        yVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        animationKey = \"player_anim_left_diagonal\";\n      } else if (this.cursorKeys.right.isDown) {\n        // Diagonal movement: up + right\n        xVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        yVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        animationKey = \"player_anim_right_diagonal\";\n      }\n    }\n\n    // Diagonal movement\n    if (this.cursorKeys.down.isDown) {\n      if (this.cursorKeys.left.isDown) {\n        // Diagonal movement: down + left\n        xVelocity = -_config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        yVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        animationKey = \"player_anim_left_diagonal\";\n      } else if (this.cursorKeys.right.isDown) {\n        // Diagonal movement: down + right\n        xVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        yVelocity = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerSpeed * 0.7071;\n        animationKey = \"player_anim_right_diagonal\";\n      }\n    }\n\n    // Set velocities\n    this.player.setVelocityX(xVelocity);\n    this.player.setVelocityY(yVelocity);\n\n    // Play animation based on the velocities\n    if (this.player.anims.currentAnim.key !== animationKey) {\n      this.player.play(animationKey);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerManager);\n\n\n//# sourceURL=webpack://src/./js/manager/playerManager.js?");
  
  /***/ }),
  
  /***/ "./js/manager/uiManager.js":
  /*!*********************************!*\
    !*** ./js/manager/uiManager.js ***!
    \*********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n/* harmony import */ var _scenes_PlayingScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scenes/PlayingScreen */ \"./js/scenes/PlayingScreen.js\");\n/* harmony import */ var _scenes_PauseScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scenes/PauseScreen */ \"./js/scenes/PauseScreen.js\");\n/* harmony import */ var _scenes_GameOver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scenes/GameOver */ \"./js/scenes/GameOver.js\");\n/* harmony import */ var _scenes_LoadingScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scenes/LoadingScreen */ \"./js/scenes/LoadingScreen.js\");\n\n\n\n\n\n\n\nclass GuiManager{\n    constructor(scene) {\n        this.scene = scene;\n        this.loadingSceneStarted = false;\n        this.createGui();\n    }\n\n    createGui() {\n        // Additional GUI elements specific to each scene\n        if (this.scene instanceof _scenes_PlayingScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n            this.createPlayingGui();\n        } else if (this.scene instanceof _scenes_PauseScreen__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n            this.createPauseGui();\n        } else if (this.scene instanceof _scenes_GameOver__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) {\n            this.createGameOverGui();\n        } \n    }\n\n    createPlayingGui(){\n        this.createBackground(\"background_texture\");\n    }\n\n    createPauseGui(){\n\n        this.createSimpleText(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 50,\"Pause\",\"32px\",\"#fff\",0.5)\n\n        this.createSimpleText(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2,\"Press P to Unpause\",\"24px\",\"#fff\",0.5)\n\n        this.createSimpleText(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 + 30,\"Press T to TitleScreen\",\"24px\",\"#fff\",0.5)\n      \n    }\n\n    createGameOverGui(){\n\n        this.createSimpleText(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 50,\"Game Over\",\"32px\",\"#fff\",0.5)\n      \n        this.createSimpleText(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2,\"Press R to Restart\",\"24px\",\"#fff\",0.5)\n\n        this.createSimpleText(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 + 30,\"Press T to TitleScreen\",\"24px\",\"#fff\",0.5)\n    }\n\n    createTitleGui(){\n        // Add later\n    }\n\n    createSimpleText(x,y,key,font,color,origin){\n        const test = this.scene.add.text(\n            x,\n            y,\n            key,\n            { fontSize: font, fill: color }\n          );\n          test.setOrigin(origin);\n    }\n\n    createBackground(key){\n        this.scene.background = this.scene.add.tileSprite(\n            0,\n            0,\n            _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width,\n            _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height,\n            key\n          );\n          this.scene.background.setOrigin(0, 0);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GuiManager);\n\n//# sourceURL=webpack://src/./js/manager/uiManager.js?");
  
  /***/ }),
  
  /***/ "./js/objects/Entity.js":
  /*!******************************!*\
    !*** ./js/objects/Entity.js ***!
    \******************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./js/config/config.js\");\n/* harmony import */ var _config_gameSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/gameSettings.js */ \"./js/config/gameSettings.js\");\n/* harmony import */ var _ui_DamageNumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/DamageNumber.js */ \"./js/objects/ui/DamageNumber.js\");\n/* harmony import */ var _ui_HPBar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/HPBar.js */ \"./js/objects/ui/HPBar.js\");\n\n\n\n\n\nclass Entity extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().GameObjects).Sprite {\n  constructor(scene, x, y, key, health) {\n    super(scene, x, y, key);\n    this.scene = scene;\n    this.health = health;\n    this.maxHealth = health;\n    this.setData(\"isDead\", false);\n    this.hpBarWidth = 20;\n    this.hpBarHeight = 5;\n\n    this.scene.physics.world.enableBody(this, 0);\n    this.scene.add.existing(this);\n  }\n\n  updateHealthBarValue(health, maxHealth) {\n    this.hpBar.setValue(this.health, this.maxHealth);\n  }\n\n  updateHealthBarPosition() {\n    this.hpBar.x = this.x - this.hpBarWidth / 2;\n    this.hpBar.y = this.y + 30;\n  }\n\n  explode(canDestroy) {\n    if (!this.getData(\"isDead\")) {\n      this.setTexture(\"explosion_texture\");\n      this.play(\"explosion_anim\");\n\n      if (this.shootTimer !== undefined) {\n        if (this.shootTimer) {\n          this.shootTimer.remove(false);\n        }\n      }\n\n      this.setAngle(0);\n      this.body.setVelocity(0, 0);\n\n      this.on(\n        \"animationcomplete\",\n        function () {\n          if (canDestroy) {\n            this.destroy();\n          } else {\n            this.setVisible(false);\n          }\n        },\n        this\n      );\n      this.setData(\"isDead\", true);\n    }\n  }\n\n  setInteractiveEntity() {\n    this.setInteractive();\n  }\n\n  setVelocityY(velocity) {\n    this.body.setVelocityY(velocity);\n  }\n\n  setVelocityX(velocity) {\n    this.body.setVelocityX(velocity);\n  }\n\n  setPhysics(scene) {\n    scene.add.existing(this);\n    scene.physics.world.enableBody(this);\n    this.body.setCollideWorldBounds(true);\n  }\n\n  takeDamage(damage) {\n    this.health -= damage;\n    new _ui_DamageNumber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.scene, this.x, this.y, damage);\n\n    this.updateHealthBarValue();\n\n    if (this.health <= 0) {\n      this.explode(true);\n      this.hpBar.destroy();\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entity);\n\n\n//# sourceURL=webpack://src/./js/objects/Entity.js?");
  
  /***/ }),
  
  /***/ "./js/objects/enemies/Bug1.js":
  /*!************************************!*\
    !*** ./js/objects/enemies/Bug1.js ***!
    \************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./js/objects/Entity.js\");\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/gameSettings */ \"./js/config/gameSettings.js\");\n/* harmony import */ var _ui_HPBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/HPBar */ \"./js/objects/ui/HPBar.js\");\n\n\n\n\nclass Bug1 extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(scene, x, y, health) {\n    super(scene, x, y, \"bug1_texture\", health);\n    this.body.velocity.y = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].enemySpeed;\n    this.health = health;\n    this.maxHealth = health;\n    this.hpBarWidth = 20;\n    this.hpBarHeight = 5;\n    this.damage = 100;\n    this.setInteractiveEntity();\n\n    this.hpBar = new _ui_HPBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n      scene,\n      this.x,\n      this.y,\n      this.hpBarWidth,\n      this.hpBarHeight,\n      this.health,\n      this.maxHealth\n    );\n    this.scene.add.existing(this.hpBar);\n  }\n\n  onDestroy() {\n    super.onDestroy();\n  }\n\n  setVelocityY(velocity) {\n    super.setVelocityY(velocity);\n  }\n\n  setVelocityX(velocity) {\n    super.setVelocityX(velocity);\n  }\n\n  setInteractiveEntity() {\n    super.setInteractiveEntity();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bug1);\n\n\n//# sourceURL=webpack://src/./js/objects/enemies/Bug1.js?");
  
  /***/ }),
  
  /***/ "./js/objects/enemies/Bug3.js":
  /*!************************************!*\
    !*** ./js/objects/enemies/Bug3.js ***!
    \************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./js/objects/Entity.js\");\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/gameSettings */ \"./js/config/gameSettings.js\");\n/* harmony import */ var _ui_HPBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/HPBar */ \"./js/objects/ui/HPBar.js\");\n\n\n\n\nclass Bug3 extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(scene, x, y, health) {\n    super(scene, x, y, \"bug3_texture\", health);\n    this.body.velocity.y = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].enemySpeed;\n    this.health = health;\n    this.maxHealth = health;\n    this.hpBarWidth = 20;\n    this.hpBarHeight = 5;\n    this.damage = 100;\n    this.setInteractiveEntity();\n\n    this.hpBar = new _ui_HPBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n      scene,\n      this.x,\n      this.y,\n      this.hpBarWidth,\n      this.hpBarHeight,\n      this.health,\n      this.maxHealth\n    );\n    this.scene.add.existing(this.hpBar);\n  }\n\n  onDestroy() {\n    super.onDestroy();\n  }\n\n  setVelocityY(velocity) {\n    super.setVelocityY(velocity);\n  }\n\n  setVelocityX(velocity) {\n    super.setVelocityX(velocity);\n  }\n\n  setInteractiveEntity() {\n    super.setInteractiveEntity();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bug3);\n\n\n//# sourceURL=webpack://src/./js/objects/enemies/Bug3.js?");
  
  /***/ }),
  
  /***/ "./js/objects/enemies/Bug5.js":
  /*!************************************!*\
    !*** ./js/objects/enemies/Bug5.js ***!
    \************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./js/objects/Entity.js\");\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/gameSettings */ \"./js/config/gameSettings.js\");\n/* harmony import */ var _ui_HPBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/HPBar */ \"./js/objects/ui/HPBar.js\");\n\n\n\n\nclass Bug5 extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(scene, x, y, health) {\n    super(scene, x, y, \"bug5_texture\", health);\n    this.body.velocity.y = _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__[\"default\"].enemySpeed;\n    this.health = health;\n    this.maxHealth = health;\n    this.damage = 100;\n    this.hpBarWidth = 20;\n    this.hpBarHeight = 5;\n    this.setInteractiveEntity();\n\n    this.hpBar = new _ui_HPBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n      scene,\n      this.x,\n      this.y,\n      this.hpBarWidth,\n      this.hpBarHeight,\n      this.health,\n      this.maxHealth\n    );\n    this.scene.add.existing(this.hpBar);\n  }\n\n  onDestroy() {\n    super.onDestroy();\n  }\n\n  setVelocityY(velocity) {\n    super.setVelocityY(velocity);\n  }\n\n  setVelocityX(velocity) {\n    super.setVelocityX(velocity);\n  }\n\n  setInteractiveEntity() {\n    super.setInteractiveEntity();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bug5);\n\n\n//# sourceURL=webpack://src/./js/objects/enemies/Bug5.js?");
  
  /***/ }),
  
  /***/ "./js/objects/players/Player.js":
  /*!**************************************!*\
    !*** ./js/objects/players/Player.js ***!
    \**************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ \"./js/objects/Entity.js\");\n/* harmony import */ var _projectiles_Bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projectiles/Bullet */ \"./js/objects/projectiles/Bullet.js\");\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/gameSettings */ \"./js/config/gameSettings.js\");\n/* harmony import */ var _ui_HPBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/HPBar */ \"./js/objects/ui/HPBar.js\");\n\n\n\n\n\nclass Player extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(scene, x, y, key, health) {\n    super(scene, x, y, key, health);\n    this.body.velocity.y = _config_gameSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].playerSpeed;\n    this.health = health;\n    this.maxHealth = health;\n    this.damage = 100;\n    this.hpBarWidth = 50;\n    this.hpBarHeight = 5;\n\n    this.setInteractiveEntity();\n    this.setPhysics(scene);\n    this.body.setSize(48, 48);\n\n    this.hpBar = new _ui_HPBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n      scene,\n      this.x,\n      this.y - 30,\n      this.hpBarWidth,\n      this.hpBarHeight,\n      this.health,\n      this.maxHealth\n    );\n    this.scene.add.existing(this.hpBar);\n    this.key = key;\n  }\n\n  setVelocityY(velocity) {\n    super.setVelocityY(velocity);\n  }\n\n  setVelocityX(velocity) {\n    super.setVelocityX(velocity);\n  }\n\n  explode(canDestroy) {\n    super.explode(canDestroy);\n  }\n\n  setInteractiveEntity() {\n    super.setInteractiveEntity();\n  }\n\n  shootBullet() {\n    const bullet = new _projectiles_Bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, this.x, this.y);\n  }\n\n  setPhysics(scene) {\n    super.setPhysics(scene);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://src/./js/objects/players/Player.js?");
  
  /***/ }),
  
  /***/ "./js/objects/projectiles/Bullet.js":
  /*!******************************************!*\
    !*** ./js/objects/projectiles/Bullet.js ***!
    \******************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity.js */ \"./js/objects/Entity.js\");\n/* harmony import */ var _config_gameSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/gameSettings.js */ \"./js/config/gameSettings.js\");\n\n\nclass Bullet extends _Entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(scene) {\n    super(\n      scene,\n      scene.player.x,\n      scene.player.y - 10,\n      \"bullet_texture\",\n      \"bullet\",\n      1\n    );\n    scene.add.existing(this);\n    scene.physics.world.enableBody(this);\n    scene.projectiles.add(this);\n    this.body.velocity.y = -_config_gameSettings_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bulletSpeed;\n    this.damage = 10;\n    this.setDepth(1);\n  }\n\n  update() {\n    if (this.y < 20 || !this.active) {\n      this.destroy();\n    }\n  }\n\n  destroy() {\n    // Call the parent destroy method if needed\n    super.destroy();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bullet);\n\n\n//# sourceURL=webpack://src/./js/objects/projectiles/Bullet.js?");
  
  /***/ }),
  
  /***/ "./js/objects/ui/DamageNumber.js":
  /*!***************************************!*\
    !*** ./js/objects/ui/DamageNumber.js ***!
    \***************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass DamageNumber extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().GameObjects).Text {\n  constructor(scene, x, y, damage) {\n    super(scene, x, y, damage.toString(), {\n      fontFamily: \"Pixelify Sans\",\n      fontSize: 14,\n      color: \"#ff0000\",\n    });\n    scene.add.existing(this);\n\n    this.setDepth(2);\n\n    // Tween for animation\n    scene.tweens.add({\n      targets: this,\n      y: y - 20,\n      alpha: 0,\n      duration: 1000,\n      ease: \"Linear\",\n      onComplete: () => {\n        this.destroy();\n      },\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DamageNumber);\n\n\n//# sourceURL=webpack://src/./js/objects/ui/DamageNumber.js?");
  
  /***/ }),
  
  /***/ "./js/objects/ui/HPBar.js":
  /*!********************************!*\
    !*** ./js/objects/ui/HPBar.js ***!
    \********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass HPBar extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().GameObjects).Container {\n  constructor(scene, x, y, width, height, value, max) {\n    super(scene, x, y);\n\n    // Create the background bar\n    this.backgroundBar = new (phaser__WEBPACK_IMPORTED_MODULE_0___default().GameObjects).Graphics(scene);\n    this.backgroundBar.fillStyle(0x000000, 0.5);\n    this.backgroundBar.fillRect(0, 0, width, height);\n    this.add(this.backgroundBar);\n\n    // Create the foreground bar (HP bar)\n    this.foregroundBar = new (phaser__WEBPACK_IMPORTED_MODULE_0___default().GameObjects).Graphics(scene);\n    this.foregroundBar.fillStyle(0xff0000, 1);\n    this.foregroundBar.fillRect(0, 0, width, height);\n    this.add(this.foregroundBar);\n\n    // Set the initial value and max value\n    this.setValue(value, max);\n\n    // Add the container to the scene\n    scene.add.existing(this);\n  }\n\n  setValue(value, max) {\n    // Update the bar's foreground width based on the value\n    this.foregroundBar.scaleX = value / max;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HPBar);\n\n\n//# sourceURL=webpack://src/./js/objects/ui/HPBar.js?");
  
  /***/ }),
  
  /***/ "./js/scenes/ChoosePLayer.js":
  /*!***********************************!*\
    !*** ./js/scenes/ChoosePLayer.js ***!
    \***********************************/
  /***/ (() => {
  
  eval("throw new Error(\"Module parse failed: Unexpected token (143:12)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|     }\\n|     \\n>     create(){\\n|         this.background = this.add.tileSprite(\\n|             0,\");\n\n//# sourceURL=webpack://src/./js/scenes/ChoosePLayer.js?");
  
  /***/ }),
  
  /***/ "./js/scenes/GameOver.js":
  /*!*******************************!*\
    !*** ./js/scenes/GameOver.js ***!
    \*******************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./js/config/config.js\");\n/* harmony import */ var _manager_uiManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/uiManager */ \"./js/manager/uiManager.js\");\n/* harmony import */ var _manager_KeyboardManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manager/KeyboardManager.js */ \"./js/manager/KeyboardManager.js\");\n\n\n\n\nclass GameOver extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\n  constructor() {\n    super(\"gameOver\");\n  }\n\n  create() {\n    // Add a game over message\n    this.keyboardManager = new _manager_KeyboardManager_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n    this.guiManager = new _manager_uiManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n\n    // Define the \"R\" key to restart the game\n    this.keyboardManager.restartGame();\n\n    // Define the \"T\" key to back to the title screen\n    this.keyboardManager.titleScreen();\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameOver);\n\n\n//# sourceURL=webpack://src/./js/scenes/GameOver.js?");
  
  /***/ }),
  
  /***/ "./js/scenes/LoadingScreen.js":
  /*!************************************!*\
    !*** ./js/scenes/LoadingScreen.js ***!
    \************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./js/config/config.js\");\n/* harmony import */ var _manager_uiManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/uiManager.js */ \"./js/manager/uiManager.js\");\n\n\n\nclass LoadingScreen extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\n  constructor() {\n    super(\"loadingScreen\");\n\n    this.guiManager = new _manager_uiManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n  }\n\n  init(data) {\n    this.selectedPlayerIndex = data.number;\n  }  \n\n  preload() {\n    this.load.image(\n      \"background_texture\",\n      \"assets/images/backgrounds/purple/nebula_1.png\"\n    );\n    \n    // Load Enemy Spritesheets\n    this.load.spritesheet({\n      key: \"bug1_texture\",\n      url: \"assets/spritesheets/enemies/bug_1.png\",\n      frameConfig: {\n        frameWidth: 64,\n        frameHeight: 64,\n        startFrame: 0,\n        endFrame: 5,\n      },\n    });\n\n    this.load.spritesheet({\n      key: \"bug3_texture\",\n      url: \"assets/spritesheets/enemies/bug_3.png\",\n      frameConfig: {\n        frameWidth: 64,\n        frameHeight: 64,\n        startFrame: 0,\n        endFrame: 5,\n      },\n    });\n\n    this.load.spritesheet({\n      key: \"bug5_texture\",\n      url: \"assets/spritesheets/enemies/bug_5.png\",\n      frameConfig: {\n        frameWidth: 64,\n        frameHeight: 64,\n        startFrame: 0,\n        endFrame: 5,\n      },\n    });\n\n    // Load Bullet Spritesheet\n    this.load.spritesheet({\n      key: \"bullet_texture\",\n      url: \"assets/spritesheets/vfx/bullet.png\",\n      frameConfig: {\n        frameWidth: 9,\n        frameHeight: 34,\n        startFrame: 0,\n        endFrame: 0,\n      },\n    });\n\n    // Load Effect Spritesheets\n    this.load.spritesheet({\n      key: \"explosion_texture\",\n      url: \"assets/spritesheets/vfx/explosion.png\",\n      frameConfig: {\n        frameWidth: 48,\n        frameHeight: 48,\n        startFrame: 0,\n        endFrame: 7,\n      },\n    });\n  }\n\n  create() {\n    \n    // Create enemy animations\n    this.anims.create({\n      key: \"bug1_anim\",\n      frames: this.anims.generateFrameNumbers(\"bug1_texture\", {\n        start: 0,\n        end: 5,\n      }),\n      frameRate: 20,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"bug3_anim\",\n      frames: this.anims.generateFrameNumbers(\"bug3_texture\", {\n        start: 0,\n        end: 5,\n      }),\n      frameRate: 20,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"bug5_anim\",\n      frames: this.anims.generateFrameNumbers(\"bug5_texture\", {\n        start: 0,\n        end: 5,\n      }),\n      frameRate: 20,\n      repeat: -1,\n    });\n\n    // Create explosion animations\n    this.anims.create({\n      key: \"explosion_anim\",\n      frames: this.anims.generateFrameNumbers(\"explosion_texture\", {\n        start: 0,\n        end: 7,\n      }),\n      frameRate: 20,\n      repeat: 0,\n      hideOnComplete: true,\n    });\n\n    const loadingText = this.add.text(\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 50,\n      \"LOADING\",\n      { fontSize: \"32px\", fill: \"#fff\" }\n    );\n    loadingText.setOrigin(0.5);\n\n    this.time.delayedCall(1000, () => {\n      let value = this.selectedPlayerIndex;\n      this.scene.start(\"playGame\", {number : value});\n    });\n  }\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingScreen);\n\n\n//# sourceURL=webpack://src/./js/scenes/LoadingScreen.js?");
  
  /***/ }),
  
  /***/ "./js/scenes/PauseScreen.js":
  /*!**********************************!*\
    !*** ./js/scenes/PauseScreen.js ***!
    \**********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n/* harmony import */ var _manager_KeyboardManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/KeyboardManager */ \"./js/manager/KeyboardManager.js\");\n/* harmony import */ var _manager_uiManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manager/uiManager */ \"./js/manager/uiManager.js\");\n\n\n\n\nclass PauseScreen extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\n  constructor() {\n    super(\"pauseScreen\");\n  }\n\n  create() {\n    this.keyboardManager = new _manager_KeyboardManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    this.guiManager = new _manager_uiManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n\n    this.keyboardManager.unpauseGame();\n\n    this.keyboardManager.titleScreen();\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PauseScreen);\n\n\n//# sourceURL=webpack://src/./js/scenes/PauseScreen.js?");
  
  /***/ }),
  
  /***/ "./js/scenes/PlayingScreen.js":
  /*!************************************!*\
    !*** ./js/scenes/PlayingScreen.js ***!
    \************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_gameSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/gameSettings */ \"./js/config/gameSettings.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ \"./js/config/config.js\");\n/* harmony import */ var _objects_projectiles_Bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/projectiles/Bullet */ \"./js/objects/projectiles/Bullet.js\");\n/* harmony import */ var _objects_players_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../objects/players/Player */ \"./js/objects/players/Player.js\");\n/* harmony import */ var _objects_enemies_Bug1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../objects/enemies/Bug1 */ \"./js/objects/enemies/Bug1.js\");\n/* harmony import */ var _objects_enemies_Bug3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../objects/enemies/Bug3 */ \"./js/objects/enemies/Bug3.js\");\n/* harmony import */ var _objects_enemies_Bug5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../objects/enemies/Bug5 */ \"./js/objects/enemies/Bug5.js\");\n/* harmony import */ var _manager_enemyManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../manager/enemyManager */ \"./js/manager/enemyManager.js\");\n/* harmony import */ var _manager_KeyboardManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../manager/KeyboardManager */ \"./js/manager/KeyboardManager.js\");\n/* harmony import */ var _manager_playerManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../manager/playerManager */ \"./js/manager/playerManager.js\");\n/* harmony import */ var _manager_collideManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../manager/collideManager */ \"./js/manager/collideManager.js\");\n/* harmony import */ var _manager_uiManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../manager/uiManager */ \"./js/manager/uiManager.js\");\n/* harmony import */ var _objects_ui_HPBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../objects/ui/HPBar */ \"./js/objects/ui/HPBar.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst BACKGROUND_SCROLL_SPEED = 0.5;\nclass PlayingScreen extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\n  constructor() {\n    super(\"playGame\");\n  }\n\n  init(data) {\n    this.selectedPlayerIndex = data.number;\n  }\n\n  preload(){\n    // Load Player Spritesheet\n    this.load.spritesheet({\n      key: `player_texture_${this.selectedPlayerIndex}`,\n      url: `assets/spritesheets/players/planes_0${this.selectedPlayerIndex}A.png`,\n      frameConfig: {\n        frameWidth: 96,\n        frameHeight: 96,\n        startFrame: 0,\n        endFrame: 19,\n      },\n    });\n  }\n\n  create() {\n    this.anims.create({\n      key: \"player_anim\",\n      frames: this.anims.generateFrameNumbers(`player_texture_${this.selectedPlayerIndex}`, {\n        start: 0,\n        end: 3,\n      }),\n      frameRate: 30,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"player_anim_left\",\n      frames: this.anims.generateFrameNumbers(`player_texture_${this.selectedPlayerIndex}`, {\n        start: 4,\n        end: 7,\n      }),\n      frameRate: 30,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"player_anim_left_diagonal\",\n      frames: this.anims.generateFrameNumbers(`player_texture_${this.selectedPlayerIndex}`, {\n        start: 8,\n        end: 11,\n      }),\n      frameRate: 30,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"player_anim_right\",\n      frames: this.anims.generateFrameNumbers(`player_texture_${this.selectedPlayerIndex}`, {\n        start: 12,\n        end: 15,\n      }),\n      frameRate: 30,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"player_anim_right_diagonal\",\n      frames: this.anims.generateFrameNumbers(`player_texture_${this.selectedPlayerIndex}`, {\n        start: 16,\n        end: 19,\n      }),\n      frameRate: 30,\n      repeat: -1,\n    });\n\n    // Creat GUI for PlayingScreen ( Changes in BG except Player and Enemy )\n    this.guiManager = new _manager_uiManager__WEBPACK_IMPORTED_MODULE_12__[\"default\"](this);\n\n    // Spawn the Player\n    this.player = new _objects_players_Player__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].width / 2, _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].height - 100, `player_texture_${this.selectedPlayerIndex}`, 100);\n    this.player.play(\"player_anim\");\n\n    // Spawn the Enemies\n    this.bug3_1 = new _objects_enemies_Bug3__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, 150, 200, 30);\n    this.bug3_1.play(\"bug3_anim\");\n    this.bug3_2 = new _objects_enemies_Bug3__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this, 100, 100, 30);\n    this.bug3_2.play(\"bug3_anim\");\n\n    this.bug5 = new _objects_enemies_Bug5__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this, 300, 80, 30);\n    this.bug5.play(\"bug5_anim\");\n\n    this.bug1 = new _objects_enemies_Bug1__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 200, 180, 30);\n    this.bug1.play(\"bug1_anim\");\n    // Create managers\n    this.keyboardManager = new _manager_KeyboardManager__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this);\n    this.playerManager = new _manager_playerManager__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this, this.player, this.selectedPlayerIndex);\n    this.enemyManager = new _manager_enemyManager__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this);\n    this.enemyManager.addEnemy(this.bug3_1);\n    this.enemyManager.addEnemy(this.bug3_2);\n    this.enemyManager.addEnemy(this.bug5);\n    this.enemyManager.addEnemy(this.bug1);\n\n    // Create keyboard inputs\n    this.spacebar = this.input.keyboard.addKey(\n      (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input).Keyboard.KeyCodes.SPACE\n    );\n\n    // Create a group to manage bullets\n    this.projectiles = this.physics.add.group({\n      classType: _objects_projectiles_Bullet__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      runChildUpdate: true,\n    });\n\n    this.collideManager = new _manager_collideManager__WEBPACK_IMPORTED_MODULE_11__[\"default\"](\n      this,\n      this.player,\n      this.enemyManager.enemies\n    );\n\n    this.events.once('shutdown', this.shutdown, this);\n  }\n\n  update() {\n    // Pause the game\n    this.keyboardManager.pauseGame();\n\n    // Move the background\n    this.background.tilePositionY -= BACKGROUND_SCROLL_SPEED;\n\n    // Move the player and enemies\n    this.playerManager.movePlayer();\n    this.player.updateHealthBarPosition();\n\n    this.enemyManager.moveEnemies();\n    this.enemyManager.enemies.forEach((enemy) => {\n      enemy.updateHealthBarPosition();\n    });\n\n    if (phaser__WEBPACK_IMPORTED_MODULE_0___default().Input.Keyboard.JustDown(this.spacebar)) {\n      this.player.shootBullet();\n    }\n\n    this.projectiles.children.iterate((bullet) => {\n      bullet.update();\n    });\n\n    if (this.player.health <= 0) {\n      this.gameOver();\n    }\n  }\n\n  gameOver() {\n    this.scene.start(\"gameOver\");\n  }\n\n  shutdown() {\n    // Remove entire texture along with all animations\n    this.textures.remove(`player_texture_${this.selectedPlayerIndex}`);\n  \n    // Check if the animation exists before trying to remove it\n    if (this.anims && this.anims.exists && this.anims.exists(\"player_anim\")) {\n      this.anims.remove(\"player_anim\");\n    }\n    if (this.anims && this.anims.exists && this.anims.exists(\"player_anim_left\")) {\n      this.anims.remove(\"player_anim_left\");\n    }\n    if (this.anims && this.anims.exists && this.anims.exists(\"player_anim_left_diagonal\")) {\n      this.anims.remove(\"player_anim_left_diagonal\");\n    }\n    if (this.anims && this.anims.exists && this.anims.exists(\"player_anim_right\")) {\n      this.anims.remove(\"player_anim_right\");\n    }\n    if (this.anims && this.anims.exists && this.anims.exists(\"player_anim_right_diagonal\")) {\n      this.anims.remove(\"player_anim_right_diagonal\");\n    }\n  }\n  \n  \n  \n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayingScreen);\n\n\n//# sourceURL=webpack://src/./js/scenes/PlayingScreen.js?");
  
  /***/ }),
  
  /***/ "./js/scenes/TitleScreen.js":
  /*!**********************************!*\
    !*** ./js/scenes/TitleScreen.js ***!
    \**********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./js/config/config.js\");\n/* harmony import */ var _manager_uiManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/uiManager.js */ \"./js/manager/uiManager.js\");\n\n\n\nclass TitleScreen extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\n  constructor() {\n    super(\"bootGame\");\n  }\n\n  preload() {\n    this.load.image(\n      \"background\",\n      \"assets/images/backgrounds/purple/nebula_3.png\"\n    );\n\n    this.load.spritesheet({\n      key: \"button_play\",\n      url: \"assets/gui/button.png\",\n      frameConfig: {\n        frameWidth: 93,\n        frameHeight: 28,\n        startFrame: 2,\n        endFrame: 2,\n      },\n    });\n\n    this.load.spritesheet({\n      key: \"button_hover\",\n      url: \"assets/gui/button_hover.png\",\n      frameConfig: {\n        frameWidth: 93,\n        frameHeight: 28,\n        startFrame: 2,\n        endFrame: 2,\n      },\n    });\n  }\n\n  create() {\n    // Create Background\n    this.background = this.add.tileSprite(\n      0,\n      0,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height,\n      \"background\"\n    );\n    this.background.setOrigin(0, 0);\n\n    const titleText = \"SPACE GUARDIAN\";\n\n    // Create \"SPACE\" text\n    const spaceText = this.add.text(\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 100,\n      \"SPACE\",\n      {\n        fontFamily: \"Pixelify Sans\",\n        fontSize: \"64px\",\n        color: \"#FF454D\", // Set the color for \"SPACE\"\n        align: \"center\",\n      }\n    );\n    spaceText.setOrigin(0.5);\n\n    // Create \"GUARDIAN\" text with each letter in a different color\n    const guardianText = this.add.text(\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 - 30,\n      \"Guardian\",\n      {\n        fontFamily: \"Pixelify Sans\",\n        color: \"#FF454D\",\n        fontSize: \"64px\",\n        align: \"center\",\n      }\n    );\n    guardianText.setOrigin(0.5);\n\n    // Tween animation for the rainbow effect on \"GUARDIAN\"\n    this.tweens.add({\n      targets: guardianText,\n      duration: 1000, // Adjust the duration as needed\n      ease: \"Sine.easeInOut\",\n      repeat: -1,\n      yoyo: true,\n      alpha: 0.2, // Optional: You can adjust the alpha for a fading effect\n    });\n\n    // Tween animation for the rainbow effect on \"SPACE\"\n    this.tweens.add({\n      targets: spaceText,\n      duration: 1000, // Adjust the duration as needed\n      ease: \"Sine.easeInOut\",\n      repeat: -1,\n      yoyo: true,\n      alpha: 0.2, // Optional: You can adjust the alpha for a fading effect\n    });\n\n    // Create Play Button\n    this.button_play = this.add.sprite(\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2,\n      _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2 + 60,\n      \"button_play\"\n    );\n    this.button_play.setInteractive();\n    this.button_play.on(\"pointerdown\", () => {\n        this.scene.start(\"choosePlayer\");\n    });\n    this.button_play.on(\"pointerover\", () => {\n      this.button_play.setTexture(\"button_hover\");\n    });\n    this.button_play.on(\"pointerout\", () => {\n      this.button_play.setTexture(\"button_play\");\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleScreen);\n\n\n//# sourceURL=webpack://src/./js/scenes/TitleScreen.js?");
  
  /***/ }),
  
  /***/ "phaser":
  /*!*************************!*\
    !*** external "Phaser" ***!
    \*************************/
  /***/ ((module) => {
  
  "use strict";
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