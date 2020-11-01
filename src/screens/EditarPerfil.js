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
import { InputText } from 'primereact/inputtext';
//importando Password (coloca censura na senha e nível de força de segurança da senha)
import { Password } from 'primereact/password';

function EditarPerfil({ navigation }) {
    return (
        <div className="Formatacao">
            <header className="Formatacao-header"> 
                <span className="p-float-label">
                    <InputText id="cadastroNome" required={true}/>
                    <label htmlhtmlfor="cadastroNome">Nome Completo</label>
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
                <Button label="Cadastrar" onClick={() => navigation.navigate('ConfirmarEditarPerfil')}/>
                <br />
                <Button label="Voltar" onClick={() => navigation.goBack(null)}/>
            </header>
        </div>
    );
}

export default EditarPerfil;
