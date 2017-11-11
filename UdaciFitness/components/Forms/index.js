import React,{ Component } from 'react';
import { View, TextInput, KeyboardAvoidingView, Switch, Image,WebView, Picker} from 'react-native';


export default class Form extends Component{
    state={
        input:'@swathi.kajjam',
        showInput:false,
        language:'java'
    }
    handleToggleSwitch = () => {
        this.setState((state)=>({
            showInput: !state.showInput
        }))
    }
    handleTextChange = (input) => {
        this.setState(()=>({
            input
        }))
    }
    render(){
        const {input, showInput} = this.state;

        return(
            <KeyboardAvoidingView behavior='padding'>
                {/*<Image
                    source={require('../../images/mini.png'}
                />

                <Image
                    source={{uri:'https://tylermcginnis.com/tyler-mcginnis.jpg'}}
                />*/}
                <Switch
                    value={showInput}
                    onValueChange={this.handleToggleSwitch}
                />
                {showInput === true &&
                <TextInput
                    value={input}
                    onChange={this.handleTextChange}
                />}
                {/*<Picker
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>*/}

                <WebView
                    source={{uri: 'https://github.com/facebook/react-native'}}
                    style={{marginTop: 20}}
                />
            </KeyboardAvoidingView>
        )
    }
}