import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import OutraPagina from './OutraPagina';

function App() {
  return (
    <div>
        <Route path = "/OutraPagina" component= {OutraPagina}/>
        <Link to="/OutraPagina">Fechando o link</Link>


      

     <h1>TESTE</h1>
    </div>
  );
}

export default App;

