const {Figura} = require('./Figura.js');
class Circulo extends Figura {
constructor(r, c) {
super(c);
this.radio = r;
}
area() {
return Math.PI * Math.pow(this.radio, 2);
}
}
exports.Circulo = Circulo;
