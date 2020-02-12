/* eslint-disable no-undef */
export default class InfoStoryScene extends Phaser.Scene {
  constructor() {
    super({
      key: `info`
    });
  }

  init() {
    console.log(`Story 1 init`);
    this.millis = 5000;
    this.progressBar;
  }

  onComplete() {
    this.scene.start(`sport`);
  }

  create() {
    this.createBackground();
    this.bars();
    this.nextButton();
    this.setTimer();
    this.timer();
  }

  createBackground() {
    this.bg = new Phaser.Geom.Rectangle(0, 0, this.game.config.width, this.game.config.height);
    this.graphics = this.add.graphics({fillStyle: {color: 0x7c48f1}});
    this.graphics.fillRectShape(this.bg);
    this.vid = this.add.video(this.game.config.width / 2, this.game.config.height / 2, 'story1');
    this.videoScale = Math.min(this.game.config.width / this.vid.width, this.game.config.height / this.vid.height);
    this.vid.setScale(0.35)
    this.vid.play(true);
  }

  bars() {
    this.progressBar1 = new Phaser.Geom.Rectangle((this.game.config.width / 2) - 80, 16, 48, 4);
    this.color = this.add.graphics({fillStyle: {color: 0xffffff}});
    this.color.alpha = 0.5;
    this.color.fillRectShape(this.progressBar1);

    this.progressBar2 = new Phaser.Geom.Rectangle((this.game.config.width / 2) - 24, 16, 48, 4);
    this.color.fillRectShape(this.progressBar2);

    this.progressBar3 = new Phaser.Geom.Rectangle((this.game.config.width / 2) + 32, 16, 48, 4);
    this.color.fillRectShape(this.progressBar3);
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
    this.initialTime = 0;
    this.progressBar = this.add.graphics();
    this.time.addEvent({delay: 1, callback: this.onEvent, callbackScope: this, loop: true});
  }

  onEvent() {
    this.initialTime += 1;
    this.progressBar.clear();
    this.progressBar.fillStyle(0xffffff, 1);
    this.progressBar.fillRect((this.game.config.width / 2) - 80, 16, 0.053 * this.initialTime, 4);
  }

}
