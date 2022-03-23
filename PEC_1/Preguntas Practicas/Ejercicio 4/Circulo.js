const {Figura} = require('./Figura.js');
class Circulo extends Figura {
constructor() {
super();
}
connectedCallback() {
super.color = this.getAttribute("color");
this.radio = this.getAttribute("radio");
this.render();
}
area() {
return Math.PI * Math.pow(this.radio, 2);
}
render() {
let contenido = `
<svg>
<circle cx="${this.radio}"
cy="${this.radio}" r="${this.radio}"
style="fill:${this.color}" />
</svg>
`;
this.shadowRoot.innerHTML = contenido;
}
}
customElements.define('wg-circulo', Circulo);
