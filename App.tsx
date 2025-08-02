/* import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Splash from './displays/splash';
import SignUp from './displays/signup'; 
import Edit_profile from './displays/edit_profile';
function App() {
const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name="Edit_profile" component={Edit_profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}  
export default App;
 */


import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './project/Welcome';
import SignIn from './project/SignIn';
import SignUp from './project/SignUp';
import PageNav from './project/PageNav';
import Home from './project/Home';
import Favourite from './project/Favourite';
import Cart from './project/Cart';
import MyOrder from './project/MyOrder';
import TrackOrder from './project/TrackOrder';
import BestDeal from './project/BestDeal';
import Category from './project/Category';
import Location from './project/Location';
import EnterLocation from './project/EnterLocation';
import Search from './project/Search';
import TrackLiveLocation from './project/TrackLiveLocation';
import CancelledOrder from './project/CancelledOrder';
import Checkout from './project/Checkout';
import PaymentMethods from './project/PaymentMethods';
import Profile from './project/Profile';
import VerifyCode from './project/VerifyCode';
import Filter from './project/Filter';
import Coupon from './project/Coupon';
import DeliveryAddress from './project/DeliveryAddress';
import ProfileMenu from './project/ProfileMenu';
import Wallet from './project/Wallet';
import AddMoney from './project/AddMoney';
import Settings from './project/Settings'; 
import AddressOptionScreen from './project/AddressOptionScreen';
import AddCard from './project/AddCard';
import Notification from './project/Notification';
import NewPassword from './project/NewPassword';
const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name='VerifyCode' component={VerifyCode}/>
        <Stack.Screen name='PageNav' component={PageNav}/>
        <Stack.Screen name="Home" component={Home} />
        {/* */}
        <Stack.Screen name='Favourite' component={Favourite}/>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='MyOrder' component={MyOrder}/>
        <Stack.Screen name='TrackOrder' component={TrackOrder}/>
        <Stack.Screen name='BestDeal' component={BestDeal}/>
        <Stack.Screen name='Category' component={Category}/>
        <Stack.Screen name='Location' component={Location}/>
        <Stack.Screen name='EnterLocation' component={EnterLocation}/>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='TrackLiveLocation' component={TrackLiveLocation}/>
        <Stack.Screen name='CancelledOrder' component={CancelledOrder}/>
        <Stack.Screen name='Checkout' component={Checkout}/>
        <Stack.Screen name='PaymentMethods' component={PaymentMethods}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Filter' component={Filter}/>
        <Stack.Screen name='DeliveryAddress' component={DeliveryAddress}/>
        <Stack.Screen name='ProfileMenu' component={ProfileMenu}/>
        <Stack.Screen name='Wallet' component={Wallet}/>
        <Stack.Screen name='AddMoney' component={AddMoney}/>
        <Stack.Screen name='Coupon' component={Coupon}/>
        <Stack.Screen name='Settings' component={Settings}/>
        <Stack.Screen name='AddressOptionScreen' component={AddressOptionScreen}/> 
        <Stack.Screen name='AddCard' component={AddCard}/>
        <Stack.Screen name='Notification' component={Notification}/>
        <Stack.Screen name='NewPassword' component={NewPassword}/>
   </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;