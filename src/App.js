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

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Cadastro" component={Cadastro} />
				<Stack.Screen name="ConfirmarCadastro" component={ConfirmarCadastro} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}