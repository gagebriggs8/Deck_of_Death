import React, {useState} from 'react';

import { Component, Stylesheet, TouchableOpacity, Button, View, Text, Image, ScrollView, TextInput, Alert } from 'react-native';

import { useClock } from 'react-native-timer-hooks';



var i = Math.floor(Math.random() * 60) + 1;
var array = [
    require("./cards/card.png"), 
    require("./cards/card2.png"),
    require("./cards/card3.png"),
    require("./cards/card4.png"),
    require("./cards/card5.png"),
    require("./cards/card6.png"),
    require("./cards/card7.png"),
    require("./cards/card8.png"),
    require("./cards/card9.png"),
    require("./cards/card10.png"),
    require("./cards/card11.png"),
    require("./cards/card12.png"),
    require("./cards/card13.png"),
    require("./cards/card14.png"),
    require("./cards/card15.png"),
    require("./cards/card16.png"),
    require("./cards/card17.png"),
    require("./cards/card18.png"),
    require("./cards/card19.png"),
    require("./cards/card20.png"),
    require("./cards/card21.png"),
    require("./cards/card22.png"),
    require("./cards/card23.png"),
    require("./cards/card24.png"),
    require("./cards/card25.png"), 
    require("./cards/card26.png"),
    require("./cards/card27.png"),
    require("./cards/card28.png"),
    require("./cards/card29.png"),
    require("./cards/card30.png"),
    require("./cards/card31.png"),
    require("./cards/card32.png"),
    require("./cards/card33.png"),
    require("./cards/card34.png"),
    require("./cards/card35.png"),
    require("./cards/card36.png"),
    require("./cards/card37.png"),
    require("./cards/card38.png"),
    require("./cards/card39.png"),
    require("./cards/card40.png"),
    require("./cards/card41.png"),
    require("./cards/card42.png"),
    require("./cards/card43.png"),
    require("./cards/card44.png"),
    require("./cards/card45.png"),
    require("./cards/card46.png"),
    require("./cards/card47.png"),
    require("./cards/card48.png"),
    require("./cards/card49.png"),
    require("./cards/card50.png"),
    require("./cards/card51.png"),
    require("./cards/card52.png"),
    require("./cards/card53.png"),
    require("./cards/card54.png"),
    require("./cards/card55.png"),
    require("./cards/card56.png"),
    require("./cards/card57.png"),
    require("./cards/card58.png"),
    require("./cards/card59.png"),
    require("./cards/card61.png")
  ]
var x = 60

// main part of the app
const App = () => {
  
  const [card, setCard] = useState(0); //initial state

  
  const [counter, start, pause, reset, isRunning] = useClock(0, 1000, false);

  
  const handlePress = () => {
    setCard( current => current = i);
    array.splice(i, 1)
    x = x - 1
    i =  Math.floor(Math.random() * (x)) + 1
    
  }
  
  var string
  if (array.length == 0) {
    string = 'finished'
  }
  else {string = array.length}
 
  var time
  if (array.length == 0) {
    time = 'New Record Set at ' + counter + ' Seconds'
  }
  else {time = 'Keep Going!!'}
  
  // what shows up on the app
  return (

    <ScrollView>
      
      <View >

        <Text>Seconds: {counter}</Text>

        <Button
          onPress={() => {
            isRunning ? pause() : start();
          }}
          title={isRunning ? 'Pause' : 'Start'}
          />

        <Button onPress={() => reset()} title = {'reset'} />

      </View>
        
      <Text>{time}</Text>

      <View 
            style={{ position: 'absolute', 
            top: 375, left: 0, 
            right: 0, bottom: 0, 
            justifyContent: 'center', 
            alignItems: 'center' }}
          >
          
            <TouchableOpacity
              onPress={(handlePress)}
            >
            
              <Image
                style={{ 
                  width: 400,
                  height: 500,
                }}
                resizeMode="contain"
                source={ array[card] }
              />

            </TouchableOpacity>

          </View>
    </ScrollView>
    
  );
}

export default App;