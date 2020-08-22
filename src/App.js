import React, { Fragment } from 'react';
import './App.css';
import PrimerComponente from './components/PrimerComponente'
import Componente1 from './components/Componente1'

function App() {

  return (
    <Fragment>
      < PrimerComponente />
      < PrimerComponente />
      < PrimerComponente />
      < PrimerComponente />
      < PrimerComponente />
      < Componente1 />
   </Fragment>
  );
}

export default App;
