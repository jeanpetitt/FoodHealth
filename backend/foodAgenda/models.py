from django.db import models

# Create your models here.
class Food(models.Model):
    name_food = models.CharField('Name', max_length=200)
    quantity = models.IntegerField('Quantity')
    date = models.DateField()