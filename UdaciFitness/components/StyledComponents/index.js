import React from 'react';
import styled from 'styled-components/native';

const CenteredView = styled.View`
        flex:1;
        background-color: #333;
        justify-content:center;
        align-items:center;
    `

const WelcomeText = styled.Text`
        color: white;
        font-size:20;
    `

const WelcomeBtn = styled.TouchableOpacity`
        width:100px;
        height:50px;
        background: red;
        border-radius: 5px;
        justify-content: center;
        align-items:center;
    `

export default class StyledComponent extends React.Component{

    render(){
        return(
            <CenteredView>
                <WelcomeText> Hello View </WelcomeText>
                <WelcomeBtn onPress={()=>console.log('Hello')}>
                    <WelcomeText>Push Me !!</WelcomeText>
                </WelcomeBtn>
            </CenteredView>
        )
    }
}