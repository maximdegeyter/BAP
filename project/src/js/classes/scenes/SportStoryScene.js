export default class SportStoryScene extends Phaser.Scene {
  constructor() {
    super({
      key: `sport`
    });
  }

  init() {
    console.log(`Story 2 INIT`);
    this.millis = 15000;
  }

  onComplete() {
    this.scene.start(`result`);
  }

  create() {
    this.createBackground();
    this.nextButton();
    this.previousButton();
    this.setTimer();
  }

  createBackground() {
    this.bg = new Phaser.Geom.Rectangle(0, 0, this.game.config.width, this.game.config.height);
    this.graphics = this.add.graphics({ fillStyle: { color: 0x29f2d4 } });
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
    this.scene.start('info');
  }

  setTimer() {
    this.timedEvent = this.time.addEvent({
      delay: this.millis,
      callback: this.onComplete,
      callbackScope: this
    });
  }
}
