import React from "react";
import {
  CardImg,
  Card,
  Col,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./Producto.css";
import FichaProducto from './FichaProducto';

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

class Producto extends React.Component {
    render(){
  return (
    <Col sm="4">
      <Card className="Card">
        <CardImg src={this.props.imagen} />
        <CardBody>
          <CardTitle>{this.props.titulo}</CardTitle>
          <CardSubtitle>
            <b>Valor: </b>{formatNumber.new(this.props.valor)}
          </CardSubtitle>
            <CardText>{this.props.descripcion}</CardText>
            <FichaProducto props={this.props}/>
        </CardBody>
      </Card>
    </Col>
  );
}
}
export default Producto;
