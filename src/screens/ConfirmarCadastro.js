import React from 'react';
import './Formatacao.css';
//------------------------------------
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//importando button
import { Button } from 'primereact/button';

export default function ConfirmarCadastro({ navigation }) {
  return (
    <div className="Formatacao">
      <header className="Formatacao-header"> 
				<h1> Cadastro Confirmado </h1>
        <Button label="Confirmar" onClick={() => navigation.navigate('Login')}/>
      </header>
    </div>
  );
}