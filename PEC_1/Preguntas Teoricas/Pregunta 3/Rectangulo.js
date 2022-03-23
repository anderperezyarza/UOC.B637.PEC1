const {Figura} = require('./Figura.js');
class Rectangulo extends Figura {
constructor(b, h, c) {
super(c);
this.base = b;
this.altura = h;
}
area() {
return this.base * this.altura;
}
}
exports.Rectangulo = Rectangulo;
