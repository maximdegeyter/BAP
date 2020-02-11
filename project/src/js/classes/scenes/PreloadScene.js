/* eslint-disable no-undef */
import './../../../assets/next.png';
import './../../../assets/Left-knop.png';
import './../../../assets/Right-knop.png';
import './../../../assets/Zwembad.png';
import './../../../assets/Longen.png';
import './../../../assets/Zwemmer.png';
import './../../../assets/ballen.png';
import './../../../assets/test.mp4';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: `preload`
    });
  }
  preload() {
    this.preloader = this.add.graphics();
    this.load.on(`progress`, this.onProgress, this);
    this.load.on(`complete`, this.onComplete, this);
    this.load.image(`next`, `./assets/next.png`);
    this.load.image(`longen`, `./assets/Longen.png`);
    this.load.image(`left`, `./assets/Left-knop.png`);
    this.load.image(`right`, `./assets/Right-knop.png`);
    this.load.image(`zwemmer`, `./assets/Zwemmer.png`);
    this.load.image(`ballen`, `./assets/ballen.png`);
    this.load.video(`test`, `./assets/test.mmp4`);
  }

  onProgress(value) {
    console.log(`Loading: ${Math.round(value * 100)}%`);
    this.preloader.clear();
    this.preloader.fillStyle(0xff0000, 1);
    this.preloader.fillRect(
      0,
      this.game.config.height / 2,
      this.game.config.width * value,
      5
    );
  }

  onComplete() {
    this.preloader.destroy();
    this.scene.start(`info`);
  }

  create() {}
  update() {}
}
