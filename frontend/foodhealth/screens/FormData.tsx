import React, { useState, useEffect, useMemo } from 'react'
import { Text, View, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native'
import * as SQLite from 'expo-sqlite';
import { MaterialCommunityIcons } from '@expo/vector-icons'


var db = SQLite.openDatabase("FoodCalendar.db");

const FormData = ({date, selectedFood}: {date: any, selectedFood?: any}) => {
    
    const [foodName, setFoodName] = useState('')
    const [numberTimesEaten, setNumberTimesEaten] = useState('')
    const [qWater, setQWater] = useState('')
    const [qLiquid, setQLiquid] = useState('')
    const [sportDuration, setSportDuration] = useState('')
    const [healthProblem, setHealthProblem] = useState('')
    const [fruits, setFruits] = useState(false)

    const toggleSwitch = () => setFruits((previousState: boolean) => !previousState);

    useEffect(() => {

        if (selectedFood && selectedFood?.date==date) {
            setFoodName(selectedFood.food_name);
            setNumberTimesEaten(selectedFood.number_times_eaten.toString());
            setQWater(selectedFood.q_water);
            setQLiquid(selectedFood.q_liquid);
            setSportDuration(selectedFood.sport_duration.toString());
            setHealthProblem(selectedFood.health_problem);
            setFruits(selectedFood.eat_fruit == 1 ? true:false);
        } else {
            setFoodName("");
            setNumberTimesEaten("");
            setQWater("");
            setQLiquid("");
            setSportDuration("");
            setHealthProblem("");
            setFruits(false);
        }
        
    }, [selectedFood])


    // const updateStates = useMemo(() => {
    //     setFoodName(foodName)
    //     setNumberTimesEaten(numberTimesEaten)
    //     setQWater(qWater)
    //     setQLiquid(qLiquid)
    //     setSportDuration(sportDuration)
    //     setHealthProblem(healthProblem)
    //     setFruits(fruits)
    // }, [date])

    

    const insertData = () => {
    
        db.transaction(function (tx) {
            tx.executeSql(
                'INSERT INTO FooData (date, food_name, number_times_eaten, q_water, q_liquid, eat_fruit, sport_duration, health_problem) VALUES (?,?,?,?,?,?,?,?)',
                [date, foodName, numberTimesEaten, qWater, qLiquid, (fruits == false ? 0 : 1), sportDuration, healthProblem],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert('Food saved Successfully....')
                    } else Alert.alert('Failed to save food data....')
                }
            )
        })
    
    }

    
    const updateData = () => {
 
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE FooData set food_name=?, number_times_eaten=?, q_water=?, q_liquid=?, eat_fruit=?, sport_duration=?, health_problem=? where date=?',
                [foodName, numberTimesEaten, qWater, qLiquid, (fruits == false ? 0 : 1), sportDuration, healthProblem, date],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert('Daily food data updated Successfully...')
                        //updateStates()
                    } else Alert.alert('Error, please try again later');
                }
            )
        })
    }    


    // Form content
    const renderContent = () => {

        return(
            <View style={styles.formContent}>
                <InputText 
                    title='Food eaten' value={foodName} icon='food-turkey' type='text' placeholder='Enter food eaten' 
                    onChange={(food: string) => {setFoodName(food)}} 
                />
                <InputText 
                    title='Number times food eaten' value={numberTimesEaten} icon='food-drumstick' type='phone-pad' placeholder='Enter number' 
                    onChange={(food: string) => {setNumberTimesEaten(food)}} 
                />
                <InputText 
                    title='Quantity of water drank (Glass of water)' value={qWater} icon='cup-water' type='phone-pad' placeholder='Enter Quantity' 
                    onChange={(food: string) => {setQWater(food)}} 
                />
                <InputText 
                    title='Quantity of other liquid drank (Glass of water)' value={qLiquid} icon='food-fork-drink' type='phone-pad' placeholder='Enter Quantity' 
                    onChange={(food: string) => {setQLiquid(food)}} 
                />

                <View style={styles.line}>
                    <Text style={styles.title}>
                        <Text style={{ marginRight: 10 }}>
                            <MaterialCommunityIcons name='food-apple-outline' color='#CE0670' size={25} />
                        </Text>
                        {'\t'}
                        Eating fruit and vegetebles ?
                    </Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "fc94af" }}
                        thumbColor={fruits ? "#CE0670" : "#fc94af"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={fruits}
                    />
                </View>

                <InputText 
                    title='Sport duration (in minutes)' value={sportDuration} icon='run-fast' type='phone-pad' placeholder='Enter duration' 
                    onChange={(food: string) => {setSportDuration(food)}} 
                />
                <InputText 
                    title='Health problem' value={healthProblem} icon='emoticon-sick-outline' type='text' placeholder='Enter your actual health problem' 
                    onChange={(food: string) => {setHealthProblem(food)}} 
                />
                
            </View>
        )
    }

    return (
        <View style={styles.container}>

            { renderContent() }

            <TouchableOpacity style={styles.touchableOpacity} onPress={selectedFood ? updateData : insertData}>
                <Text style={styles.touchableOpacityText}>Save Data </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        display: 'flex',
    },

    formContent: {
        marginTop: 30,
    },
    
    line: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 6,
        elevation: 1,
        marginBottom: 10,
        borderRightColor: '#CE0670',
        borderRightWidth: 5
    },
    title: {
        fontSize: 16,
        color: 'black'
    },
    touchableOpacity: {
        backgroundColor: '#CE0670',
        alignItems: 'center',
        borderRadius: 4,
        justifyContent: 'center',
        width: '100%',
        marginTop: 40
    },

    touchableOpacityText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        padding: 15,
        
    },
})

export default FormData