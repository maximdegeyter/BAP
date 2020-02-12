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
    this.createLogo();
    this.createPlayBtn();
    this.createStartPhoto();
    this.addZwemmer();
  }

  addZwemmer() {
  } 

  createBackground() {
    this.bg = this.add.image(this.game.config.width / 2, this.game.config.height / 2, `startBackground`).setScale(0.5);
  }

  createLogo() {
    this.logo = this.add.image(this.game.config.width / 1.75, this.game.config.height / 3, 'logo');
    this.logo.setScale(0.75);
  }

  createPlayBtn() {
    this.btn = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'playBtn').setInteractive();
    this.btn.on('pointerdown', this.onComplete, this);
  }

  createStartPhoto() {
    this.photo = this.add.image(this.game.config.width / 2, this.game.config.height / 1.15, 'startPhoto');
  }
}
