export default class ResultStoryScene extends Phaser.Scene {
  constructor() {
    super({
      key: `result`
    });
  }

  init() {
    console.log(`Story 3 INIT`);
  }

  onComplete() {
    this.scene.start(`game`);
  }

  create() {
    this.timedEvent = this.time.addEvent({ delay: 2000, callback: this.onComplete, callbackScope: this});
  }
}
