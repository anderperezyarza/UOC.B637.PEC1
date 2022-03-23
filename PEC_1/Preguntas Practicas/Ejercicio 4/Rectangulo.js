const {Figura} = require('./Figura.js');
class Rectangulo extends Figura {
constructor() {
super();
}
connectedCallback() {
super.color = this.getAttribute("color");
this.base = this.getAttribute("base");
this.altura = this.getAttribute("altura");
this.render();
}
area() {
return this.base * this.altura;
}
render() {
let contenido = `
<svg>
<rect x="0" y="0"
width="${this.base}" height="${this.altura}"
style="fill:${this.color}" />
</svg>
`;
this.shadowRoot.innerHTML = contenido;
}
}
customElements.define('wg-rectangulo', Rectangulo);
exports.Rectangulo = Rectangulo;
