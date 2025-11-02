import { useEffect , useState } from "react";
import { View , Text , StyleSheet }  from "react-native";

 export default function SplashScreen ({navigation}){

  useEffect(() =>{
    setTimeout(()=>{
      navigation.replace('MainTabs');
    } ,2000) ; 
  } ,[]);
  return(
    <View style={styles.container}>
      <Text style={styles.logo}>🛒</Text>
      <Text style={styles.title}>My Store</Text>
    </View>
  );
};
const styles = StyleSheet.create({
 container:{
  flex: 1 ,
  justifyContent : 'center',
  alignItems : 'center',
  backgroundColor : '#107df3ff',
 },
 logo : {
   fontSize: 64,
    marginBottom: 16,
 },
 title :{
   fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
 },
 

});