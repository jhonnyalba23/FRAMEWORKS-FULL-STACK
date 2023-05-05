import React from 'react';
import { Link } from 'react-router-dom';

function OutraPagina() {
  return (
    <div>
      <h1>Outra Página</h1>
      <p>Essa é outra página da minha aplicação.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}

export default OutraPagina;
