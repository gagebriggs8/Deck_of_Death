import React from 'react';

import { Component, Stylesheet, useState, TouchableOpacity, Button, View, Text, Image, ScrollView, TextInput, Alert } from 'react-native';

// main part of the app
const App = () => {
  

  var array = [require("./cards/card.png"), require("./assets/icon.png")]
  var x = 0
  

  //onclick function
  const handlePress = () => {
    //some logic
    alert("help")
    x+=1
  }
  
  // what shows up on the app
  return (

    <ScrollView>

      <View>
          <Text>{array[x]}</Text>
          <Text>{x}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          
          <TouchableOpacity
            onPress={(handlePress)}
          >

            <Image
              style={{ 
                width: 300,
                height: 300,
              }}
              resizeMode="contain"
              source={
                array[x]
              }
            />

          </TouchableOpacity>

          </View>

      </View>

    </ScrollView>
    
  );
}

export default App;