import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Pressable} from 'react-native';

export default class LoginScreen extends React.Component {
    state = {
        name: ""
    }

    continue = () => {
        this.props.navigation.navigate("Chat", {name: this.state.name});
    }
    render(){
        return (
            <View style={styles.container}>
              <View style={styles.circle} />
              <View style={{marginTop: 96}} >
                <Image source={require("../assets/chat.jpeg")} style = {{width: 100, height: 100, alignSelf: "center"}}></Image>
            </View>
            <View style={{marginHorizontal: 32}}>
                <Text style={styles.header}>Username</Text>
                 
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter your name"
                    onChangeText={name => {this.setState({name})}} 
                    value = {this.state.name}
                />
                
                <View style={{alignItems: "center", marginTop: 32}}>
                <Pressable style={styles.subtn} onPress={this.continue}>
                    <Text style={{fontSize: 18}}>Chat Now!</Text>
                </Pressable>
                </View>
            </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F5F7'
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500/2,
        backgroundColor: "#FFF",
        position: "absolute",
        left: -120,
        top: -20
    },
    header: {
        fontWeight: "700",
        fontSize: 25,
        color: "#514E5A",
        marginTop: 32,
        alignSelf: "center"
    },
    input: {
        marginTop: 32,
        height: 50, 
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#BAB7C3",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514E5A",
        fontWeight: "500",
        marginBottom: 10
    },
    subtn: {
        width: 150,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#A9D8FF",
        alignItems: "center",
        justifyContent:"center"
    }
  });
  