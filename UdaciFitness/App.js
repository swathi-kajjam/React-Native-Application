import React from 'react';
import { View , Text} from 'react-native';
import AddEntry from './components/AddEntry';
import ShowPostsList from './components/Lists/ShowPostsList';
import Form from './components/Forms'
import FlexBox from './components/FlexBox';
import StyledComponent from './components/StyledComponents';
//Animation
import AnimationSample from './components/NativeFeatures/Animations'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import History from './components/History';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {purple, white} from './utils/colors';
import {Constants} from 'expo';
import {Platform, StatusBar, TouchableOpacity} from 'react-native';
import Live from './components/NativeFeatures/GeoLocation/Live';
import { setLocalNotification } from "./utils/helpers";
import EntryDetail from './components/EntryDetail';


//*Drawer Navigator Sample
const Home = ({ navigation }) => (
    <View>
        <Text>This is the Home view</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Text>Press here to open the drawer!</Text>
        </TouchableOpacity>
    </View>
);

const Dashboard = ({ navigation }) => (
    <View>
        <Text>This is the Dashboard view</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Text>Press here to open the drawer!</Text>
        </TouchableOpacity>
    </View>
);

const Drawer = DrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            drawerLable:'Home',
            drawerIcon:()=> <FontAwesome name='home' size={30}/>
        }
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions:{
            drawerLable:'Dashboard',
            drawerIcon:()=> <FontAwesome name='dashboard' size={30}/>
        }
    }
});

function UdaciStatusBar({backgroundColor, ...props}){
    return (<View style={{backgroundColor, height: Constants.statusBarHeight}}>
                <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
            </View>)
}

const Tabs = TabNavigator({
    History:{
        screen: History,
        navigationOptions:{
            tabBarLabel: 'History',
            tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
        }
    },
    AddEntry:{
        screen: AddEntry,
        navigationOptions:{
            tabBarLabel: 'AddEntry',
            tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
        }
    },
    Live:{
        screen:Live,
        navigationOptions:{
            tabBarLabel:'Live',
            tabBarIcon: ({tintColor}) => <Ionicons name='ios-speedometer' size={30} color={tintColor}/>
        }
    }
},{
    navigationOptions:{
        header:null
    },
    tabBarOptions:{
        activeTintColor:Platform.OS==='ios'? purple: white,
        style:{
            height:56,
            backgroundColor: Platform.OS==='ios'? white: purple,
            shadowColor: 'rgba(0,0,0,0.24)',
            shadowOffset:{
                width:0,
                height:3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})

const MainNavigator = StackNavigator({
    Home:{
        screen: Tabs
    },
    EntryDetail:{
        screen:EntryDetail,
        navigationOptions:{
            headerTintColor: white,
            headerStyle:{
                backgroundColor: purple
            }
        }
    }
})

export default class App extends React.Component {

  componentDidMount(){
      setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
           <UdaciStatusBar backgroundColor={purple} barStyle='light-content'/>

            <MainNavigator/>
        </View>
      </Provider>
    );
  }
}

