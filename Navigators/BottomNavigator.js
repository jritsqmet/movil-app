import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Ejercicio1Screen from '../Screens/Ejercicio1Screen';
import Grupo2Screen from '../Screens/Grupo2Screen';
import Grupo3Screen from '../Screens/Grupo3Screen';
import Grupo4Screen from '../Screens/Grupo4Screen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Grupo2'>
      <Tab.Screen name="Grupo1" component={Ejercicio1Screen} />
      <Tab.Screen name="Grupo2" component={Grupo2Screen} />
      <Tab.Screen name="Grupo3" component={Grupo3Screen} />
      <Tab.Screen name="Grupo4" component={Grupo4Screen} />
   
    </Tab.Navigator>
  );
}

export default function BottomNavigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}