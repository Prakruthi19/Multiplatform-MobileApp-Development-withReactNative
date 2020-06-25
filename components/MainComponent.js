import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import{View} from 'react-native';
import Dishdetail from './DishdetailComponent';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Contact from './ContactComponent';
import { Icon } from 'react-native-elements';

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: { screen: Dishdetail }
},
{
  initialRouteName: 'Menu',
  navigationOptions: {
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: "#fff"            
      }
  }
});
const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
}, {
     navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});
const ContactNavigator = createStackNavigator({
  Contact: { screen: Contact }
}, {
     navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});
const MainNavigator = createDrawerNavigator({
  Home: 
    { screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home'
      }
    },
    Contact: 
    { screen: ContactNavigator,
      navigationOptions: {
        title: 'Contact',
        drawerLabel: 'Contact Us'
      } 
    },
  Menu: 
    { screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu'
      } 
    },
   
    
}, {
drawerBackgroundColor: '#D1C4E9'
});

class Main extends Component {
render(){
  return(
  <View style={{flex:1}}>
            <MainNavigator />
        
</View>
)
}
}
  
export default Main;