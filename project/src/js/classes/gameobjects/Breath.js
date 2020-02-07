/* eslint-disable no-undef */
export default class Breath extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, longen, speed) {
    super(scene, x, y, `longen`, speed);
    this.speed = speed;
    //
    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    this.setScale(0.2);
    this.setDamping(true);
    this.setDrag(0.99);
    this.setMaxVelocity(200);
  }

  update() {
    this.y += this.speed;
  }
}
