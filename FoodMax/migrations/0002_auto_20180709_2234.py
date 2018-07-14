# Generated by Django 2.0.7 on 2018-07-09 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FoodMax', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='menu',
            name='dish',
        ),
        migrations.AddField(
            model_name='menu',
            name='dish',
            field=models.ManyToManyField(null=True, to='FoodMax.SubMenu'),
        ),
        migrations.RemoveField(
            model_name='restaurant',
            name='coverage',
        ),
        migrations.AddField(
            model_name='restaurant',
            name='coverage',
            field=models.ManyToManyField(null=True, to='FoodMax.Coverage'),
        ),
        migrations.RemoveField(
            model_name='restaurant',
            name='menu',
        ),
        migrations.AddField(
            model_name='restaurant',
            name='menu',
            field=models.ManyToManyField(null=True, to='FoodMax.Menu'),
        ),
    ]
