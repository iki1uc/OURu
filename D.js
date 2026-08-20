const NC = {
  x: 0,   // Axiom
  y: 0,   // Radius
  z: 0,   // Orbit
  t: 0,   // Tick

  tmpMap() {
    // Mehrdeutige Nutzung
    this.y = Math.sqrt(this.x*this.x + this.t);   // Radius
    this.z = Math.sin(this.t/10) * this.y;        // Orbit
  },

  run() {
    this.t++;
    this.x++;          // Axiom wächst
    this.tmpMap();     // TMP aktiviert
    console.log("NC:", this.x, this.y, this.z, this.t);
  }
};

setInterval(() => NC.run(), 1000);
