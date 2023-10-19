import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import Feed from '../pages/Feed';
import Search from '../pages/Search';
import Create from '../pages/Create';
import MyPurchases from '../pages/MyPurchases';
import Profile from '../pages/Profile';

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
            colors={['#FF5757', '#8C52FF']} // substitua pelas cores que desejar
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
        headerShown: false,
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Início"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Descubra"
        component={Search}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="search-sharp"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Criar"
        component={Create}
        options={{
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <ButtonCreateFocused size={60} />
            ) : (
              <ButtonCreateNotFocused size={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Compras"
        component={MyPurchases}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <SimpleLineIcons
              name="handbag"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Eu"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
