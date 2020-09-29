import React from 'react';
import logo from './logo.svg';
import './App.css';
import Producto from './Components/Producto';
import Navegacion from './Components/Navegacion';
import { Row,Container } from 'reactstrap';
import {listaProductos} from './litaproducto.json';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      listaProductos
    };
  }
  render(){
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos,i)=>{
        return(
          <Producto
          key={i}
          titulo={listaProductos.titulo}
          imagen={listaProductos.imagen}
          descripcion={listaProductos.descripcion}
          valor={listaProductos.valor}
          stock={listaProductos.stock}
          />
        )
      }
    );
  return (
    <Container>
      <Navegacion titulo="Sitio compras react"/>
      <Row>
     {arregloComponentes}
</Row>
</Container>
  );
}
}
export default App;
