import React,  { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

const SearchBar = () => {
  const [question, setQuestion] = useState('')

  const [stockQuestion, setStockQuestion] = useState('')

  const [answer, setAnswer] = useState('')



  const inpHandler = (val) =>{
    setQuestion(val)
  }

  const loadQuestion = () =>{
      
  //   if (question == "11") {
  //     setAnswer("biryani is mots energetique ")
  //     console.log(question)
  // }
      console.log(question)
      setStockQuestion(question)

      switch (question) {
      case "among biyarni and charpany what is most energetique":
        setAnswer("biryani is mots energetique ")
        setQuestion('')
        break;
      case " whats it is the most energetique food at kenyan?":
        setAnswer("ugali is the food tha content most energy than others food.");
        setQuestion('')
        break;
      case " Which Algerian meal takes the least water?":
        setAnswer("Madras");
        setQuestion('')
        break;
      case "which meal takes a lot of water for preparation?":
        setAnswer(" makrout")
        setQuestion('')
        break;
      case "Does sukuma wiki contain too much pepper?":
        setAnswer("No, sukuma wiki not content pepper")
        setQuestion('')
        break;
      case 'is sukuma wiki recommended for old people?':
        setAnswer("yes sukumu is recommanded for the old people because it is most energetiq")
        setQuestion('')
        break;
      case "ugali is the food of which country?":
        setAnswer("Ugalis is the food of Kenyan country")
        setQuestion('')
        break;
      default:
        setAnswer('this question have not yet the anwer')
        setQuestion('')
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.viewStyle}>
        <TextInput 
          style={styles.textInput}
          placeholder='Search'
          onChangeText={ inpHandler }
          value={question}
          onSubmitEditing={text => loadQuestion(text)}
        />
        <Button 
        title="Submit"
        onPress={ loadQuestion }
        
        />
        
      </View>
      <Text style={styles.textQuestion}>{stockQuestion}</Text>
      <Text style={styles.textAnswer}>{answer}</Text>
    </View>
  );
}

const styles =  StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60
  },
  viewStyle: {
    flexDirection: 'row',
    
    
  },
  textInput: {
    fontSize: 15,
    padding: 5,
    paddingLeft: 3,
    borderWidth: 1,
    borderColor: 'grey',  
    width: "85%"
  },
  textQuestion: {
    fontSize: 20,
    marginTop: 5,
    color: 'blue'

  }, 
  textAnswer: {
    fontWeight: 'bold'
  }
})

export default SearchBar;
