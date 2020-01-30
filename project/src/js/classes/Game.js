/* eslint-disable no-undef */
import PreloadScene from './scenes/PreloadScene';
import InfoStoryScene from './scenes/InfoStoryScene.js';
import ResultStoryScene from './scenes/ResultStoryScene.js';
import SportStoryScene from './scenes/SportStoryScene.js';
import GameScene from './scenes/GameScene.js';

class Game extends Phaser.Game {
  constructor() {
    super({
      type: Phaser.AUTO,
      width: 375,
      height: 667,
      title: 'Bachelorproef',
      scene: [
        PreloadScene,
        InfoStoryScene,
        SportStoryScene,
        ResultStoryScene,
        GameScene
      ],
      url: 'http://www.sporza.be',
      version: '1.0',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {y: 300},
          debug: false
        }
      }
    });
    console.log('Constructor Game class');
  }
}
export default Game;
