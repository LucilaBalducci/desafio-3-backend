const express = require ("express")
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.send(productos);
})


app.listen(port, () => {
	console.log("Tu servidor esta corriendo en el puerto: " + port);
})
