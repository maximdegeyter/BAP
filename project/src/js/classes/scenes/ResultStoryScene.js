export default class ResultStoryScene extends Phaser.Scene {
  constructor() {
    super({
      key: `result`
    });
  }

  init() {
    console.log(`Story 3 INIT`);
    this.millis = 15000;
  }

  onComplete() {
    this.scene.start(`game`);
  }

  create() {
    this.createBackground();
    this.nextButton();
    this.previousButton();
    this.setTimer();
  }

  createBackground() {
    this.bg = new Phaser.Geom.Rectangle(0, 0, this.game.config.width, this.game.config.height);
    this.graphics = this.add.graphics({ fillStyle: { color: 0xfa927c } });
    this.graphics.fillRectShape(this.bg);
  }

  nextButton() {
    this.btn = this.add.image(this.game.config.width - 24, this.game.config.height / 2, 'next').setInteractive();
    this.btn.setScale(0.5);
    this.btn.on('pointerdown', this.onComplete, this);
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
}
