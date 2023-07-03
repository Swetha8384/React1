import { StyleSheet, View } from "react-native";
import { Button } from "react-native-web";

const Layout = ({navigation}) => {
  return (

    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={styles.view1}>
        <View style={styles.inner1}>
          <View style={styles.i1}></View>
          <View style={styles.i2}></View>
        </View>
        <View style={styles.inner2}></View>
      </View>

      <View style={styles.view2}></View>
      {/* <Button title="Back to Profile" onPress={() => { navigation.navigate("Profile") }} /> */}
      <Button title='Profile' onPress={()=>navigation.navigate("Profile" )}/>
    </View>
  )
}


const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: "blue",
    margin: 10,

  },
  view2: {
    flex: 1,
    backgroundColor: "lightgreen"
  },
  inner1: {
    flex: 1,
    backgroundColor: "pink",
    flexDirection: "row",
    margin: 10

  },
  i1: {
    flex: 1,
    backgroundColor: "lightblue"
  },
  i2: {
    flex: 1,
    backgroundColor: "lightyellow"
  },
  inner2: {
    flex: 1,
    backgroundColor: "blue",

  }
})

export default Layout;