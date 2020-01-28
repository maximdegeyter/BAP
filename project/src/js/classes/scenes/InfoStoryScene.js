export default class InfoStoryScene extends Phaser.Scene {
  constructor() {
    super({
      key: `info`
    });
  }

  init() {
    console.log(`Story 1 INIT`);
  }

  onComplete() {
    this.scene.start(`sport`);
  }

  create() {
    this.timedEvent = this.time.addEvent({ delay: 2000, callback: this.onComplete, callbackScope: this});
  }
}
