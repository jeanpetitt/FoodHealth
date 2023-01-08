import { Text } from "react-native"


export const convertToDate = (date: Date) => {

    let days = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    let day = date.getDay()
        let weekDay
        if(day === 1){
            weekDay = 'Monday'
        }else if(day === 2){
            weekDay = 'Tuesday'
        }else if(day === 3){
            weekDay = 'Wednesday'
        }else if(day === 4){
            weekDay = 'Thursday'
        }else if(day === 5){
            weekDay = 'Friday'
        }else if(day === 6){
            weekDay = 'Saturday'
        }else if(day === 0){
            weekDay = 'Sunday'
        }  
        
        //days = days.toLocaleString('en-US', {minimumIntegerDigits: 2})

    return(
        <Text>{` ${weekDay}, ${days}/${month}/${year}`}</Text>
    )
}