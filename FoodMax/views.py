import json

from django.core.mail import send_mail
from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from carton.cart import Cart


# Create your views here.

def index(request):
    coverage = Coverage.objects.all()
    dish = Submenu.objects.all()
    return render(request, 'foodMax/index.html', context={
        'coverage': coverage,
        'dish': dish
    })


def restaurants(request):
    coverage = Coverage.objects.all()
    searchWord = request.POST.get('location', '')
    coverageIndex = Coverage.objects.filter(name__icontains=searchWord)
    coverageDetail = CoverageDetail.objects.filter(coverage__name__icontains=searchWord)
    restaurants_found = Restaurant.objects.filter(coverage__name__icontains=searchWord)
    number_of_restaurants_found = Restaurant.objects.filter(coverage__name__icontains=searchWord).count()
    if searchWord == "":
        return redirect('home')
    else:
        location = "foodMax/restaurants.html"
        return render(request, location, context={
            'coverageDetail': coverageDetail,
            'coverageIndex': coverageIndex,
            'search_word': searchWord,
            'restaurant': restaurants_found,
            'coverage': coverage,
            'number_of_restaurants_found': number_of_restaurants_found
        })


def restaurants_detail(request, pk):
    cart = Cart(request.session)
    location = request.GET.get('ln')
    restaurant = get_object_or_404(Restaurant, pk=pk)
    coverageDetail = CoverageDetail.objects.filter(restaurant__id=pk).filter(coverage_id=location)
    price = cart.total
    return render(request, 'foodMax/restaurants_detail.html', context={
        'restaurant': restaurant,
        'coverageDetail': coverageDetail,
        'cart': cart,
        'price': price
    })


def add(request):
    cart = Cart(request.session)
    product = Submenu.objects.get(id=request.GET.get('dish_id'))
    cart.add(product, price=product.price)
    return HttpResponse("Added")


def remove(request):
    cart = Cart(request.session)
    product = Submenu.objects.get(id=request.GET.get('dish_id'))
    cart.remove(product)
    cart.update_session()
    return HttpResponse("Removed")


def add_quantity(request):
    cart = Cart(request.session)
    product = Submenu.objects.get(id=request.GET.get('dish_id'))
    quantity = request.GET.get('quantity')
    quantity = int(quantity)
    cart.set_quantity(product, quantity + 1)
    return HttpResponse("Quantity increased")


def minus_quantity(request):
    cart = Cart(request.session)
    product = Submenu.objects.get(id=request.GET.get('dish_id'))
    quantity = request.GET.get('quantity')
    quantity = int(quantity)
    cart.set_quantity(product, quantity - 1)
    return HttpResponse("Quantity decreased")


def email_order(request):
    cart = Cart(request.session).cart_serializable
    restaurant = get_object_or_404(Restaurant, pk=request.GET.get('restaurant'))
    send_mail('New Order', json.dumps(cart), 'foodmax@jaytechx.com', [restaurant.email, ])
    return HttpResponse("Email sent")

def checkout(request):
    return render(request,'foodMax/checkout.html')