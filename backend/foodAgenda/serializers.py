from rest_framework import serializers
from .models import *

class FoodSerializer(serializers.ModelSerializer):
    day = serializers.StringRelatedField(many=True)

    class Meta:
        model = Food
        fields = ['id', 'day','_name', 'quantity_eaten', 
        'q_water', 'q_other_liquid', 'fruit', 'sport', 'health_problem']
        
class DaySerialiser(serializers.ModelSerializer):
    class Meta:
        model = Day
        fields = ['id', 'date']