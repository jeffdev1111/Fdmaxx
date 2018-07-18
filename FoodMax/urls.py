from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('restaurants/', views.restaurants, name='restaurant'),
    path('restaurants/details/<pk>/', views.restaurants_detail, name='restaurant_detail'),
    path('checkout/', views.checkout, name='checkout'),
    path('add/', views.add, name='add_to_cart'),
    path('remove/', views.remove, name='remove_from_cart'),
    path('new_cart/', views.newCart, name='new_cart'),
    path('email/', views.email_order, name='email_order'),
    path('add_quantity/', views.add_quantity, name='add_quantity'),
    path('minus_quantity/', views.minus_quantity, name='minus_quantity'),

]
