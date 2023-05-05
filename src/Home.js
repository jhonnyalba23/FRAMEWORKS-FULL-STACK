import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem-vindo(a) à minha aplicação!</h1>
      <p>Clique no botão abaixo para ir para a nossa outra página.</p>
      <Link to="/outra-pagina">Ir para outra página</Link>
    </div>
  );
}

export default Home;
