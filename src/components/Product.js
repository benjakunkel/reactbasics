import React, { Fragment } from 'react';

const Producto = ({producto}) => {
  return (
    <Fragment>
      <h4> Producto: {producto.name} </h4>
      <h6>Precio: ${producto.precio} </h6>
    </Fragment>
  );
};

export default Producto;