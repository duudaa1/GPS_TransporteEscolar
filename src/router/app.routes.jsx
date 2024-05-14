import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home/Home'
import Form from '../pages/Cadastro/Cadastro'
import Login from '../pages/Login/Login'
import Map from '../pages/Map/Map'
import ProfileScreen from '../pages/Perfil/Perfil'
import Favoritos from '../pages/Favoritos'
import Feedback from '../pages/Feedback/Feedback'
import Parada from '../pages/Parada/parada'

function AppRoutes() {
  const AppStack = createStackNavigator();
  return (
    <AppStack.Navigator initialRouteName={'Home'}>
      {/* <AppStack.Screen name="Home" component={Home}/>
      <AppStack.Screen name="Login" component={Login}/>
      <AppStack.Screen name="Cadastro" component={Form}/>  */}
      <AppStack.Screen name='Mapa' component={Map}/>
      <AppStack.Screen name='Parada' component={Parada}/>
      <AppStack.Screen name='Perfil' component={ProfileScreen}/>
      <AppStack.Screen name='Favoritos' component={Favoritos}/>
      <AppStack.Screen name='Feedback' component={Feedback}/>
    </AppStack.Navigator>
  )
}

export default AppRoutes