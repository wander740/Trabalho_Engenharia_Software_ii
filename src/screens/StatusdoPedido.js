import React from 'react';
import './Formatacao.css';
//------------------------------------
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//importando button
//importando button
import { Button } from 'primereact/button';

import { ProgressBar } from 'primereact/progressbar';

function StatusdoPedido({ navigation }) {
  return (
    <div className="Formatacao">
      <header className="Formatacao-header"> 
      <div className="p-text-center">O pedido está sendo preparado!</div>
      <Button label="Voltar" onClick={() => navigation.goBack(null)}/>
      </header>
    </div>
  );
}

export default StatusdoPedido;
