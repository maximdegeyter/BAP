/* eslint-disable no-undef */
export default class StartScene extends Phaser.Scene {
  constructor() {
    super({
      key: `start`
    });
  }

  init() {
    console.log(`Start scene`);
  }

  onComplete() {
    this.scene.start(`info`);
  }

  create() {
    this.createBackground();
    this.createPlayBtn();
  }

  createBackground() {
    this.bg = this.add.image(this.game.config.width / 2, this.game.config.height / 2, `backgroundStart`);
  }

  createPlayBtn() {
    this.btn = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'playBtn').setInteractive();
    this.btn.on('pointerdown', this.onComplete, this);
  }
}
