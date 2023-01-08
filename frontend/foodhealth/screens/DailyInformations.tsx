import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { Text, ScrollView, View, StyleSheet, Dimensions, Button, RefreshControl, SafeAreaView } from 'react-native'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import * as SQLite from 'expo-sqlite';

import { convertToDate } from '../components/foodAgenda/Functions'
import FormData from './FormData'


var db = SQLite.openDatabase("FoodCalendar.db");

//Refresh control
const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function DailyInformations() {

    const [date, setDate] = useState(new Date())
    const [foodList, setFoodList] = useState<any>([])  
    const [refreshing, setRefreshing] = useState(false)
    const [key, setKey] = useState(0)
    const mounted = useRef<any>()

    
    //get food list in database
    useEffect(() => {

        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='FooData'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS FooData', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS FooData(date VARCHAR PRIMARY KEY, \
                                food_name VARCHAR(30), \
                                number_times_eaten INT(50), \
                                q_water VARCHAR(50), \
                                q_liquid VARCHAR(50), \
                                eat_fruit INT(1), \
                                sport_duration INT(50), \
                                health_problem VARCHAR(100))',
                            []
                        );                        
                    }
                }
            );
        })

        // get food List and set it to foodList state
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM FooData',
                [],
                (tx, results) => {
                    let temp = []
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setFoodList(temp)
                }
            )
        })
    }, [])    

    // Get food data corresponding to the day selected
    const filterFood = foodList.find((f: any) => {            
        return f.date == date.toDateString()
    })
    
    //Date picker code
    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate
        setDate(currentDate)
    }

    const showMode = (currentMode: any) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        })
    }

    const showDatepicker = () => {
        showMode('date')
    }


    //Refresh control
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setKey((prevKey) => prevKey + 1)
        wait(2000).then(() => setRefreshing(false))
    }, [date])
    

    return (
        <SafeAreaView style={styles.container}>
            <Button onPress={showDatepicker} color='lightpurple' title="Select a date here" />
            <ScrollView
                key={key}
                refreshControl={
                    <RefreshControl
                    colors={['#CE0670']}
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                }
            >
                <View style={styles.topBoxe}>
                    <Text style={styles.date}>{convertToDate(date)}</Text>
                </View>
                <View style={{ padding: 10, paddingBottom: 50 }}>

                    {
                        <FormData date={date.toDateString()} selectedFood={filterFood} />
                    }
                    
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        display: 'flex',
        paddingTop: 27,
        padding: 0,
        backgroundColor: 'lightorange',
        height: Dimensions.get('window').height,
    },
    topBoxe: {
        backgroundColor: 'blue',
        padding: 20,
    },
    date: {
        color: '#fff',
        fontSize: 18,
        padding: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#fc94af'
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
