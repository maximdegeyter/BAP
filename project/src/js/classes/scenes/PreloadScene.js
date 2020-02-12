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
import './../../../assets/progressBar0.png';
import './../../../assets/progressBar10.png';
import './../../../assets/progressBar20.png';
import './../../../assets/progressBar40.png';
import './../../../assets/progressBar60.png';
import './../../../assets/progressBar80.png';
import './../../../assets/progressBar100.png';
import './../../../assets/btnRecap.png';
import './../../../assets/btnMessenger.png';
import './../../../assets/textBg.png';
import './../../../assets/Spritesheet.png';
import './../../../assets/vs.mp4';
import './../../../assets/story-2.mp4';
import './../../../assets/story-3.mp4';

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
    this.load.spritesheet(`zwemmer`, `./assets/Spritesheet.png`, {frameWidth: 289, frameHeight: 333});
    this.load.image(`zwemmerLinks`, `./assets/zwemmerLinks.png`);
    this.load.image(`zwemmerRechts`, `./assets/zwemmerRechts.png`);
    this.load.image(`ballen`, `./assets/ballen.png`);
    this.load.image(`logo`, `./assets/logo.png`);
    this.load.image(`playBtn`, `./assets/playBtn.png`);
    this.load.image(`startBackground`, `./assets/startBackground.jpg`);
    this.load.image(`startPhoto`, `./assets/startPhoto.png`);
    this.load.image(`progressBar0`, `./assets/progressBar0.png`);
    this.load.image(`progressBar10`, `./assets/progressBar10.png`);
    this.load.image(`progressBar20`, `./assets/progressBar20.png`);
    this.load.image(`progressBar40`, `./assets/progressBar40.png`);
    this.load.image(`progressBar60`, `./assets/progressBar60.png`);
    this.load.image(`progressBar80`, `./assets/progressBar80.png`);
    this.load.image(`progressBar100`, `./assets/progressBar100.png`);
    this.load.image(`textBg`, `./assets/textBg.png`);
    this.load.image(`recapBtn`, `./assets/btnRecap.png`);
    this.load.image(`messengerBtn`, `./assets/btnMessenger.png`);
    this.load.video(`vs`, `./assets/vs.mp4`);
    this.load.video(`story2`, `./assets/story-2.mp4`);
    this.load.video(`story3`, `./assets/story-3.mp4`);
  }

  onProgress(value) {
    console.log(`Loading: ${Math.round(value * 100)}%`);
    this.preloader.clear();
    this.preloader.fillStyle(0x7c48f1, 1);
    this.preloader.fillRect(
      0,
      this.game.config.height / 2,
      this.game.config.width * value,
      10
    );
  }

  onComplete() {
    this.preloader.destroy();
    this.scene.start(`start`);
  }

  create() {}
  update() {}
}
