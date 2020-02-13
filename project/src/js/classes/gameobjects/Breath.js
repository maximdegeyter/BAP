/* eslint-disable no-undef */
export default class Breath extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y) {
    super(scene, x, y, `long`);

    scene.add.existing(this);
    //scene.physics.add.existing(this);

    this.setScale(0.4);
    this.setInteractive();
  }
}
