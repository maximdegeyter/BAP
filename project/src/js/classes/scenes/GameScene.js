export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: `game`
    });
  }

  init() {
    console.log(`GameScene INIT`);
  }

  onComplete() {}
}
