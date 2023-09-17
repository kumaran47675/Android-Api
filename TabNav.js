import React from "react";
import {StyleSheet, Text, View} from "react-native";
import GetScreen from './pages/GetScreen.js';
import DeleteScreen from './pages/DeleteScreen.js';
import PutScreen from './pages/PutScreen.js';
import PostScreen from './pages/PostScreen.js';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

const TabNav=()=>{
    const APITabs = [
      { name: "Post", component: PostScreen, icon: "post" },
      { name: "Put", component: PutScreen, icon: "home" },
      { name: "Get", component: GetScreen, icon: "gift" },
      { name: "Delete", component:DeleteScreen, icon: "delete" },
      
    ];
  
    return (
      <Tab.Navigator
        initialRouteName="Put"
        shifting={true}
        sceneAnimationType="shifting"
        sceneAnimationEnabled={false}
        activeColor="#007CC2"
        barStyle={{
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "lightgray",
        }}
      >
        {APITabs.map((tab, index) => (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarLabel: tab.name,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name={tab.icon} color={color} size={26} />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    );
  }

  export default TabNav;