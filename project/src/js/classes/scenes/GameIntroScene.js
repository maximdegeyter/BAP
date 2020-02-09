/* eslint-disable no-undef */
export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: `intro`
    });
  }

  init() {
    console.log(`Introscene init`);

  }

  onComplete() {
    this.scene.start(`game`);
  }

  create() {
    this.setTimer();
    this.createText();
  }

  setTimer() {
    this.timedEvent = this.time.addEvent({
      delay: 5000,
      callback: this.onComplete,
      callbackScope: this
    });
  }

  createText() {
    this.add.text(this.game.config.width / 2, this.game.config.height / 2, 'VS', {
      fontSize: 48,
      fill: `#ffffff`
    }).setOrigin(0.5);
  }
}
