/* eslint-disable no-undef */
export default class Breath extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, breath, speed) {
    super(scene, x, y, `breath`, speed);
    this.speed = speed;
    //
    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    this.setScale(0.5);
    this.setDamping(true);
    this.setDrag(0.99);
    this.setMaxVelocity(200);
  }

  update() {
    this.y += this.speed;
  }
}
