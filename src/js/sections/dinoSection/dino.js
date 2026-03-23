import Player from './player'
import Ground from './ground'
import CactusController from './cactusController'
import Score from './score'

const canvas = document.getElementById('dino__game')
const ctx = canvas.getContext('2d')

const GAME_SPEED_START = 0.75
const GAME_SPEED_INCREMENT = 0.00001

const DINO_WIDTH = 720
const DINO_HEIGHT = 297
const PLAYER_WIDTH = 88 / 1.5
const PLAYER_HEIGHT = 94 / 1.5
const MAX_JUMP_HEIGHT = DINO_HEIGHT
const MIN_JUMP_HEIGHT = 150
const GROUND_WIDTH = 2400
const GROUND_HEIGHT = 24
const GROUND_AND_CACTUS_SPEED = 0.5

const CACTUS_CONFIG = [
  { width: 48 / 1.5, height: 120 / 1.5, image: '/images/dino-img/cactus_1.png' },
  { width: 98 / 1.5, height: 120 / 1.5, image: '/images/dino-img/cactus_2.png' },
  { width: 68 / 1.5, height: 90 / 1.5, image: '/images/dino-img/cactus_3.png' },
]

let player = null
let ground = null
let cactusController = null
let score = null

let scaleRatio = null
let previousTime = null
let gameSpeed = GAME_SPEED_START
let gameOver = false
let hasAddedEventListenerForRestart = false
let waitingToStart = true

const createSprites = function () {
  const playerWidthInGame = PLAYER_WIDTH * scaleRatio
  const playerHeightInGame = PLAYER_HEIGHT * scaleRatio
  const minJumpHeightInGame = MIN_JUMP_HEIGHT * scaleRatio
  const maxJumpHeightInGame = MAX_JUMP_HEIGHT * scaleRatio

  const groundWidthInGame = GROUND_WIDTH * scaleRatio
  const groundHeightInGame = GROUND_HEIGHT * scaleRatio

  player = new Player(
    ctx,
    playerWidthInGame,
    playerHeightInGame,
    minJumpHeightInGame,
    maxJumpHeightInGame,
    scaleRatio
  )

  ground = new Ground(
    ctx,
    groundWidthInGame,
    groundHeightInGame,
    GROUND_AND_CACTUS_SPEED,
    scaleRatio
  )

  const cactusImages = CACTUS_CONFIG.map((cactus) => {
    const image = new Image()
    image.src = cactus.image
    return {
      image: image,
      width: cactus.width * scaleRatio,
      height: cactus.height * scaleRatio,
    }
  })

  cactusController = new CactusController(ctx, cactusImages, GROUND_AND_CACTUS_SPEED, scaleRatio)

  score = new Score(ctx, scaleRatio)
}

const getScaleRatio = function () {
  const screenHeight = Math.min(window.innerHeight, document.documentElement.clientHeight)

  const screenWidth = Math.min(window.innerWidth, document.documentElement.clientWidth)

  if (screenWidth / screenHeight < DINO_WIDTH / DINO_HEIGHT) {
    return screenWidth / DINO_WIDTH
  } else {
    return screenHeight / DINO_HEIGHT
  }
}

const setScreen = function () {
  scaleRatio = getScaleRatio()
  canvas.width = DINO_WIDTH * scaleRatio
  canvas.height = DINO_HEIGHT * scaleRatio
  createSprites()
}

setScreen()

window.addEventListener('resize', setScreen)

const showGameOver = function () {
  const fontSize = 40 * scaleRatio
  ctx.font = `${fontSize}px "Courier New", Courier, monospace`
  ctx.fillStyle = '#555'

  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  const x = canvas.width / 2
  const y = canvas.height / 2
  ctx.fillText('GAME OVER', x, y)
}

const setupGameReset = function () {
  if (!hasAddedEventListenerForRestart) {
    hasAddedEventListenerForRestart = true

    setTimeout(() => {
      window.addEventListener('keyup', reset, { once: true })
      window.addEventListener('touchstart', reset, { once: true })
    }, 1000)
  }
}

const reset = function () {
  hasAddedEventListenerForRestart = false
  gameOver = false
  waitingToStart = false
  ground.reset()
  cactusController.reset()
  score.reset()
  gameSpeed = GAME_SPEED_START
}

const showStartGameText = function () {
  const fontSize = 30 * scaleRatio
  ctx.font = `${fontSize}px Verdana`
  ctx.fillStyle = '#555'

  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  const x = canvas.width / 2
  const y = canvas.height / 2
  ctx.fillText('Tap Screen or Press SPACE to Start', x, y)
}

const updateGameSpeed = function (frameTimeDelta) {
  gameSpeed += frameTimeDelta * GAME_SPEED_INCREMENT
}

const clearScreen = function () {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

const gameLoop = function (currentTime) {
  if (previousTime === null) {
    previousTime = currentTime
    requestAnimationFrame(gameLoop)
    return
  }
  const frameTimeDelta = currentTime - previousTime
  previousTime = currentTime
  clearScreen()

  if (!gameOver && !waitingToStart) {
    ground.update(gameSpeed, frameTimeDelta)
    cactusController.update(gameSpeed, frameTimeDelta)
    player.update(gameSpeed, frameTimeDelta)
    score.update(frameTimeDelta)
    updateGameSpeed(frameTimeDelta)
  }

  if (!gameOver && cactusController.collideWith(player)) {
    gameOver = true
    setupGameReset()
    score.setHighScore()
  }

  ground.draw()
  cactusController.draw()
  player.draw()
  score.draw()

  if (gameOver) {
    showGameOver()
  }

  if (waitingToStart) {
    showStartGameText()
  }

  requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)

window.addEventListener('keyup', reset, { once: true })
window.addEventListener('touchstart', reset, { once: true })
