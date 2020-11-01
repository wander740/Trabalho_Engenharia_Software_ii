import React from 'react';
import './App.css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//------------------------------------
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

//-----------------Importando as Telas-------------------
import Login from '../src/screens/Login';
import Cadastro from '../src/screens/Cadastro';
import ConfirmarCadastro from '../src/screens/ConfirmarCadastro';
import Home from '../src/screens/Home';
import Pedido from '../src/screens/Pedido';
import ConfirmarPedido from '../src/screens/ConfirmarPedido';
import StatusdoPedido from '../src/screens/StatusdoPedido';
import Configuracao from '../src/screens/Configuracao';
import EditarPerfil from '../src/screens/EditarPerfil';
import ConfirmarEditarPerfil from '../src/screens/ConfirmarEditarPerfil';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Cadastro" component={Cadastro} />
				<Stack.Screen name="ConfirmarCadastro" component={ConfirmarCadastro} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Pedido" component={Pedido} />
				<Stack.Screen name="ConfirmarPedido" component={ConfirmarPedido} />
				<Stack.Screen name="StatusdoPedido" component={StatusdoPedido} />
				<Stack.Screen name="Configuracao" component={Configuracao} />
				<Stack.Screen name="EditarPerfil" component={EditarPerfil} />
				<Stack.Screen name="ConfirmarEditarPerfil" component={ConfirmarEditarPerfil} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}