import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Entypo, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import Feed from '../pages/Feed';
import Search from '../pages/Search';
import Create from '../pages/Create';
import MyPurchases from '../pages/MyPurchases';
import Profile from '../pages/Profile';
import ButtonCreateFocused from '../components/ButtonCreateFocused';
import ButtonCreateNotFocused from '../components/ButtonCreateNotFocused'

const Tab = createBottomTabNavigator();

const Routes = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
          height: 80,
          justifyContent: 'center',
          borderTopWidth: 0,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={['#FF5757','#8C52FF']} // substitua pelas cores que desejar
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              flex: 1,
              borderTopWidth: 0,
              borderTopColor: 'transparent',
              overflow: 'hidden',
            }}
          >
            <View
              style={{
                position: 'absolute',
                top: 10,
                left: 0,
                right: 0,
                height: 100,
                backgroundColor: 'black',
                borderTopWidth: 0,
                borderTopColor: 'transparent', // Cor de fundo original da tabBar
              }}
            />
          </LinearGradient>
        ),
        tabBarShowLabel: false,
        tabBarLabelPosition: 'below-icon',
        headerShown: false,
        tabBarInactiveTintColor:'grey',
        tabBarActiveTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name='Início'
        component={Feed}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <Ionicons name="home" size={22} color={color} />
                  <Text style={{ color: color, fontSize: 12 }}>Início</Text>
                </>
              );
            }
            return (
              <>
                <Ionicons name="home-outline" size={22} color={color} />
                <Text style={{ color: color, fontSize: 12 }}>Início</Text>
              </>
            );
          },
        }}
      />
      
      <Tab.Screen
        name='Descubra'
        component={Search}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <Ionicons name="search-sharp" size={22} color={color} />
                  <Text style={{ color: color, fontSize: 12 }}>Descubra</Text>
                </>
              );
            }
            return (
              <>
                <Ionicons name="search-sharp" size={22} color={color} />
                <Text style={{ color: color, fontSize: 12 }}>Descubra</Text>
              </>
            );
          },
        }}
      />

      <Tab.Screen
        name='Criar'
        component={Create}
        options={{
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return (
                <ButtonCreateFocused size={60}/>
              );
            }
            return (
              <ButtonCreateNotFocused size={size}/>
            );
          },
        }}
      />

      <Tab.Screen
        name='Compras'
        component={MyPurchases}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <SimpleLineIcons name="handbag" size={22} color={color} />
                  <Text style={{ color: color, fontSize: 11 }}>Compras</Text>
                </>
              );
            }
            return (
              <>
                <SimpleLineIcons name="handbag" size={22} color={color} />
                <Text style={{ color: color, fontSize: 11 }}>Compras</Text>
              </>
            );
          },
        }}
      />

      <Tab.Screen
        name='Eu'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <Ionicons name="person" size={22} color={color} />
                  <Text style={{ color: color, fontSize: 12 }}>Eu</Text>
                </>
              );
            }
            return (
              <>
                <Ionicons name="person-outline" size={22} color={color} />
                <Text style={{ color: color, fontSize: 12 }}>Eu</Text>
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;