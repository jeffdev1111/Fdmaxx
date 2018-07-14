from django.db import models
import uuid

# Create your models here.
from django.urls import reverse


class Restaurant(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,
                          help_text="Restaurant Id", editable=False)
    name = models.CharField(max_length=200, help_text="Enter the name of the restaurant")
    tag_line = models.CharField(blank=True, max_length=220, help_text=("Enter your restaurant tag line"))
    email = models.EmailField(blank=True,help_text="Enter the restaurant email to receive orders")
    cover_image = models.ImageField(upload_to='restaurant_cover_images/%Y/%m/%d/',
                                    help_text="Upload restaurant cover image")
    logo = models.ImageField(upload_to='restaurant_logos/%Y/%m/%d/', help_text="Upload restaurant logo")
    minimum_food_amount = models.IntegerField(help_text="Enter the minimum food amount")
    description = models.TextField(max_length=1000, help_text="Enter the description of the restaurant")
    address = models.CharField(max_length=100, help_text="Enter the address of the restaurant")
    menu = models.ManyToManyField('Menu')
    coverage = models.ManyToManyField('Coverage')

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        """
        Returns the url to access a particular author instance.
        """
        return reverse('restaurant_detail', args=[str(self.id)])


class Menu(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,
                          help_text="Menu Id", editable=False)
    name = models.CharField(max_length=200, help_text="Enter the name of the menu", blank=True)
    cover_image = models.ImageField(upload_to='menu_cover_images/%Y/%m/%d/', help_text="Upload menu cover image")
    description = models.TextField(max_length=1000, help_text="Enter menu description")
    dish = models.ManyToManyField('Submenu')

    def __str__(self):
        return self.name


class Submenu(models.Model):
    name = models.CharField(max_length=300, help_text="Enter the dish name")
    price = models.IntegerField(help_text="Enter the price of the dish")
    dish_image = models.ImageField(upload_to='dish_images/%Y/%m/%d/', help_text="Upload dish cover image")

    def __str__(self):
        return self.name


class Coverage(models.Model):
    name = models.CharField(max_length=300, help_text="Enter the available location")
    time_needed = models.IntegerField(help_text="Enter time needed to complete delivery. eg (40 = > 40 minutes)")

    def __str__(self):
        return self.name
