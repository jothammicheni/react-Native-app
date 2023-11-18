// Login.js
import React, { useState } from 'react';
import { View, Text,SafeAreaView,Image,KeyboardAvoidingView  } from 'react-native';
import Logo  from '../assets/amazon-logo.png'
import { TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const[password ,setPassword]=useState('')
    const[email ,setEmail]=useState('')

    const navigation =useNavigation()
  return (
    <SafeAreaView 
    style={{flex:1,backgroundColor:'white' ,alignItems:'center'}}
    >
       <View >
       <Image 
       style={{height:200,width:200}}
       source={Logo}
       ></Image>
      </View>

      <KeyboardAvoidingView>
        <View>
         <Text
         style={{
           fontSize:20,
           fontWeight:'bold',
           color:'#041E42',
           textAlign:'center'
           
         }}
         >
         Login to your account
         </Text>
         </View>

         <View style={{
            marginTop:70 ,
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'#D0D0D0',
            borderRadius:8,
            padding:5
            
            }}>
            <View>
            <MaterialIcons name="attach-email" size={24} color="black" style={{color:'grey',marginStart:10}} />
            </View>
             
             <TextInput
             style={{
                height:40,
                width:250,
                color:'black',
                textAlign:'center',
                fontSize:20

             }}
               placeholder='Enter Email'
               type='email'

               />
         </View>

         <View style={{
            marginTop:20 ,
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'#D0D0D0',
            borderRadius:8,
            padding:5
            
            }}>
            <View>
            <MaterialCommunityIcons name="form-textbox-password" size={24} color="black" style={{color:'grey',marginStart:10}} />
            </View>
             
             <TextInput
             style={{
               
                height:40,
                width:250,
                color:'black',
                textAlign:'center',
                fontSize:20

             }}
               placeholder='Enter Password'
               type='password'

               />
         </View>

         <View
         style={{
            marginTop:12 ,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
         }}
         >
         <Text style={{fontSize:16, fontWeight:'bold'}}>Keep Me logged in</Text>
         <Text style={{fontSize:16, fontWeight:'bold',color:'#007FFF'}}>Forgot passwod</Text>
         </View>

         <Pressable
           style={{
            marginTop:70,
            width:200,
            height:50,
            borderRadius:8,
            marginLeft:'auto',
            marginRight:'auto',
            backgroundColor:'#FEBE10',
            padding:10
           

           }}
         >

            <Text style={{ textAlign:'center',fontSize:16,fontWeight:'bold',color:'#ffff'}}>Login</Text>
         </Pressable>

         <Pressable
          style={{
            marginTop:20
          }}
          onPress={()=>navigation.navigate('Register')}
         >
            <Text
             style={{textAlign:'center',fontSize:18,fontWeight:'bold',color:'grey'}}
             >Don't have an account? Signup</Text>
         </Pressable>
        </KeyboardAvoidingView>

    </SafeAreaView>

    
  );
}

export default Login;