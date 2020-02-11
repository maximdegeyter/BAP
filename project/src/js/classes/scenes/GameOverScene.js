/* eslint-disable no-undef */
export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({
      key: `gameover`
    });
  }

  init() {
    console.log(`Game Over scene`);
  }

  onComplete() {
    this.scene.start(`schedule`);
  }

  create() {
    this.createBackground();
    this.createYourScore();
    this.createScheduleBtn();
  }

  createBackground() {
    this.bg = new Phaser.Geom.Rectangle(0, 0, this.game.config.width, this.game.config.height);
    this.graphics = this.add.graphics({fillStyle: {color: 0x7c48f1}});
    this.graphics.fillRectShape(this.bg);
  }

  createYourScore() {
    this.yourScore = this.add.text(this.game.config.width / 2, this.game.config.height / 3, `Je hebt het niet eens gehaald tot de finishline..`, {
      fontSize: 25,
      fill: `#ffffff`,
      wordWrap: {width: 300},
      align: `center`,
      lineSpacing: 1.5
    }).setOrigin(0.5);
  }

  createScheduleBtn() {
    this.btn = this.add.image(this.game.config.width - 24, this.game.config.height / 2, 'next').setInteractive();
    this.btn.setScale(0.5);
    this.btn.on('pointerdown', this.onComplete, this);
  }
}
