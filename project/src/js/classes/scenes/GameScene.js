/* eslint-disable no-undef */
import Breath from '../gameobjects/Breath';
import Player from '../gameobjects/Player';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: `game`
    });
  }

  init() {
    console.log(`GameScene init`);
    this.gameOver = false;
    this.text;
    this.timedEvent;
    this.raceStarted = false;
    this.breathAmount = 1000;
    this.breathSpeed = 1;
    this.distance = 100;
    this.currentPos = 0;
    this.currentMillis = 0;
    this.currentSeconds = 0;
    this.previousLeft = false;
    this.previousRight = false;
    this.breathBarGraphics = this.add.graphics();
  }

  onComplete() {
    this.scene.start(`results`, {score: `${this.currentSeconds}:${this.currentMillis}`});
  }

  create() {
    this.createBackground();
    this.countDown();
    this.createBreath();
    this.createMeterTxt();
  }

  onGameOver() {
    this.scene.start(`gameover`);
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

    this.ballen = this.add.tileSprite((this.game.config.width / 2) - 24, (this.game.config.height / 2) - 60, this.game.config.width - 48, this.game.config.height - 168, 'ballen');

  }

  // aftellen voor het begin van de race
  countDown() {
    this.initialTime = 3;

    this.text = this.add.text(this.game.config.width / 2, this.game.config.height / 2, `${this.initialTime}`, {
      fontSize: 48,
      fill: `#ffffff`
    }).setOrigin(0.5);

    // elke seconde onEvent() oproepen
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
    this.text.setVisible(false);
  }

  // race start na aftellen
  race() {
    if (this.raceStarted === true) {
      console.log('race started');
      this.createSwimmer();
      this.createBreathGenerator();
      this.rightArmBtn();
      this.leftArmBtn();

      this.clockEvent = this.time.addEvent({delay: 1, callback: this.clockScore, callbackScope: this, loop: true});
    }
  }

  clockScore() {
    this.currentMillis += 1;

    if (this.currentMillis > 59) {
      this.currentSeconds += 1;
      this.currentMillis = 0;
    }

    console.log(`${this.currentSeconds}:${this.currentMillis}`);
  }

  createSwimmer() {
    this.swimmer = new Player(this, this.game.config.width / 3, this.game.config.height / 3);
  }

  rightArmBtn() {
    this.btn = this.add.image(this.game.config.width - 96, this.game.config.height / 1.15, 'right').setInteractive();
    this.btn.setScale(0.25);
    this.btn.on('pointerdown', this.moveForwardRight, this);
    this.btn.on('pointerup', this.handlePointerRightBtn, this);
  }

  leftArmBtn() {
    this.leftBtn = this.add.image(96, this.game.config.height / 1.15, 'left').setInteractive();
    this.leftBtn.setScale(0.25);
    this.leftBtn.on('pointerdown', this.moveForwardLeft, this);
    this.leftBtn.on('pointerup', this.handlePointerLeftBtn, this);
  }

  handlePointerRightBtn() {
    this.btn.y -= 5;
  }

  handlePointerLeftBtn() {
    this.leftBtn.y -= 5;
  }

  moveForwardLeft() {
    this.leftBtn.y += 5;
    if (!this.previousLeft) {
      this.currentPos += 2;
      this.ballen.tilePositionY -= 10;
      this.previousLeft = true;
      this.previousRight = false;
      console.log(`current pos: ${this.currentPos}M`);
    } else {
      this.currentPos += 1;
      this.ballen.tilePositionY -= 5;
      console.log(`current pos: ${this.currentPos}M`);
    }
  }

  moveForwardRight() {
    this.btn.y += 5;
    if (!this.previousRight) {
      this.currentPos += 2;
      this.ballen.tilePositionY -= 10;
      this.previousRight = true;
      this.previousLeft = false;
      console.log(`current pos: ${this.currentPos}M`);
    } else {
      this.currentPos += 1;
      this.ballen.tilePositionY -= 5;
      console.log(`current pos: ${this.currentPos}M`);
    }
  }

  // longen
  createBreath() {
    this.breath = new Breath(this, Phaser.Math.Between(100, this.game.config.width - 100), 0, this.breathSpeed, this.breathAmount);
    console.log('breath has been created');
    
    this.breath.on('pointerdown', this.breathHit, this);
  }

  // het event als je breath raakt
  breathHit() {
    this.breathAmount += 200;
  }

  // creeërt longen om 4-5 seconden
  createBreathGenerator() {
    this.breathGenerator = this.time.addEvent({
      delay: 6000,
      callback: this.createBreath,
      callbackScope: this,
      loop: true
    });
  }

  // progresstext van afstand
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

  update() {
    if (this.raceStarted === true && !this.gameOver) {
      this.updateBreath();
      this.updateBreathBar();
      this.updateMeterTxt();
    }

    console.log(this.breath.y);
    
    if (this.currentPos > this.distance - 1) {
      this.onComplete();
    }

    if (this.gameOver) {
      this.onGameOver();
    }
  }

  updateBreath() {
    if (this.breathAmount !== 0) {
      this.breathAmount -= 1;
      this.breath.y += this.breathSpeed;
      if (this.breath.y > this.game.config.height) {
        this.breath.destroy();
        console.log('breath destroyed');
      }
    } else if (this.breathAmount === 0) {
      this.gameOver = true;
    }
  }

  // progressbar van longen
  updateBreathBar() {
    this.breathBarGraphics.clear();
    this.breathBar = new Phaser.Geom.Rectangle((this.game.config.width / 2) - 62.5, 48, this.breathAmount / 8, 16);
    this.breathBarGraphics = this.add.graphics({fillStyle: {color: 0xa4f761}});
    this.breathBarGraphics.fillRectShape(this.breathBar);
  }

  updateMeterTxt() {
    this.meterTxt.setText(`${this.currentPos}M`);
  }
}
