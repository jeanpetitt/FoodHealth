from django.db import models
from django.utils import timezone

date_now = timezone.now()
date_now.strftime("%Y:%m:%d")

class Day(models.Model):
    date = models.DateField(default=date_now)
    
    def __str__(self):
        return f'date: {self.date}'
    
    
    

# Create your models here.
class Food(models.Model):
    _name = models.CharField('Food Name',max_length=200)
    quantity_eaten = models.IntegerField('Quantity')
    q_water = models.CharField('Quantity Water', max_length=10)
    q_other_liquid = models.CharField('Quantity Other Liquid', max_length=10)
    fruit = models.CharField('Frutis eaten', max_length=50)
    sport = models.IntegerField('Sport Time')
    day = models.ManyToManyField(Day, related_name='Food')
    health_problem = models.CharField('Health Problem', max_length=100)
    
    def __str__(self):
        return f'{self._name}'
    
    
    

    # add food
    # def add(self):
        