/* eslint-disable no-undef */
export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, `zwemmer`);
    //
    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    this.setScale(0.25);
    this.setCollideWorldBounds(true);
  }
}
