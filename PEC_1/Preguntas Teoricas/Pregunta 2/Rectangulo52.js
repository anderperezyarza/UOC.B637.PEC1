class Rectangulo {
constructor(b, h) {
this.base = b;
this.altura = h;
}
area() {
return this.base * this.altura;
}
}
module.exports = new Rectangulo(5, 2);
