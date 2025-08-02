import React from "react";
import { Text,StyleSheet,View} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favourite from './Favourite';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "./Home";
import Cart from "./Cart";
import Profile from "./Profile";
import MyOrder from "./MyOrder";
import ProfileMenu from "./ProfileMenu";
const style=StyleSheet.create(
  {
   selectop:
   {
    transform:[{translateY:"-40%"}],
    backgroundColor:'#222',
    width:70,
    height:70,
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    borderColor:"white",
    borderWidth:5
   }
  }
);

export default function PageNav()
{
    const Tab=createBottomTabNavigator();
    return(
    <Tab.Navigator 
          screenOptions={({route})=>
          ({
            tabBarIcon:({focused})=>
            {
              let iconName;
          if(route.name=='Home') iconName="home";
          else if(route.name=='Favourite') iconName='heart';
          else if(route.name=='Cart') iconName='cart';
          else if(route.name=='ProfileScreen') iconName='person-circle';
          else if(route.name=='MyOrder') iconName='newspaper';
          else if(route.name=='ProfileMenu') iconName='person-circle';
              return(
            <View style={focused && style.selectop}>
            <Ionicons name={iconName} size={focused ? 40:30} color={focused ? "white":"white"} />
            </View>
              );
            },
            headerShown:false,
            tabBarShowLabel:false,
            tabBarInactiveBackgroundColor:"#222",
            tabBarActiveBackgroundColor:'#222',
            tabBarStyle:
          {
            margin:"3%",
          },
          
          })}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favourite" component={Favourite}/>
            <Tab.Screen name="Cart" component={Cart}/>
            <Tab.Screen name="MyOrder" component={MyOrder}/>
            <Tab.Screen name="ProfileMenu" component={ProfileMenu}/> 
          </Tab.Navigator>
    );
}