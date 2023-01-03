import React,{useLayoutEffect, useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'
import * as CalendarEvent from "react-native-add-calendar-event";
import moment from "moment";

const Agenda = ({navigation}) => {

  const [eventDate, setEventDate] = useState('Enter date')

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

  const [agendaList, setAgendaList] = useState('')

  // async function getAgenda(){
  //   try{
      
  //   }
  //   catch(error){

  //   }
  // }



  return (
    <View style={styles.container}>
      <Text  style={styles.titleAgenda}>Your Agenda</Text>
      {/* <View style={styles.containerInput}>
        <TextInput style={styles.textInput} onChangeText={()=>setEventDate('')} placeholder={eventDate} dataDetectorTypes='calendarEvent'/>
        <TextInput style={styles.textInput} multiline={true} placeholder='Enter Food'/>
        <TextInput style={styles.textInput} multiline={true} placeholder='Enter Quantity of food' />
      </View> */}
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
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleAgenda: {
    color: "4E15F1",
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

  }
})