import React, {useState} from 'react';

import { Component, Stylesheet, TouchableOpacity, Button, View, Text, Image, ScrollView, TextInput, Alert } from 'react-native';

// main part of the app
const App = () => {
  
  const [card, setCard] = useState(0); //initial state

  var array = [
    require("./cards/card.png"), 
    require("./cards/card2.png"),
    require("./assets/icon.png")
  ]
  

  //onclick function
  const handlePress = () => {
    //some logic
    //set card state to the next index
    setCard( current => current + 1);

    //so everytime you click function the state will change and this re-render your component with the new data.
  }
  
  // what shows up on the app
  return (

    <ScrollView>

      <View>
          
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
              source={ array[card] }
            />

          </TouchableOpacity>

          </View>

      </View>

    </ScrollView>
    
  );
}

export default App;