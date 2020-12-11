const express = require("express");
const app = express();
const routes = require("./Rutas/routes");
const cors = require("cors")

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  }));

app.set("port", 3001);

app.get("/", (req, res) => {
    res.send("Ruta por default");
})

app.use("/",routes);

app.listen(app.get("port"), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`)
})