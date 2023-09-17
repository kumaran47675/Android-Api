import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ToastAndroid,Button,TextInput,KeyboardAvoidingView } from 'react-native';
const DeleteScreen = () => {
  const [id,setID]=useState('');
    const DeleteUser = () => {
       
        fetch("https://dummy.restapiexample.com/api/v1/delete/" + id, {
          method: "DELETE",
        }).then((response) => {
          ToastAndroid.show("Deleted object", ToastAndroid.SHORT);
        });
      };
    return (
    <View style={styles.container}>
    <View style={styles.methodContainer}>
        <Text style={styles.header}>DELETE Method!</Text>
        <TextInput
          placeholder="Id"
          style={styles.input}
          value={id}
          onChangeText={setID}
        />
        <Button
          title="Post"
          style={styles.button}
          onPress={DeleteUser}
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
        methodContainer: {
          position: "absolute",
          top: 70,
        },
      });
export default DeleteScreen;