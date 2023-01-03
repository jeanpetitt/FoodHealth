# Generated by Django 4.1.4 on 2023-01-03 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foodAgenda', '0002_alter_food_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='Day',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('jour', models.CharField(max_length=10, verbose_name='Day')),
                ('annee', models.IntegerField(verbose_name='Annee')),
            ],
        ),
        migrations.RemoveField(
            model_name='food',
            name='date',
        ),
        migrations.AddField(
            model_name='food',
            name='day',
            field=models.ManyToManyField(related_name='Food', to='foodAgenda.day'),
        ),
    ]
