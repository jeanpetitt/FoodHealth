from models import Food, setup_db, Questions
from flask import Flask, request, jsonify, abort
from flask_cors import CORS



app = Flask(__name__)
setup_db(app)
CORS(app)
    #headers cors
@app.after_request
def after_request(response):
        response.headers.add(
            "Access-Control-Allow-Headers", "Content-Type,Authorization,true"
        )
        response.headers.add(
            "Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTION"
        )
        return response
    
    # afficher l'agenda
@app.route('/foods', methods=['GET'])
def get_agenda():
        foods = Food.query.all()
        data  = []
        date_distinct = Food.query.distinct(Food.date).all()
        list_food = []
        ls = [f.format() for f in foods]
        for dates in date_distinct:
            print(dates)
            data.append({
                'date': dates.date,
                'food': []
            }) 
        for food in foods:
            for food_data in data:
                if food.date == food_data['date']:
                    food_data['food'].append(food.format())
                    # obtenir une liste des foods
        for dat in data:
            if dat not in list_food:
                list_food.append(dat) 
        # if len(list_food) == 0:
        #     abort(404)
        
        return jsonify({
            'success': True,
            'foods': ls,
            'tota_query': len(foods)
        })
        
@app.route('/foods', methods=['POST'])
def add_food_agenda():
        body = request.get_json()
        new_name_food = body.get('name_food', None)
        new_q_eaten = body.get('q_eaten', None)
        new_q_water = body.get('q_water', None)
        new_q_other_liquid = body.get('q_other_liquid', None)
        new_fruit = body.get('fruit', None)
        new_sport_duration = body.get('sport_duration', None)
        new_health_problem = body.get('health_problem', None)
        new_date = body.get('date', None)
        
        food = Food(name_food=new_name_food, q_eaten=new_q_eaten, 
                    q_water=new_q_water, q_other_liquid=new_q_other_liquid,
                    fruit=new_fruit, sport_duration=new_sport_duration,
                    heath_problem=new_health_problem, date=new_date
                    )
        food.insert()
        
        return jsonify({
                'success': True,
                'created': food.format(),
                'total_query': len(Food.query.all()),
        })
        
        
     # route permettant de supprimer une question
@app.route("/foods/<int:food_id>/delete", methods=['DELETE'])
def delete_food(food_id):
        try:
            food = Food.query.filter(Food.id == food_id).one_or_none()
            if food is None:
                abort(404)

            food.delete()
            return jsonify(
                {
                    "success": True,
                    "deleted": food_id,
                    "total_questions": len(Food.query.all()),
                }
            )

        except:
            abort(422)


@app.route('/question/answer')
def get_question():
    questions = Questions.query.all()
    list_question = [f.format() for f in questions]
    
    return jsonify({
        "success": True,
        "questions":list_question
    })

# get anwser of the question
@app.route('/question/answer', methods=['POST'])
def get_answer_of_question():
    body = request.get_json()
    question = body.get("search", None)
    
    if question == None or question == '':
        abort(422)
    
    try:
        results = Questions.query.filter(Questions.question.like(f'%{question}%')).all()
        
        for res in results:
            if res.question == question:
                print(res.question)
                result = res.format()
                
            else:
                result = []
        
        return jsonify({
                'success': True,
                'reponses': result,
                'total_questions': len(result),
            })

    except:
        abort(404)


if __name__ == '__main__':
    app.run(host='192.168.43.6', port=3000, debug=True)
   