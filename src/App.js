import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoLista from './components/EmpleadoLista';

const App = () => {
  return (
    <div>
      <h1 className='text-center display-1'>Lista de empleados.</h1>
      <hr/>
      <EmpleadoLista></EmpleadoLista>
    </div>
  );
};

export default App;