import React,{useLayoutEffect, useEffect, useState} from 'react';
import { View, Text, StyleSheet, TextInput, Modal, Image, FlatList } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'
import Calendar from 'react-native-calendars'
import { Card } from 'react-native-paper'
import axios from 'axios'


const Agenda = ({navigation}) => {

  // function to show calendar
  const [showCalendar, setShowCalendar] = useState(false)

  // fecht data in backend api
  const [agenda, setAgenda] = useState([])
  useEffect(() => {
    async function getAgenda(){
      try{
        const agenda = await axios.get('http://192.168.100.47:3000/foods')
        // console.log(agenda.data.foods)
        setAgenda(agenda.data)
      }
      catch(error){
          console.log(error)
      }

    }

    getAgenda()
  }, [])
  
  console.log(agenda)
  const renderData = (item) => {
    return (
      <Card>
        <Text>{item.date}</Text>
      </Card>
    )
  }

    // customize header home screen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: ({color})=> (
      <MaterialCommunityIcons 
        name='keyboard-backspace'
        color={color}
        style={styles.headerHome}
        onPress={handlePressHome}
      />
        
      )
    })
  });

   const handlePressHome = () => {
    navigation.goBack();
  }




  return (
    <View style={styles.container}>
      {/* <Text  style={styles.titleAgenda}>Food Agenda</Text> */}
      {/* <View style={styles.logo}>
        <Image source={require('../assets/image/logo_agenda.png')} style={styles.imageWelcome}/>
      </View> */}
      <FlatList 
        data={agenda}
        renderItem={({item}) => {
            <Text style={{fontSize: 40}}>{item}</Text>
          }}
        // keyExtractor={item => `${item.id})`}
      />
      {/* <View style={styles.AgendaItemContainer}>
      </View> */}

      {/* <View style={styles.containerInput}>
        <TextInput style={styles.textInput} onChangeText={()=>setEventDate('')} placeholder={eventDate} dataDetectorTypes='calendarEvent'/>
        <TextInput style={styles.textInput} multiline={true} placeholder='Enter Food'/>
        <TextInput style={styles.textInput} multiline={true} placeholder='Enter Quantity of food' />
      </View> */}

        <Modal
          visible={showCalendar}
          transparent
          animationType='fade'
          onRequestClose={() => setShowModal(false)}
        >
          {/* modal container */}
          <View style={styles.modalContainer}>
          {/* modal content */}
            
            
          </View>
      </Modal>

    </View>
  );
} 

export default Agenda;

const styles = StyleSheet.create({
  headerHome:{
    fontSize: 30,
    marginLeft: 20,
    marginRight: 40
  },
  container: {
    backgroundColor: '#F6F7FA',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // container image-logo
  logo: {
    height: 200,
    width: 200
  },
  imageWelcome: {
    height: "100%",
    width: "100%",
    borderRadius: 30

  },
  // end container image-logo

  // agenda item container
  AgendaItemContainer: {
    backgroundColor: "#F6F7FA",
    height: "100%",
    width: "100%"
  },


  titleAgenda: {
    color: "#4E15F1",
    fontSize: 30,
    fontWeight: 'bold',
  },
  containerInput: {
    marginTop: 40
  },
  textInput: {
    marginTop: 10,
    borderWidth: 2,
    padding: 10,
    borderColor: 'lightblue',
    width: 280,
    borderRadius: 20

  },
    // modal stylisation
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)'

  },
  // modal content
  modalContent: {
    backgroundColor: 'white',
    width: '70%',
    height: '70%',
    borderRadius: 15

  },
})