import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ToastAndroid,Button,TextInput,KeyboardAvoidingView } from 'react-native';
const GetScreen= () => {
    const [getName,setGetName]=useState('');
    const [id,setID]=useState('');
    const fetchUser=()=>{
        fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
        .then((response=>response.json()))
        .then((json)=>setGetName(json.data.employee_name))}
    return ( 
      <View style={styles.container}>
        <View style={styles.methodContainer}>
          <Text style={styles.header}>GET Method!</Text>
          <TextInput
            placeholder="ID"
            style={styles.input}
            value={id}
            onChangeText={setID}
          />
          <Button
            title="Fetch"
            style={styles.button}
            onPress={fetchUser}
            color="#6EB4D5"
          />
          <Text>Name: {getName}</Text>
        </View>
      </View>
   
    )}
    const styles = StyleSheet.create({
      header: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#335EA1",
      },
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      button: {
        height: 40,
      },
      input: {
        borderWidth: 2,
        width: 300,
        margin: 10,
        borderStyle: "solid",
        borderColor: "black",
        fontSize: 20,
        padding: 10,
      },
    
      optionsButton: {
        flexDirection: "row",
        gap: 10,
        position: "absolute",
        bottom: 60,
      },
      methodContainer: {
        position: "absolute",
        top: 70,
      },
    });
export default GetScreen;