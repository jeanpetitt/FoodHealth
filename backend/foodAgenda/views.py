from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework import viewsets
from .serializers import *

@api_view(['GET'])
def ApiOverview(request):
    api_urls = {
        'get_agenda:' 'agenda/get',
        'add_agenda:' '/agenda/add'
    }
    return Response(api_urls)
  

# Create your views
class AgendaList(ListAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
        
    

@api_view(['POST'])
def add_items(request):
    food = FoodSerializer(data=request.data, context={'request': request})
    # day = DaySerialiser(data=request.data)
    # validating for already existing data
    if Food.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')

    if   food.is_valid():
        food.save()
        return Response(food.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)