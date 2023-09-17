import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ToastAndroid,Button,TextInput,KeyboardAvoidingView } from 'react-native';
const PostScreen = () => {
    const [id,setID]=useState('');
    const [name,setName]=useState('');
    const [salary,setSalary]=useState('');
    const [age,setAge]=useState();
    const AddUser=()=>{
        fetch(`https://dummy.restapiexample.com/api/v1/create`,{
        method:"POST",
        body:{
          "name":`${name}`,
          "salary":`${salary}`,
          "age":`${age}`
        },
        headers:{
            "content-type":"application/json",
        },
      })
      .then((response)=>response.json)
      .then((json)=>{
        setID(json.data.id)
        ToastAndroid.show("Created object at id: " + id,
        ToastAndroid.SHORT
        );
      });
     
      };
    return (
      <View style={styles.container}>
     <View style={styles.ScreenContainer}>
        <Text style={styles.header}>POST Method!</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="salary"
          style={styles.input}
          value={salary}
          onChangeText={setSalary}
        />
        <TextInput
          placeholder="age"
          style={styles.input}
          value={age}
          onChangeText={setAge}
        />
        <Button
          title="Post"
          style={styles.button}
          onPress={AddUser}
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
export default PostScreen;