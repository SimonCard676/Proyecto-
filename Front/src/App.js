import './App.css';
import { BrowserRouter, Route, Router, Switch } from "react-router-dom"
import Principal from "./paginas/Principal.jsx"
import Datos from "./paginas/Datos.jsx"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/datos" component={Datos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
