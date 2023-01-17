import React,  { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

const SearchBar = () => {
  // change state of question
  const [question, setQuestion] = useState('')

  // for store question after submit question
  const [stockQuestion, setStockQuestion] = useState('')

  // change state of the answer
  const [answer, setAnswer] = useState('')
  // change state of the description
  const [description, setDescription] = useState("")



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
        setDescription("")
        break;
      case "whats it is the most energetique food at kenyan?":
        setAnswer("ugali is the food tha content most energy than others food.");
        setQuestion('')
        setDescription("")
        break;
      case " Which Algerian meal takes the least water?":
        setAnswer("Madras");
        setQuestion('')
        setDescription("")
        break;
      case "which meal takes a lot of water for preparation?":
        setAnswer(" makrout")
        setQuestion('')
        setDescription("")
        break;
      case "Does sukuma wiki contain too much pepper?":
        setAnswer("No, sukuma wiki not content pepper")
        setQuestion('')
        setDescription("")
        break;
      case 'is sukuma wiki recommended for old people?':
        setAnswer("yes sukumu is recommanded for the old people because it is most energetiq")
        setQuestion('')
        setDescription('')
        break;
      case "ugali is the food of which country?":
        setAnswer("Ugalis is the food of Kenyan country")
        setQuestion('')
        setDescription('')
        break;
      case "":
        setAnswer("")
        setQuestion('')
        setDescription("")
        break;
      case "hello" || "Hello" || "HELLO":
        setAnswer("Hello")
        setQuestion('')
        setDescription("used as a greeting or to begin a phone conversation")
        break;
      case "Which Algerian meal takes the least water?" || "WHICH ALGERIAN MEAL TAKES THE LEAST WATER"  || "which algerian meal takes the least water":
        setAnswer("The staple food in Algeria is couscous, a semolina-based dough usually served with a meat and vegetable stew, and it is the food that consumes the least water.")
        setQuestion("")
        setDescription("")
        break;
      case "What are foods that Algeria is famous for?":
        setAnswer("Couscous: Steamed Semolina with Meat Stew,Tajin Zitoun: Chicken and Olives Dish, Mhajeb: Flatbread with Tomato and Onion Stuffing")
        setQuestion("");
        setDescription("")
        break;
      case "In Alegeria, Which meal doesn't require the use of corn?":
        setAnswer("1. Couscous, 2. Chakchouka, 3. Rechta, 4. Dobara, 5. Berkoukes, 6. Chorba Frik, 7. Harira, 8. Mechoui. ")
        setQuestion("");
        setDescription("")
        break;
      case "In Alegeria, Which meal doesn't require the use of corn?":
        setAnswer("1. Couscous, 2. Chakchouka, 3. Rechta, 4. Dobara, 5. Berkoukes, 6. Chorba Frik, 7. Harira, 8. Mechoui. ")
        setQuestion("");
        setDescription("")
        break;
      case "What is the most popular dish in Algeria?":
        setAnswer("Couscous")
        setDescription("Often considered the national dish of Algeria, Couscous is a perfect complement to any meal. This dish is composed of small pellets of steamed semolina topped with meat, vegetables, and various spices. In Algeria, the most popular meat and vegetable accompaniments for this meal include chicken, carrots and chickpeas")
        setQuestion("")
        break;
      case "what is the most popular dish in Kenya" || "What is the most popular dish in kenya":
        setAnswer("Ugali")
        setDescription(" Ugali. There's no better way to start this Kenyan food guide than with ugali, Kenya's national dish. It's arguably the most popular dish, not only in Kenya but in the whole African continent")
        setQuestion("")
        break;
      case "Is mandazi good for diabetic patients?" || "is mandazi good for diabetic patients?":
        setAnswer("Yes")
        setDescription("for the country as Kenya,you can stabilize your blood sugar, by eating and combining the right kinds of foods. A typical Kenyan diet will involve tea, bread, mandazi, or Chapo. These will spike your blood sugar.")
        setQuestion("");
        break;
      case "Does mukimo contain too much pepper?" || "does mukimo contain too much pepper?":
        setAnswer("No, mukimo not contain pepper")
        setDescription("Mukimo, mokimo or irio is a Kenyan meal (predominantly from communities living around Mount Kenya) prepared by mashing potatoes and green vegetables. It may also include maize and beans. Mukimo is mostly served as an accompaniment for meat-based stew and nyama choma")
        setQuestion("")
        break;      
      default:
        setAnswer('No results')
        setQuestion('')
        setDescription("")
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
      <view style={styles.containerTextDescription}> <Text style={styles.textDescription}> {description}</Text></view>
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
    fontSize: 15,
    marginTop: 5,
    color: 'blue'

  }, 
  textAnswer: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  containerTextDescription:{
    marginTop: 8,
    marginLeft: 6
  },
  textDescription: {
    fontSize: 14,
    textAlign: 'center'
    
  }
})

export default SearchBar;
