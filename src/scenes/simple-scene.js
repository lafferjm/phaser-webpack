import { Scene } from 'phaser';

export class SimpleScene extends Scene {
  create() {
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
  }
}