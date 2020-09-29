import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  CardImg,
} from "reactstrap";

import "./FichaProducto.css";
import { listaCarrito } from "../listaCarrito.json";


var formatNumber = {
    separador: ".", // separador para los miles
    sepDecimal: ',', // separador para los decimales
    formatear:function (num){
    num +='';
    var splitStr = num.split('.');
    var splitLeft = splitStr[0];
    var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
    var regx = /(\d+)(\d{3})/;
    while (regx.test(splitLeft)) {
    splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
    }
    return this.simbol + splitLeft +splitRight;
    },
    new:function(num, simbol){
    this.simbol = simbol ||'';
    return this.formatear(num);
    }
   }


class FichaProducto extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modal: false,
      stock: props.props.stock,
      listaCarrito
    };
    this.toggle = this.toggle.bind(this);
    this.agregarCarrito = this.agregarCarrito.bind(this);
  
  }
  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }
  agregarCarrito() {
   
    listaCarrito.push({
      titulo: this.props.props.titulo,
      valor: this.props.props.valor
    });
    if(parseInt(this.state.stock)===0){
        alert("No quedan mas productos de este tipo")
        this.setState((prevState) => ({
            modal: !prevState.modal,
            stock: parseInt(prevState.stock)
          }));
    }else{
    this.setState((prevState) => ({
      modal: !prevState.modal,
      stock: parseInt(prevState.stock)-1
    }));
  }
}
  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Ver Ficha</Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader>{this.props.props.titulo}</ModalHeader>
          <ModalBody>
            <CardImg src={this.props.props.imagen} />
            <p>El detalle del producto seleccionado es el siguiente :</p>
            {this.props.props.descripcion}
            <p>
              Este producto tiene un valor de <b>{formatNumber.new(this.props.props.valor)}</b>{" "}
              pesos.
            </p>
            <p>
              Hay <b>{this.state.stock}</b> unidades de este producto.
            </p>
          </ModalBody>
          <ModalFooter className="modalFooter">
            <Button color="primary" onClick={this.agregarCarrito}>
              Agregar al Carrito
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Volver atras
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
export default FichaProducto;
