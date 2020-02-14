/* eslint-disable no-undef */
export default class ScheduleScene extends Phaser.Scene {
  constructor() {
    super({
      key: `schedule`
    });
  }

  init() {
    console.log(`Schedule scene`);
    this.selectDay = true;
    this.photo = this.add.image(this.game.config.width / 2, this.game.config.height / 2.8143, 'pieter');
  }

  onComplete() {
  }

  create() {
    this.createBackground();
    this.createNavBar();
    this.createSelectedDay();
    this.createDays();
    this.nextBtn();
    this.prevBtn();
    this.createRecapBtn();
    this.createMessengerBtn();
  }

  createBackground() {
    this.bg = new Phaser.Geom.Rectangle(0, 0, this.game.config.width, this.game.config.height);
    this.graphics = this.add.graphics({fillStyle: {color: 0xffffff}});
    this.graphics.fillRectShape(this.bg);
  }

  createNavBar() {
    this.navBg = new Phaser.Geom.Rectangle(0, 16, this.game.config.width, 64);
    this.navBgGraphics = this.add.graphics({fillStyle: {color: 0x2a282b}});
    this.navBgGraphics.fillRectShape(this.navBg);
  }

  createSelectedDay() {
    this.selectedDay = new Phaser.Geom.Rectangle((this.game.config.width / 2) - ((this.game.config.width / 7) / 2), 10, this.game.config.width / 7, 80);
    this.dayGraphics = this.add.graphics({fillStyle: {color: 0xffffff}});
    this.dayGraphics.fillRectShape(this.selectedDay);
    this.stroke = this.add.graphics();
    this.stroke.lineStyle(2, 0x2a282b, 100);
    this.stroke.strokeRect((this.game.config.width / 2) - ((this.game.config.width / 7) / 2), 10, this.game.config.width / 7, 80);
  }

  createPhoto() {
    if (this.selectDay) {
      this.photo.destroy();
      this.photo = this.add.image(this.game.config.width / 2, this.game.config.height / 2.8143, 'pieter');
    } else {
      this.photo.destroy();
      this.photo = this.add.image(this.game.config.width / 2, this.game.config.height / 3.06, 'emma');
    }
  }

  createDays() {
    this.text3 = this.add.text(this.game.config.width / 2 - (this.game.config.width / 7), 50, `3`, {
      fontSize: 36,
      fill: `#ffffff`
    }).setOrigin(0.5);

    this.text3Nxt = this.add.text(this.game.config.width / 2 - (this.game.config.width / 7), 50, `4`, {
      fontSize: 36,
      fill: `#ffffff`
    }).setOrigin(0.5);

    this.text2 = this.add.text(this.game.config.width / 2 - ((this.game.config.width / 7) * 2), 50, `2`, {
      fontSize: 36,
      fill: `#ffffff`
    }).setOrigin(0.5);

    this.text2Nxt = this.add.text(this.game.config.width / 2 - ((this.game.config.width / 7) * 2), 50, `3`, {
      fontSize: 36,
      fill: `#ffffff`
    }).setOrigin(0.5);

    this.text4 = this.add.text(this.game.config.width / 2, 50, `4`, {
      fontSize: 36,
      fill: `#000000`
    }).setOrigin(0.5);

    this.text4Nxt = this.add.text(this.game.config.width / 2, 50, `5`, {
      fontSize: 36,
      fill: `#000000`
    }).setOrigin(0.5);

    this.text5 = this.add.text(this.game.config.width / 2 + (this.game.config.width / 7), 50, `5`, {
      fontSize: 36,
      fill: `#ffffff`
    }).setOrigin(0.5);

    this.text5Nxt = this.add.text(this.game.config.width / 2 + (this.game.config.width / 7), 50, `6`, {
      fontSize: 36,
      fill: `#ffffff`
    }).setOrigin(0.5);

    this.text6 = this.add.text(this.game.config.width / 2 + ((this.game.config.width / 7) * 2), 50, `6`, {
      fontSize: 36,
      fill: `#ffffff`
    }).setOrigin(0.5);

    this.text6Nxt = this.add.text(this.game.config.width / 2 + ((this.game.config.width / 7) * 2), 50, `7`, {
      fontSize: 36,
      fill: `#ffffff`
    }).setOrigin(0.5);
  }

  nextBtn() {
    this.nxtBtn = this.add.image(this.game.config.width - ((this.game.config.width / 7) / 2), 50, 'next').setInteractive();
    this.nxtBtn.setScale(0.3);
    this.nxtBtn.on('pointerdown', this.handleClickBtn, this);
  }

  prevBtn() {
    this.nxtBtn = this.add.image((this.game.config.width / 7) / 2, 50, 'next').setInteractive();
    this.nxtBtn.setScale(0.3);
    this.nxtBtn.setAngle(180);
    this.nxtBtn.on('pointerdown', this.handleClickBtn, this);
  }

  handleClickBtn() {
    this.selectDay = !this.selectDay;
  }

  createRecapBtn() {
    this.recapBtn = this.add.image(this.game.config.width / 2, this.game.config.height / 1.5, 'recapBtn').setInteractive();
    this.recapBtn.setScale(0.3);
    this.recapBtn.on('pointerdown', this.handleClickRecapBtn, this);
  }

  handleClickRecapBtn() {
    this.scene.start(`info`);
  }

  createMessengerBtn() {
    this.messengerBtn = this.add.image(this.game.config.width / 2, this.game.config.height / 1.25, 'messengerBtn');
    this.messengerBtn.setScale(0.3);
    this.messengerBtn.on('pointerdown', this.handleClickRecapBtn, this);
  }

  update() {
    this.createPhoto();

    if (this.selectDay) {
      this.text3.setVisible(true);
      this.text2.setVisible(true);
      this.text4.setVisible(true);
      this.text5.setVisible(true);
      this.text6.setVisible(true);
      this.text3Nxt.setVisible(false);
      this.text2Nxt.setVisible(false);
      this.text4Nxt.setVisible(false);
      this.text5Nxt.setVisible(false);
      this.text6Nxt.setVisible(false);
      this.messengerBtn.setAlpha(1);
    } else {
      this.text3.setVisible(false);
      this.text2.setVisible(false);
      this.text4.setVisible(false);
      this.text5.setVisible(false);
      this.text6.setVisible(false);
      this.text2Nxt.setVisible(true);
      this.text3Nxt.setVisible(true);
      this.text4Nxt.setVisible(true);
      this.text5Nxt.setVisible(true);
      this.text6Nxt.setVisible(true);
      this.messengerBtn.setAlpha(0.5);
    }
  }

}
