/* eslint-disable no-undef */
import Breath from '../gameobjects/Breath';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: `game`
    });
  }

  init() {
    console.log(`GameScene INIT`);
    this.gameOver = false;
    this.text;
    this.timedEvent;
    this.raceStarted = false;
    this.breathAmount = 1000;
    this.breathSpeed = 1;
    this.distance = 100;
    this.currentPos = 0;
    this.previousLeft = false;
    this.previousRight = false;
  }

  onComplete() {

  }

  create() {
    this.countDown();
    this.createBreath();
    this.createBreathBar();
  }

  countDown() {
    this.initialTime = 3;

    this.text = this.add.text(this.game.config.width / 2, this.game.config.height / 2, `${this.initialTime}`, {
      fontSize: 48,
      fill: `#ffffff`
    }).setOrigin(0.5);

    //aftellen
    this.timedEvent = this.time.addEvent({delay: 1000, callback: this.onEvent, callbackScope: this, repeat: 2});
  }

  onEvent() {
    if (this.initialTime > 1) {
      //countdown van 3 tot 0
      this.initialTime -= 1;
      this.text.setText(`${this.initialTime}`);
    } else {
      //begin race als er afgeteld is
      this.text.setText(`Go`);
      this.time.addEvent({delay: 1000, callback: this.destroyText, callbackScope: this});
      this.raceStarted = true;
      this.race();
    }
  }

  destroyText() {
    console.log('destroy text');
    this.text.setVisible(false);
  }

  race() {
    if (this.raceStarted === true) {
      console.log('race started');
      this.createTimer();
      this.createClock();
      this.rightArmBtn();
      this.leftArmBtn();

      this.clockEvent = this.time.addEvent({delay: 1000, callback: this.setClockTxt, callbackScope: this});
    }
  }

  rightArmBtn() {
    this.btn = this.add.image(this.game.config.width - 96, this.game.config.height / 1.25, 'right').setInteractive();
    this.btn.setScale(2);
    this.btn.on('pointerdown', this.moveForwardRight, this);
  }

  leftArmBtn() {
    this.prevBtn = this.add.image(96, this.game.config.height / 1.25, 'left').setInteractive();
    this.prevBtn.setScale(2);
    this.prevBtn.on('pointerdown', this.moveForwardLeft, this);
  }

  moveForwardLeft() {
    if (!this.previousLeft) {
      this.currentPos += 4;
      this.previousLeft = true;
      this.previousRight = false;
      console.log(this.currentPos);
    } else {
      this.currentPos += 1;
      console.log(this.currentPos);
    }
  }

  moveForwardRight() {
    if (!this.previousRight) {
      this.currentPos += 4;
      this.previousRight = true;
      this.previousLeft = false;
      console.log(this.currentPos);
    } else {
      this.currentPos += 1;
      console.log(this.currentPos);
    }
  }

  setClockTxt() {
    console.log('tick');
  }

  createBreath() {
    this.breath = new Breath(
      this,
      Phaser.Math.Between(100, this.game.config.width - 100),
      0,
      `breath`,
      this.breathSpeed
    );
    console.log('breath has been created');
    this.breath.setInteractive();
    this.breath.on('pointerdown', this.breathHit, this);
  }

  // maken van timers in game
  createTimer() {
    this.breathGenerator = this.time.addEvent({
      delay: 4000,
      callback: this.createBreath,
      callbackScope: this,
      loop: true
    });
  }

  createBreathBar() {
    this.breathBar = new Phaser.Geom.Rectangle((this.game.config.width / 2) - 125, 48, this.breathAmount / 4, 8);
    this.graphics = this.add.graphics({fillStyle: {color: 0xfcc101}});
    this.graphics.fillRectShape(this.breathBar);
  }

  createClock() {
    this.timeTxt = this.add.text(this.game.config.width - 96, 36, '00:00', {
      fontSize: 16,
      fill: `#ffffff`
    }).setOrigin(0.5);
  }

  // het event als je breath raakt
  breathHit() {
    console.log('adem');
    this.breath.destroy();
    this.breathAmount += 100;
  }

  update() {
    if (this.raceStarted === true && !this.gameOver) {
      this.updateBreath();
      this.updateBreathBar();
    }
  }

  updateBreath() {
    if (this.breathAmount !== 0) {
      this.breathAmount -= 1;
      this.breath.y += this.breathSpeed;
      if (this.breath.y > this.game.config.height) {
        this.breath.destroy(true);
        console.log('breath destroyed');
      }
    } else if (this.breathAmount === 0) {
      this.gameOver = true;
    }
  }

  updateBreathBar() {
    this.graphics.clear();
    this.breathBar = new Phaser.Geom.Rectangle((this.game.config.width / 2) - 125, 48, this.breathAmount / 4, 8);
    this.graphics = this.add.graphics({fillStyle: {color: 0xfcc101}});
    this.graphics.fillRectShape(this.breathBar);
  }
}
