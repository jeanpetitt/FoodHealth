from django.urls import path, include
from .views import *
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register('agenda', AgendaList, 'post')

urlpatterns = [
    path('', ApiOverview, name='home'),
    path('api-auth/', include('rest_framework.urls')),
    path('agenda/get', AgendaList.as_view(), name='get_agenda'),
    path('agenda/add', add_items, name="add_agenda")
]
