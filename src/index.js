import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconFt from  'react-native-vector-icons/Feather'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAD from 'react-native-vector-icons/AntDesign'
import OpportunityTab from './pages/OpportunityTab'
import MessageTab from './pages/MessageTab'
import PatientsTab from './pages/PatientsTab'
import PaymentTab from './pages/PaymentTab'


const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        activeColor="#27b3e7"
        inactiveColor="#b8b8b8" 
        shifting={false}
        barStyle={{ backgroundColor: '#fff' }}
      >
        <Tab.Screen 
          name='oportunidades' 
          component={OpportunityTab}
          options={{
            tabBarLabel: 'Oportunidades',
            tabBarIcon: ({ color }) => (
              <IconMCI name="speedometer" color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen 
          name='Pacientes' 
          component={PatientsTab}  
          options={{
            tabBarLabel: 'Pacientes',
            tabBarIcon: ({ color }) => (
              <IconMI name='person' color={color} size={22} />
            )
          }}
        />
        <Tab.Screen 
          name='Mensagens' 
          component={MessageTab} 
          options={{
            tabBarLabel: 'Mensagens',
            tabBarIcon: ({ color }) => (
              <IconFt name='send' color={color} size={20} />
            )
          }}
        />
        <Tab.Screen 
          name='Pagamentos' 
          component={PaymentTab}
          options={{
            tabBarLabel:'Pagamentos',
            tabBarIcon: ({ color }) => (
              <IconMI name='payment' color={color} size={22} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>    
  );  
};

export default App;
