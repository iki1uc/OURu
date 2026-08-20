const NC = {
  A: 0,   // Axiom
  R: 0,   // Radius
  O: 0,   // Orbit
  T: 0,   // Tick

  tmp() {
    this.R = Math.sqrt(this.A*this.A + this.T);
    this.O = Math.sin(this.T/10) * this.R;
  },

  axiom() {
    return {
      ax: this.A + this.R,
      ay: this.R - this.O,
      az: (this.A + this.T) / 2
    };
  },

  run() {
    this.T++;
    this.A++;
    this.tmp();

    const AX = this.axiom();
    console.log("NC:", this.A, this.R, this.O, this.T);
    console.log("AXIOM:", AX);
  }
};

setInterval(() => NC.run(), 1000);
