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
    this.scene.start(`results`);
  }

  create() {
    this.createBackground();
    this.countDown();
    this.createBreath();
    this.createBreathBar();
    this.createMeterTxt();
  }

  createBackground() {
    this.bg = new Phaser.Geom.Rectangle(0, 0, this.game.config.width, this.game.config.height);
    this.graphics = this.add.graphics({fillStyle: {color: 0x7c48f1}});
    this.graphics.fillRectShape(this.bg);

    this.water = new Phaser.Geom.Rectangle(24, 24, this.game.config.width - 48, this.game.config.height - 168);
    this.graphics = this.add.graphics({fillStyle: {color: 0x93d5de}});
    this.graphics.fillRectShape(this.water);
    this.stroke = this.add.graphics();
    this.stroke.lineStyle(4, 0x00000, 100);
    this.stroke.strokeRect(24, 24, this.game.config.width - 48, this.game.config.height - 168);

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
      this.rightArmBtn();
      this.leftArmBtn();

      this.clockEvent = this.time.addEvent({delay: 1000, callback: this.clockScore, callbackScope: this});
    }
  }

  clockScore() {
    console.log('tick');
  }

  rightArmBtn() {
    this.btn = this.add.image(this.game.config.width - 96, this.game.config.height / 1.15, 'right').setInteractive();
    this.btn.setScale(0.25);
    this.btn.on('pointerdown', this.moveForwardRight, this);
  }

  leftArmBtn() {
    this.prevBtn = this.add.image(96, this.game.config.height / 1.15, 'left').setInteractive();
    this.prevBtn.setScale(0.25);
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
      `longen`,
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
    this.breathBar = new Phaser.Geom.Rectangle((this.game.config.width / 2) - 62.5, 48, this.breathAmount / 8, 16);
    this.graphics = this.add.graphics({fillStyle: {color: 0xa4f761}});
    this.graphics.fillRectShape(this.breathBar);
  }

  createMeterTxt() {
    this.txtBackground = new Phaser.Geom.Rectangle(266, 36, 61, 40);
    this.bgColor = this.add.graphics({fillStyle: {color: 0xffffff}});
    this.bgColor.fillRectShape(this.txtBackground);

    this.meterTxt = this.add.text(306, 56, `0M`, {
      fontSize: 24,
      fill: `#000000`,
      align: 'right'
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
      this.updateMeterTxt();
      console.log(this.clockEvent.getProgress().toString().substr(0, 4));
    }

    if (this.currentPos > this.distance - 1 || this.breathAmount < 1) {
      this.onComplete();
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
    this.breathBar = new Phaser.Geom.Rectangle((this.game.config.width / 2) - 62.5, 48, this.breathAmount / 8, 16);
    this.graphics = this.add.graphics({fillStyle: {color: 0xa4f761}});
    this.graphics.fillRectShape(this.breathBar);
  }

  updateMeterTxt() {
    this.meterTxt.setText(`${this.currentPos}M`);
  }
}
