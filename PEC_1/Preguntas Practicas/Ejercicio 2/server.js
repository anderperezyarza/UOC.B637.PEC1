const express = require('express');
let port = 8000;
let app = express();
app.use(express.static('.')); // Sirve archivos estáticos
app.listen(port);
console.log("Listening on " + port);
