import React,{useLayoutEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'
import SearchBar from '../components/SearchBar';


const Search = ({navigation}) => {

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
      ),
      headerSearchBarOption: {
        placeholder: "search"
      }
    })
  });

   const handlePressHome = () => {
    navigation.goBack();
  }

  const [data, setData] = useState('')

  
  return (
    <View>

      <SearchBar
      />
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  headerHome:{
    fontSize: 30,
    marginLeft: 20,
    marginRight: 40
  },
  container: {

  }
})