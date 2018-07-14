from django.contrib import admin
from .models import *


# Register your models here.

@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    fields = ['name', 'tag_line', 'email', ('cover_image', 'logo'), 'minimum_food_amount', 'description',
              'address', ('menu', 'coverage')]


admin.site.register(Menu)
admin.site.register(Submenu)
admin.site.register(Coverage)
