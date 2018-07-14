# Generated by Django 2.0.7 on 2018-07-14 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FoodMax', '0008_auto_20180714_1322'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='restaurant',
            name='coverage',
        ),
        migrations.AddField(
            model_name='coverage',
            name='restaurant',
            field=models.ManyToManyField(to='FoodMax.Restaurant'),
        ),
        migrations.AlterField(
            model_name='menu',
            name='dish',
            field=models.ManyToManyField(to='FoodMax.Submenu'),
        ),
    ]