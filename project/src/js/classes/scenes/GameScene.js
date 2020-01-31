/* eslint-disable no-undef */
export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: `game`
    });
  }

  init() {
    console.log(`GameScene INIT`);
    this.text;
    this.timedEvent;
  }

  onComplete() {

  }

  create() {
    this.countDown();
  }

  countDown() {
    this.initialTime = 3;

    this.text = this.add.text(this.game.config.width / 2, this.game.config.height / 2, `${this.initialTime}`, {
      fontSize: 48,
      fill: `#ffffff`
    }).setOrigin(0.5);

    // Each 1000 ms call onEvent
    this.timedEvent = this.time.addEvent({delay: 1000, callback: this.onEvent, callbackScope: this, loop: true});
  }

  onEvent() {
    if (this.initialTime > 1) {
      this.initialTime -= 1; // One second
      this.text.setText(`${this.initialTime}`);
    } else {
      this.text.setText(`Go`);
      this.time.addEvent({delay: 1000, callback: this.destroyText, callbackScope: this, loop: false});
    }
  }

  destroyText() {
    console.log('destroy text');
    this.text.setVisible(false);
  }
}
