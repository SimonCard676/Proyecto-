import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import Input from "../componentes/Input/Input"
import "./Datos.css"


export default function Datos() {
    const [correo, setCorreo] = useState("");
    const [resultado, setResultado] = useState("");

    const consultar = () => {
        Axios.get(`http://localhost:3001/consulta`, {
            params: {
                Correo: correo
            }
        })
            .then((response) => {

                console.log(response)
                const salario = parseInt(response.data[0].Salario,10)
                const gf = parseInt(response.data[0].GastosFijos,10)
                const ge = parseInt(response.data[0].GastosExtra,10)
                const resultado = salario-(gf+ge)
                setResultado(`El valor del dinero que usted puede ahorrar mensualmente es de: ${resultado}`)
            });
    }

    function handleChange(name, value) {
        if (name === "correo") {
            setCorreo(value);
            console.log(value)
        }
    }

    return (
        <div className="container">
            <h1 className="title">Consultar datos</h1>


            <label>Correo</label>
            <Input attribute={{
                id: "email",
                name: "correo",
                type: "text",
                placeholder: "Ingresa tu correo"
            }} handleChange={handleChange} />

            <Button variant="success" onClick={consultar}>
                Consultar 
            </Button>

            <label className="Separar">{resultado}</label>
        </div>
    )
}
