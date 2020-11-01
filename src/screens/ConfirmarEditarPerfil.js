import React from 'react';
import './Formatacao.css';
//------------------------------------
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//importando button
//importando button
import { Button } from 'primereact/button';
//importando InputText

function ConfirmarEditarPerfil({ navigation }) {
  return (
    <div className="Formatacao">
      <header className="Formatacao-header"> 
				<h3> Cadastro Editado Com Sucesso </h3>
        <Button label="Confirmar" onClick={() => navigation.navigate('Home')}/>
      </header>
    </div>
  );
}

export default ConfirmarEditarPerfil;
