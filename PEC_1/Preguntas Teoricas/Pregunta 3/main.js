const {Rectangulo} = require('./Rectangulo.js');
const {Circulo} = require('./Circulo.js');
// creamos un array de objetos mezclados
let v = [];
v[0] = new Rectangulo(4, 3, 'blue');
v[1] = new Circulo(10, 'red');
for (let i = 0; i < v.length; i++) {
let s = v[i].area();
console.log('area = ' + s + ', color = ' + v[i].color);
}
