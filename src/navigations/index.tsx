import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/index';
import { HomeScreen } from '../screens/home/index';
import { DetailScreen } from '../screens/detalhes/index';
import { CadastroScreen } from '../screens/cadastrar/index'
const Stack = createStackNavigator();

export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="login"
            screenOptions={{
                headerShown: false, animationEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS
            }} >
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="app" component={HomeScreen} options={{ title: "Home" }} />
            <Stack.Screen name="cadastrar" component={CadastroScreen} />
            <Stack.Screen name="detalhes" component={DetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>

)