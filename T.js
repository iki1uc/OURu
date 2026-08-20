if (this.tick > 10000) {
  this.h = this.b = this.t = 0;
  this.tick = 0;
}
this.orbit = Math.sin(this.tick / 10) * (this.r * 0.1);
matrix3x3() {
  return [
    [this.h, this.b, this.t],
    [this.r.toFixed(2), this.orbit.toFixed(2), this.tick],
    [this.h+this.b, this.b+this.t, this.t+this.h]
  ];
}
