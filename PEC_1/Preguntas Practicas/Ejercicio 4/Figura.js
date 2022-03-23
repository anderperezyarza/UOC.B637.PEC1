class Figura extends HTMLElement {
constructor() {
super();
this.color = "";
this.attachShadow({mode: 'open'});
}
connectedCallback() {
this.render();
}
render() {
// Método abstracto.
// Las subclases concretan la forma de la Figura
}
}
exports.Figura = Figura;
