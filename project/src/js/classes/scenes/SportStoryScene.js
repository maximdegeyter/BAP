export default class SportStoryScene extends Phaser.Scene {
  constructor() {
    super({
      key: `sport`
    });
  }

  init() {
    console.log(`Story 2 INIT`);
  }

  onComplete() {
    this.scene.start(`result`);
  }

  create() {
    this.timedEvent = this.time.addEvent({ delay: 2000, callback: this.onComplete, callbackScope: this});
  }
}
