import React ,{Component}from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { Card } from 'react-native-elements';
import { Text, StyleSheet } from "react-native";

class Contact extends Component{
       constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Contact Us'
    };

    render(){
        
        const { navigate } = this.props.navigation;
        
        return (
                <Card title="Contact Information">
                    <Text style={{margin: 10}}>121, Clear Water Bay Road</Text>
                    <Text style={{margin: 10}}>Clear Water Bay, Kowloon</Text>
                    <Text style={{margin: 10}}>HONG KONG</Text>
                    <Text style={{margin: 10}}>Tel: +852 1234 5678</Text>
                    <Text style={{margin: 10}}>Fax: +852 8765 4321</Text>
                    <Text style={{margin: 10}}>Email:confusion@food.net</Text>
                   
                </Card>
            );
    }
};


  
export default Contact;