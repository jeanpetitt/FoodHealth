import os
from sqlalchemy import Column, String, Integer, create_engine, Date
from flask_sqlalchemy import SQLAlchemy
import json

database_name = 'foodhealth'
database_path = 'postgresql://{}:{}@{}/{}'.format('jean','yvelos','localhost:5432', database_name)

db = SQLAlchemy()


"""
setup_db(app)
    binds a flask application and a SQLAlchemy service
"""
def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()
    
# def db_drop_and_create_all():
    # db.drop_all()
#     db.create_all()

# db_drop_and_create_all()
    
class Food(db.Model):
    __table_name__ = 'foods'
    id = Column(Integer, primary_key=True)
    name_food = Column(String)
    q_eaten = Column(Integer)
    q_water = Column(Integer)
    q_other_liquid = Column(Integer)
    fruit = Column(String)
    sport_duration = Column(Integer)
    health_problem = Column(String)
    date = Column(Date)
    
    def __init__(self, name_food, q_eaten, q_water, q_other_liquid, fruit, sport_duration, heath_problem, date):
        self.name_food = name_food
        self.q_eaten = q_eaten
        self.q_water = q_water
        self.q_other_liquid = q_other_liquid
        self.fruit = fruit
        self.sport_duration = sport_duration
        self.health_problem = heath_problem
        self.date = date
        
    def insert(self):
        db.session.add(self)
        db.session.commit()
        
    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
        
    def format(self):
        return {
            'id': self.id,
            'food': self.name_food,
            'q_eaten': self.q_eaten,
            'water': self.q_water,
            'other_liquid': self.q_other_liquid,
            'fruit': self.fruit,
            'sport_duration': self.sport_duration,
            'date': self.date,
            'health_problem': self.health_problem
        }
        
        