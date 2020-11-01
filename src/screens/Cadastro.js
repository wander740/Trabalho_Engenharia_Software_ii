import React from 'react';
import './Formatacao.css';
//------------------------------------
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//importando button
import { Button } from 'primereact/button';
//importando InputText
import { InputText } from 'primereact/inputtext';
//importando InputMask(Coloca formatação e limite nas entradas ex. cpf= 999.999.999-99)
import { InputMask } from 'primereact/inputmask';
//importando Password (coloca censura na senha e nível de força de segurança da senha)
import { Password } from 'primereact/password';

export default function Cadastro({ navigation }) {
  return (
		<div className="Formatacao">
    	<header className="Formatacao-header"> 	
				<span className="p-float-label">
          <InputText id="cadastroNome" required={true}/>
          <label htmlhtmlfor="cadastroNome">Nome Completo</label>
        </span>
        <br />
        <span className="p-float-label">
          <InputText id="cadastroEmail" required={true}/>
          <label htmlhtmlfor="cadastroEmail">Email</label>
        </span>
        <br />
        <span className="p-float-label">
          <Password id="cadastroSenha" promptLabel="Digite uma Senha" required={true} requiredMessage="Digite uma Senha" weakLabel="Senha Fraca" mediumLabel="Senha Média" strongLabel="Senha Forte" maxLength="12" minimum="6"/>
          <label htmlhtmlfor="cadastroSenha">Senha</label>
        </span>
        <br />
        <span className="p-float-label">
          <Password id="cadastroSenhaSenha" promptLabel="Confirmar Senha" feedback = {false} required={true} maxLength="12" minimum="6"/>
          <label htmlhtmlfor="cadastroSenhaSenha">Confirmar Senha</label>
        </span>
        <br />
        <span className="p-float-label">
						<InputMask id="cadastroCPF" mask="999.999.999-99" required={true}/>
						<label htmlhtmlfor="cadastroCPF">CPF</label>
				</span>
        <br />
        <span className="p-float-label">
        	<InputText id="cadastroEndereço" required={true}/>
          <label htmlhtmlfor="cadastroEndereço">Endereço</label>
        </span>
        <br />
				<span className="p-float-label">
						<InputMask id="cadastroCelular" mask="(99) 99999-9999" required={true}/>
						<label htmlhtmlfor="cadastroCelular">Nº Celular</label>
				</span>	
        <br />
        <Button label="Cadastrar" onClick={() => navigation.navigate('ConfirmarCadastro')}/>
        <br />
        <Button label="Voltar" onClick={() => navigation.goBack(null)}/>
      </header>
    </div>
  );
}