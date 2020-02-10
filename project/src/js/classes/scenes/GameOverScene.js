/* eslint-disable no-undef */
export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({
      key: `gameover`
    });
  }

  init() {
    console.log(`Game Over scene`);
  }

  onComplete() {
  }

  create() {
    this.createYourScore();

  }

  createYourScore() {
    this.yourScore = this.add.text(this.game.config.width / 2, this.game.config.height / 3, `Je hebt het niet eens gehaald tot de finishline..`, {
      fontSize: 25,
      fill: `#ffffff`,
      wordWrap: {width: 300},
      align: `center`,
      lineSpacing: 1.5
    }).setOrigin(0.5);
  }
}
