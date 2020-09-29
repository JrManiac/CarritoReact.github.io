import React from "react";
import {
  Badge,
  Button,
  Popover,
  PopoverBody,
  PopoverHeader,
  Table,
} from "reactstrap";
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

class Carro extends React.Component {
  constructor() {
    super();
    this.state = {
      popoverOpen: false,
      listaCarrito
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState((prevState) => ({
      popoverOpen: !prevState.popoverOpen,
    }));
  }
  

  render() {
      var total=0;
      const arregloCarrito = this.state.listaCarrito.map(
          (listaCarrito,i)=> {
              total = (parseInt(listaCarrito.valor)+total);
              return(
                  <tr>
                      <td>{(i+=1)}</td>
                      <td>{listaCarrito.titulo}</td>
                      <td>{listaCarrito.valor}</td>
                  </tr>
                  
              );
          }
      )
    return (
      <div>
        <Button id="Popover1" color="info">
          <span className="material-icons">shopping_cart</span>
    <Badge color="secondary">{arregloCarrito.length}</Badge>
        </Button>
        <Popover
          target="Popover1"
          placement="bottom"
          isOpen={this.state.popoverOpen}
          toggle={this.toggle}
        >
          <PopoverHeader></PopoverHeader>
          <PopoverBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {arregloCarrito}
              </tbody>
              <tfoot>
              <tr>
                    <td><b>Total</b></td>
                    <td></td>
                    <td>{formatNumber.new(total)}</td>
                </tr>
             </tfoot>
            </Table>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}
export default Carro;
