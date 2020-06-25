import React ,{Component}from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { Card } from 'react-native-elements';
class Contact extends Component{
       constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Contact Information'
    };

    render(){
        
        const { navigate } = this.props.navigation;
        
        return (
                <Card title="Contact Information">
                    
                   
                </Card>
            );
    }
}


export default Contact;