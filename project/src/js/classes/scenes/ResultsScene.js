/* eslint-disable no-undef */
export default class ResultsScene extends Phaser.Scene {
  constructor() {
    super({
      key: `results`
    });
  }

  init(data) {
    console.log(`ResultsScene init`);
    this.score = data.score;
    console.log(`Score: ${this.score}`);
  }

  onComplete() {
  }

  create() {
    this.createYourScore();
    this.createPieterScore();
  }

  createYourScore() {
    this.yourScore = this.add.text(100, this.game.config.height / 4, `Jouw tijd: ${this.score}`, {
      fontSize: 18,
      fill: `#ffffff`,
      wordWrap: {width: 150},
      align: `center`,
      lineSpacing: 1.5
    }).setOrigin(0.5);
  }

  createPieterScore() {
    this.pieterScore = this.add.text(this.game.config.width - 100, this.game.config.height / 4, `Pieter's tijd: 44:48`, {
      fontSize: 18,
      fill: `#ffffff`,
      wordWrap: {width: 200},
      align: `center`,
      lineSpacing: 1.5
    }).setOrigin(0.5);
  }
}
