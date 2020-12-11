import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import Input from "./Input/Input"
import { Link } from "react-router-dom";
import "./Formulario.css"

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [salario, setSalario] = useState("");
  const [gf, setGf] = useState("");
  const [ge, setGe] = useState("");

  const FormularioRegister = () => {
    Axios.post("http://localhost:3001/registrar", {

      Nombre: nombre,
      Correo: correo,
      Salario: salario,
      GastosFijos: gf,
      GastosExtra: ge

    }).then((response) => {
      console.log(response)
    })
  }

  function handleChange(name, value) {
    if (name === "nombre") {
      setNombre(value);
      console.log(value)
    } else if (name === "correo") {
      setCorreo(value)
      console.log(value)
    } else if (name === "salario") {
      setSalario(value)
      console.log(value)
    } else if (name === "gf") {
      setGf(value)
      console.log(value)
    } else if (name === "ge") {
      setGe(value)
      console.log(value)
    }
  }

  return (
    <div className="container">
      <h1 className="title">Formulario</h1>
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Nombre</label>
            <Input attribute={{
              id: "nombre",
              name: "nombre",
              type: "text",
            }} handleChange={handleChange} />
          </div>
          <div class="form-group col-md-6">
            <label>Correo</label>
            <Input attribute={{
              id: "correo",
              name: "correo",
              type: "text",
            }} handleChange={handleChange} />
          </div>
        </div>
        <div class="form-group">
          <label>Salario</label>
          <Input attribute={{
            id: "salario",
            name: "salario",
            type: "text",
          }} handleChange={handleChange} />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Gastos fijos</label>
            <Input attribute={{
              id: "gf",
              name: "gf",
              type: "text",
            }} handleChange={handleChange} />
          </div>
          <div class="form-group col-md-6">
            <label>Gastos extra</label>
            <Input attribute={{
              id: "ge",
              name: "ge",
              type: "text",
            }} handleChange={handleChange} />
          </div>
        </div>
        <Link to="/datos">
      <Button type= "submit" variant="success" onClick={FormularioRegister}>
        Enviar
      </Button>
      </Link>
      </form>
    </div>
  );
}
