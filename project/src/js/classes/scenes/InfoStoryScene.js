/* eslint-disable no-undef */
export default class InfoStoryScene extends Phaser.Scene {
  constructor() {
    super({
      key: `info`
    });
  }

  init() {
    console.log(`Story 1 INIT`);
    this.millis = 15000;
  }

  onComplete() {
    this.scene.start(`sport`);
  }

  create() {
    this.createBackground();
    this.nextButton();
    this.setTimer();
    this.timer();
    this.progressBar = this.add.graphics();
  }

  // update() {
  //   this.progressBar.clear();

  //   for (let i = 0; i < 15; i++) {
  //     this.progressBar.fillStyle(0xff0000, 1);
  //     this.progressBar.fillRect(0, i * 16, 500 * i, 8);
  //   }
  // }

  createBackground() {
    this.bg = new Phaser.Geom.Rectangle(0, 0, this.game.config.width, this.game.config.height);
    this.graphics = this.add.graphics({fillStyle: {color: 0x88eafd}});
    this.graphics.fillRectShape(this.bg);
  }

  nextButton() {
    this.btn = this.add.image(this.game.config.width - 24, this.game.config.height / 2, 'next').setInteractive();
    this.btn.setScale(0.5);
    this.btn.on('pointerdown', this.onComplete, this);
  }

  setTimer() {
    this.timedEvent = this.time.addEvent({
      delay: this.millis,
      callback: this.onComplete,
      callbackScope: this
    });
  }

  timer() {
    // this.progressBar1 = new Phaser.Geom.Rectangle((this.game.config.width / 2) - 80, 16, 48, 4);
    // this.color = this.add.graphics({ fillStyle: { color: 0xffffff } });
    // this.color.fillRectShape(this.progressBar1);

    // this.progressBar2 = new Phaser.Geom.Rectangle((this.game.config.width / 2) - 24, 16, 48, 4);
    // this.color.fillRectShape(this.progressBar2);

    // this.progressBar1 = new Phaser.Geom.Rectangle((this.game.config.width / 2) + 32, 16, 48, 4);
    // this.color.fillRectShape(this.progressBar1);
  }
}
