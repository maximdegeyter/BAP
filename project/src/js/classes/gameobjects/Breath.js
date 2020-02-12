/* eslint-disable no-undef */
export default class Breath extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, speed, amount) {
    super(scene, x, y, `long`);
    this.speed = speed;
    this.amount = amount;

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(0.4);
    this.setInteractive();
    this.on('pointerdown', this.breathHit, this);
  }

  // het event als je breath raakt
  breathHit() {
    console.log('adem');
    this.destroy();
    this.amount += 200;
  }

  update() {
    // long moet zakken
    this.y += this.speed;

    // zelfvernietiging als het uit beeld komt
    if (this.y > this.game.config.height) {
      this.destroy();
      console.log('breath destroyed');
    }
  }
}
