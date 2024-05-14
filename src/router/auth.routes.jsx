import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Map from '../pages/Map/Map'
import Favoritos from '../pages/Favoritos/index'
import Parada from '../pages/Parada/parada'
import Feedback from '../pages/Feedback/Feedback'
import ProfileScreen from '../pages/Perfil/Perfil'

export function AuthRoutes() {
  const AppStack = createStackNavigator()
  return (
  <AppStack.Navigator initialRouteName='Mapa'>    
    <AppStack.Screen name='Mapa' component={Map}/>
    <AppStack.Screen name='Parada' component={Parada}/>
    <AppStack.Screen name='Perfil' component={ProfileScreen}/>
    <AppStack.Screen name='Favoritos' component={Favoritos}/>
    <AppStack.Screen name='Feedback' component={Feedback}/>
  </AppStack.Navigator>
  )
}

