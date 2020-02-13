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
    this.createScheduleBtn();
    this.createMessengerBtn();
    this.createReplayBtn();
  }

  createBackground() {
    this.bg = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'backgroundGO');
    this.bg.setScale(0.5);
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
    this.replayBtn = this.add.image(this.game.config.width / 6, this.game.config.height / 3.13, 'btnReplay').setInteractive();
    this.replayBtn.setScale(0.3);
    this.replayBtn.on('pointerdown', this.goToGame, this);
  }

  goToGame() {
    this.scene.start(`intro`);
  }
}
