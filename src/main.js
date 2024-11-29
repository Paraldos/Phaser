import './style.css';
import { Scene, Game, WEBGL, GameObjects } from 'phaser';

const canvas = document.getElementById('game');

class GameScene extends Scene {
  constructor() {
    super('scene-game');
    this.textbox = undefined;
  }

  create() {
    this.textbox = this.add.text(
      400,
      300,
      'Welcome to Phaser x Vite!',
      {
        color: '#FFF',
        fontFamily: 'monospace',
        fontSize: '26px',
      }
    );

    this.textbox.setOrigin(0.5, 0.5);
  }

  update(time, delta) {
    if (!this.textbox) {
      return;
    }

    this.textbox.rotation += 0.0005 * delta;
  }
}

const config = {
  type: WEBGL,
  width: 800,
  height: 600,
  canvas: canvas,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      // debug: true,
    },
  },
  scene: [GameScene],
};

new Game(config);
