import React,{ Component } from 'react';
import { Text, ScrollView, StyleSheet, View, FlatList } from 'react-native';
import getPosts from './posts';

function Post({body, title}){
    return(
        <View>
            <Text style={{color:'black'}}>{body}</Text>
            <Text style={{color:'black'}}>{title}</Text>
        </View>
    )
}

export default class ShowPostsList extends Component{

    renderItem = ({item}) =>{
        return <Post {...item}/>
    }

    render(){
        const posts=getPosts();
        return(
            <View>
                <FlatList
                    data={posts}
                    renderItem={this.renderItem}/>
            </View>
            /* <ScrollView >
                 {posts.map(({id,body, title})=> <Post key={id} body={body, title}/>)}
             </ScrollView> */
        )
    }
}

const styles = StyleSheet.create({
container:{flex:1}
})