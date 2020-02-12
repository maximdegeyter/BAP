/* eslint-disable no-undef */
import './../../../assets/nextBtn.png';
import './../../../assets/btnLinks.png';
import './../../../assets/btnRechts.png';
import './../../../assets/Zwembad.png';
import './../../../assets/long.png';
import './../../../assets/zwemmerLinks.png';
import './../../../assets/zwemmerRechts.png';
import './../../../assets/ballen.png';
import './../../../assets/logo.png';
import './../../../assets/startBackground.jpg';
import './../../../assets/startPhoto.png';
import './../../../assets/playBtn.png';
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
    this.load.image(`next`, `./assets/nextBtn.png`);
    this.load.image(`long`, `./assets/long.png`);
    this.load.image(`left`, `./assets/btnLinks.png`);
    this.load.image(`right`, `./assets/btnRechts.png`);
    this.load.image(`zwemmerLinks`, `./assets/zwemmerLinks.png`);
    this.load.image(`zwemmerRechts`, `./assets/zwemmerRechts.png`);
    this.load.image(`ballen`, `./assets/ballen.png`);
    this.load.image(`logo`, `./assets/logo.png`);
    this.load.image(`playBtn`, `./assets/playBtn.png`);
    this.load.image(`startBackground`, `./assets/startBackground.jpg`);
    this.load.image(`startPhoto`, `./assets/startPhoto.png`);
    this.load.video(`test`, `./assets/test.mp4`);
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
    this.scene.start(`start`);
  }

  create() {}
  update() {}
}
