
import { useState } from 'react';
import { Pressable } from 'react-native';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';

const data=[{name:"sfdf"},{name:"ewregf"},{name:"yhgfn"}];


const Home=({navigation})=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [count,setCount]=useState(0);
  
    const handleNameChange = (text) => {
      setName(text);
    };
  
    const handleEmailChange = (text) => {
      setEmail(text);
    };
  
    const handlePasswordChange = (text) => {
      setPassword(text);
    };
  
    const handleRegistration = () => {
  
  
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
    };
    const press=()=>{
      setCount(count+1)

  }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Name'
          value={name}
          onChangeText={handleNameChange}
        />
   
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry
        />
        {/* <Button title="Register" onPress={handleRegistration} /> */}
        <TouchableOpacity onPress={handleRegistration}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </View>
          </TouchableOpacity>
          {/* <FlatList
           data={data}
              renderItem={({ item }) => (
           <View>
              <Text style={{borderColor:'black',borderBottomWidth:1}}>{item.name}</Text>
          </View>
          )}/> */}
  
          {/* <Pressable  onPress={press} ><Text>Press</Text></Pressable>
          <Text>Count:{count}</Text> */}

          <Button title='Profile' onPress={()=>navigation.navigate("Profile",{  namee:"sampleeeee", email:"ss@gmail.com"}
          )}/>

      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    input: {
      height: 40,
      width: '20%',
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    button: {
      marginBottom: 30,
      width: 150,
      alignItems: 'center',
      backgroundColor: '#2196F3',
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white',
      flex:5
    },
    view:{
     flexGrow:1 ,
     borderWidth:1
    },
   
  });


  export default Home;