/* eslint-disable no-undef */
export default class ResultsScene extends Phaser.Scene {
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
    this.scene.start(`schedule`);
  }

  create() {
    this.createBackground();
    this.createScoreChart();
    this.createYourScore();
    this.createPieterScore();
    this.createScheduleBtn();
    this.createMessengerBtn();
    this.createReplayBtn();
  }

  createBackground() {
    this.bg = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'backgroundResults');
    this.bg.setScale(0.5);
  }

  createYourScore() {
    this.yourScore = this.add.text(this.game.config.width / 4.2, this.game.config.height / 2, `44:48`, {
      fontSize: 14,
      fill: `#000000`,
      wordWrap: {width: 150},
      align: `center`,
      lineSpacing: 1.5
    }).setOrigin(0.5);
  }

  createPieterScore() {
    this.pieterScore = this.add.text(this.game.config.width / 1.33, this.game.config.height / 2, `${this.score}`, {
      fontSize: 14,
      fill: `#000000`,
      wordWrap: {width: 200},
      align: `center`,
      lineSpacing: 1.5
    }).setOrigin(0.5);
  }

  createScoreChart() {
    this.pieterChart = new Phaser.Geom.Rectangle(this.game.config.width / 5.9, this.game.config.height / 1.85, this.game.config.width / 7.5, - (2 * 44.48));
    this.yourChart = new Phaser.Geom.Rectangle(this.game.config.width / 1.465, this.game.config.height / 1.85, this.game.config.width / 7.5, - (2 * this.score));
    this.graphics = this.add.graphics({fillStyle: {color: 0xffffff}});
    this.graphics.fillRectShape(this.yourChart);
    this.graphics.fillRectShape(this.pieterChart);

  }

  createScheduleBtn() {
    this.scheduleBtn = this.add.image(this.game.config.width / 2, this.game.config.height / 1.25, 'btnSchema').setInteractive();
    this.scheduleBtn.setScale(0.3);
    this.scheduleBtn.on('pointerdown', this.onComplete, this);
  }

  createMessengerBtn() {
    this.messengerBtn = this.add.image(this.game.config.width / 2, this.game.config.height / 1.1, 'messengerBtnPurple');
    this.messengerBtn.setScale(0.3);
    this.messengerBtn.on('pointerdown', this.onComplete, this);
  }

  createReplayBtn() {
    this.replayBtn = this.add.image(this.game.config.width / 1.25, this.game.config.height / 5.17, 'btnReplay').setInteractive();
    this.replayBtn.setScale(0.3);
    this.replayBtn.on('pointerdown', this.goToGame, this);
  }

  goToGame() {
    this.scene.start(`intro`);
  }
}
