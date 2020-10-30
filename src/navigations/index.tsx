import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/index';
import { HomeScreen } from '../screens/home/index';
import { DetailScreen } from '../screens/detalhes/index';
import { CadastroScreen } from '../screens/cadastrar/index'
import { NavegacaoConfiguracao } from './configuracoes';

const Stack = createStackNavigator();

export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="login"
            screenOptions={{
                headerShown: true, animationEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS
            }} >
            <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="app" component={NavegacaoConfiguracao} options={{ title: "Loja" }} />
            <Stack.Screen name="cadastrar" component={CadastroScreen} options={{ title: "Cadastro" }} />
            <Stack.Screen name="detalhes" component={DetailScreen}/>
            <Stack.Screen name="opcoes" component={NavegacaoConfiguracao}/>
            
        </Stack.Navigator>
    </NavigationContainer>

)