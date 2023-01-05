import React,{useLayoutEffect} from 'react';
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
        
      )
    })
  });

   const handlePressHome = () => {
    navigation.goBack();
  }

  return (
    <View>
      <SearchBar/>
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