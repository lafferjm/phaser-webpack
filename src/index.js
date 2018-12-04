import { SimpleScene } from './scenes/simple-scene';
import { Game } from 'phaser';

const gameConfig = {
  width: 680,
  height: 400,
  scene: SimpleScene
};

new Game(gameConfig);
