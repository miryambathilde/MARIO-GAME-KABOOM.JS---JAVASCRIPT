kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
  clearColor: [0,0,0,1],
})

// images //
loadSprite('coin', 'images/coin.png')
loadSprite('evil-shroom', 'images/evil-shroom.png')
loadSprite('brick', 'images/brick.png')
loadSprite('block', 'images/block.png')
loadSprite('mario', 'images/mario.png')
loadSprite('mushroom', 'images/mushroom.png')
loadSprite('surprise', 'images/surprise.png')
loadSprite('unboxed', 'images/unboxed.png')
loadSprite('pipe-top-left', 'images/pipe-top-left.png')
loadSprite('pipe-top-right', 'images/pipe-top-right.png')
loadSprite('pipe-bottom-left', 'images/pipe-bottom-left.png')
loadSprite('pipe-bottom-right', 'images/pipe-bottom-right.png')



scene("game", () => {
  layers(['bg', 'obj', 'ui'], 'obj')


})

start("game")