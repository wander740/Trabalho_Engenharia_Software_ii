import React from 'react';
import './Formatacao.css';
//------------------------------------
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//importando button
//importando button
import { Button } from 'primereact/button';
//importando Dropdown
import { Dropdown } from 'primereact/dropdown';

/*"produto": [
      {
        "id": 1,
        "nome": "tradicional",
        "preco": 0,
        "tipo_id": 1
      },
      {
        "id": 2,
        "nome": "fina",
        "preco": 0,
        "tipo_id": 1
      },
      {
        "id": 3,
        "nome": "grande",
        "preco": 20,
        "tipo_id": 2
      },
      {
        "id": 4,
        "nome": "media",
        "preco": 15,
        "tipo_id": 2
      },
      {
        "id": 5,
        "nome": "pequena",
        "preco": 10,
        "tipo_id": 2
      },
      {
        "id": 6,
        "nome": "mussarela",
        "preco": 10,
        "tipo_id": 3
      },
      {
        "id": 7,
        "nome": "calabresa",
        "preco": 12,
        "tipo_id": 3
      },
      {
        "id": 7,
        "nome": "portuguesa",
        "preco": 15,
        "tipo_id": 3
      },
      {
        "id": 8,
        "nome": "bacon",
        "preco": 16,
        "tipo_id": 3
      },
      {
        "id": 8,
        "nome": "frango",
        "preco": 15,
        "tipo_id": 3
      },
      {
        "id": 8,
        "nome": "sem borda",
        "preco": 0,
        "tipo_id": 4
      },
      {
        "id": 9,
        "nome": "Catupiry",
        "preco": 3,
        "tipo_id": 4
      },
      {
        "id": 10,
        "nome": "Cheedar",
        "preco": 3,
        "tipo_id": 4
      },
      {
        "id": 11,
        "nome": "Sem refrigerante",
        "preco": 0,
        "tipo_id": 5
      },
      {
        "id": 12,
        "nome": "Coca-Cola 2L",
        "preco": 8,
        "tipo_id": 5
      },
      {
        "id": 13,
        "nome": "Guaraná 2L",
        "preco": 7,
        "tipo_id": 5
      },
      {
        "id": 14,
        "nome": "Fanta Uva 2L",
        "preco": 7.5,
        "tipo_id": 5
      }
    ]*/

function precoTotal(valorMassa, valorTamanho,valorSabor, valorBorda, valorRefrigerante){
  return valorMassa+valorTamanho+valorSabor+valorBorda+valorRefrigerante;      
    }

class Pedido extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            massaItems: [
                { label: 'Tradicional', value: '1', valorMassa: 0 },
                { label: 'Fina', value: '2',valorMassa: 0 },
            ], massa: '',
            tamanhoItems: [
                { label: "grande", value: '3', valorTamanho: 20 },
                { label: "media", value: '4', valorTamanho: 15 },
                { label: "pequena", value: '5', valorTamanho: 10 },
            ], tamanho: '',
            saborItems: [
                { label: "mussarela", value: '6', valorSabor: 10 },
                { label: "calabresa", value: '7', valorSabor: 12 },
                { label: "portuguesa", value: '8', valorSabor: 15 },
                { label: "bacon", value: '9', valorSabor: 16 },
                { label: "frango", value: '10', valorSabor: 15 }
            ], sabor: '',
            bordaItems: [
                { label: "sem borda", value: '11', valorBorda: 0 },
                { label: "Catupiry", value: '12', valorBorda: 3 },
                { label: "Cheedar", value: '13', valorBorda: 3 },
            ], borda: '',
            refrigeranteItems: [
                { label: "Sem refrigerante", value: '14', valorRefrigerante: 0 },
                { label: "Coca-Cola 2L", value: '15', valorRefrigerante: 8 },
                { label: "Guaraná 2L", value: '16', valorRefrigerante: 7 },
                { label: "Fanta Uva 2L", value: '17', valorRefrigerante: 7.5 },
            ], refrigerante: '' 
        };
    }

    render() {
        return ( 
            <div className="Formatacao">
                <header className="Formatacao-header"> 
                    <Dropdown value={this.state.massa} options={this.state.massaItems} onChange={e => { this.setState({ massa: e.value }); } } placeholder='Massa'/>
                    <Dropdown value={this.state.tamanho} options={this.state.tamanhoItems} onChange={e => { this.setState({ tamanho: e.value }); }} placeholder='Tamanho'/>
                    <Dropdown value={this.state.sabor} options={this.state.saborItems} onChange={e => { this.setState({ sabor: e.value }); }} placeholder='Sabor'/>
                    <Dropdown value={this.state.borda} options={this.state.bordaItems} onChange={e => { this.setState({ borda: e.value }); }} placeholder='Borda'/>
                    <Dropdown value={this.state.refrigerante} options={this.state.refrigeranteItems} onChange={e => { this.setState({ refrigerante: e.value }); }} placeholder='Refrigerante'/>
                    <br/>
                    <Button label="Confirmar" onClick = {() => this.props.navigation.navigate("ConfirmarPedido")}/>
                    <br/>
                    <Button label="Voltar" onClick = {() => this.props.navigation.goBack(null)}/>
                </header>
            </div>
        );
    }
}
export default Pedido;