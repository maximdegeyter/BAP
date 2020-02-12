/* eslint-disable no-undef */
export default class ResultStoryScene extends Phaser.Scene {
  constructor() {
    super({
      key: `result`
    });
  }

  init() {
    console.log(`Story 3 init`);
    this.millis = 5000;
    this.progressBar;
  }

  onComplete() {
    this.vid.setPaused(true)
    console.log('5 seconden zijn gedaan');
  }

  create() {
    this.createBackground();
    this.bars();
    this.speelButton();
    this.previousButton();
    this.setTimer();
    this.timer();
  }

  createBackground() {
    this.bg = new Phaser.Geom.Rectangle(0, 0, this.game.config.width, this.game.config.height);
    this.graphics = this.add.graphics({fillStyle: {color: 0x7c48f1}});
    this.graphics.fillRectShape(this.bg);
    this.vid = this.add.video(this.game.config.width / 2, this.game.config.height / 2, 'story3');
    this.videoScale = Math.min(this.game.config.width / this.vid.width, this.game.config.height / this.vid.height);
    this.vid.setScale(0.35)
    this.vid.play(true);
  }

  bars() {
    this.progressBar1 = new Phaser.Geom.Rectangle((this.game.config.width / 2) - 80, 16, 48, 4);
    this.color = this.add.graphics({fillStyle: {color: 0xffffff}});
    this.color.fillRectShape(this.progressBar1);

    this.progressBar2 = new Phaser.Geom.Rectangle((this.game.config.width / 2) - 24, 16, 48, 4);
    this.transparentColor = this.add.graphics({fillStyle: {color: 0xffffff}});
    this.transparentColor.alpha = 0.5;
    this.color.fillRectShape(this.progressBar2);

    this.progressBar3 = new Phaser.Geom.Rectangle((this.game.config.width / 2) + 32, 16, 48, 4);
    this.transparentColor.fillRectShape(this.progressBar3);
  }

  speelButton() {
    this.btn = this.add.image(this.game.config.width/2, this.game.config.height - 40, 'btnPieter').setInteractive();
    this.btn.setScale(0.35);
    this.btn.on('pointerdown', this.startGame, this);
  }

  startGame() {
    this.scene.start(`intro`);
  }

  previousButton() {
    this.prevBtn = this.add.image(24, this.game.config.height / 2, 'next').setInteractive();
    this.prevBtn.setScale(0.5);
    this.prevBtn.setAngle(180);
    this.prevBtn.on('pointerdown', this.goToPreviousScreen, this);
  }

  goToPreviousScreen() {
    this.scene.start('sport');
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
    this.progressBar.fillRect((this.game.config.width / 2) + 32, 16, 0.053 * this.initialTime, 4);
  }
}
