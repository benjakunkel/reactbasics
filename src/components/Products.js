import React, { Component, Fragment } from 'react';
import Product from './Product';


class Productos extends Component {
  state = {
    productos: [
      {id: 1 , name: 'Camiseta Nike', precio: 1050},
      {id: 2 , name: 'Camiseta Adidas', precio: 950},
      {id: 3 , name: 'Camisa negra', precio: 1700},
      {id: 4 , name: 'Camiseta San Lorenzo Nike', precio: 2500},
      {id: 4 , name: 'Me quede sin ideas de productos', precio: 50}
    ]
  }

  render() {
    const {productos} = this.state;
    console.log(productos)
    return (
      <Fragment>
        <h1> Lista de productos </h1>
         {productos.map(producto => (
           <Product 
            key={producto.id}
            producto={producto}
            />
         ))}
      </Fragment>
    );
  }
}

export default Productos;
