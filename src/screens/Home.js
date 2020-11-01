import React from 'react';
import logo from './pizza.png';
import './Formatacao.css';
//------------------------------------
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//importando button
//importando button
import { Button } from 'primereact/button';
//importando InputText

function Home({ navigation }) {
  return (
    <div className="Formatacao">
      <header className="Formatacao-header"> 

        <img src={logo} className="Formatacao-logo"
        alt="logo" />
        <br />
        <Button label="Fazer Pedido" onClick={() => navigation.navigate('Pedido')}/>
        <br />
        <Button label="Status do Pedido" onClick={() => navigation.navigate('StatusdoPedido')}/>
        <br />
        <br />
        <br />
        <Button label="Configurações" className='wrapper' onClick={() => navigation.navigate('Configuracao')}/>
        <br />
        <Button label="Voltar" onClick={() => navigation.goBack(null)}/>
      </header>
    </div>
  );
}

export default Home;
