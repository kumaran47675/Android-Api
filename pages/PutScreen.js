import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ToastAndroid,Button,TextInput,KeyboardAvoidingView } from 'react-native';
const PutScreen = () => {
    const [id,setID]=useState('');
    const [name,setName]=useState('');
    const [salary,setSalary]=useState('');
    const [age,setAge]=useState();
    const UpdateUser = () => {
        fetch(`https://dummy.restapiexample.com/api/v1/update/${id}` , {
          method: "PUT",
          body: {
            "name": `${name}`,
            "salary": `${salary}`,
            "age":`${age}`
          },
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            ToastAndroid.show("Updated object", ToastAndroid.SHORT);
          });
      };
    return (
      <View style={styles.container}>
        <View style={styles.ScreenContainer}>
          <Text style={styles.header}>PUT Method!</Text>
          <TextInput
            placeholder="Id"
            style={styles.input}
            value={id}
            onChangeText={setID}
          />
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Salary"
            style={styles.input}
            value={salary}
            onChangeText={setSalary}
          />
            <TextInput
            placeholder="Age"
            style={styles.input}
            value={age}
            onChangeText={setAge}
          />
          <Button
            title="Post"
            style={styles.button}
            onPress={UpdateUser}
            color="#6EB4D5"
          />
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
      ScreenContainer: {
        position: "absolute",
        top: 70,
      },
    });
export default PutScreen;