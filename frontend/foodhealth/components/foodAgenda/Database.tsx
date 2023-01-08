import * as SQLite from 'expo-sqlite';

var db = SQLite.openDatabase("FoodCalendar.db");

export const insertData = (
    {date, food_name, number_times_eaten, q_water, q_liquid, eat_fruit, sport_duration, health_problem}: 
    {date: string, food_name: string, number_times_eaten: number, q_water: string, q_liquid: string, eat_fruit: string, sport_duration: number, health_problem: string}
    ) => {

    db.transaction(function (tx) {
        tx.executeSql(
            'INSERT INTO FooData (date, food_name, number_times_eaten, q_water, q_liquid, eat_fruit, sport_duration, health_problem) VALUES (?,?,?,?,?,?,?,?)',
            [date, food_name, number_times_eaten, q_water, q_liquid, eat_fruit, sport_duration, health_problem],
            (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                    console.log('Food saved Successfully....');
                } else console.log('Failed to save this food....');
            }
        );
    }); 

}

export const viewFoodList = () => {


    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM FooData',
            [],
            (tx, results) => {
                let temp = []
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                //setFoodList(temp)
                console.log(temp);
                
            }
        )
    })

} 





// Jeu de donnée
db.transaction(function (tx) {
    tx.executeSql(
        'INSERT INTO FooData (date, food_name, number_times_eaten, q_water, q_liquid, eat_fruit, sport_duration, health_problem) VALUES (?,?,?,?,?,?,?,?)',
        ['Sat Dec 02 2022', 'Banane Malaxé', 3, 5, 1, 1, 90, 'Malaria'],
        (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
                console.log('Food saved Successfully....')
            } else console.log('Failed to save this food....')
        }
    );
});