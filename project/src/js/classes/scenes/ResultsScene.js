/* eslint-disable no-undef */
export default class GameScene extends Phaser.Scene {
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

  }
}
