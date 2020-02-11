/* eslint-disable no-undef */
import PreloadScene from './scenes/PreloadScene';
import InfoStoryScene from './scenes/InfoStoryScene.js';
import ResultStoryScene from './scenes/ResultStoryScene.js';
import SportStoryScene from './scenes/SportStoryScene.js';
import GameIntroScene from './scenes/GameIntroScene.js';
import GameScene from './scenes/GameScene.js';
import ResultsScene from './scenes/ResultsScene.js';
import GameOverScene from './scenes/GameOverScene.js';

class Game extends Phaser.Game {
  constructor() {
    super({
      type: Phaser.AUTO,
      width: 375,
      height: 667,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      title: 'Bachelorproef',
      scene: [
        PreloadScene,
        InfoStoryScene,
        SportStoryScene,
        ResultStoryScene,
        GameIntroScene,
        GameScene,
        ResultsScene,
        GameOverScene
      ],
      url: 'http://www.sporza.be',
      version: '1.0',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {y: 0},
          debug: false
        }
      }
    });
    console.log('Constructor Game class');
  }
}
export default Game;
