import { View ,Text, Button,StyleSheet} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile=({route,navigation})=>{
    const {namee,email}=route.params; 
    console.log(namee,email)
    async function getData() {
      try {
        const b = { name: "sample", email: "s@gmail.com", password: "sds" };
    
        await AsyncStorage.setItem("data", JSON.stringify(b));
        const c = await AsyncStorage.getItem("data");
    
        console.log(c, "cccccc");
      } catch (error) {
        console.log(error);
      }
    }
    
    getData();
    
    return(
        <View>
            <Text>Profile</Text>
            <Text >Name:{JSON.stringify(namee)}</Text>
             <Text>Email:{email}</Text>
             
           <View> <Button title="Layout" style={styles.button} onPress={()=>navigation.navigate('Layout')}/></View>
          <View><Button title="home"  style={styles.button2} onPress={()=>navigation.goBack()}/></View>  
        </View>
    )
}

const styles = StyleSheet.create({
   
   
    button: {
      width: "60px",  
      height:"70px",
      backgroundColor:"blue",
      color:"black"
    },
    button2:{
      marginTop:"5px"
    }
   
  });
export default Profile;