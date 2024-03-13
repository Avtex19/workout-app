# Generated by Django 5.0.3 on 2024-03-13 11:27

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Workout_category',
            fields=[
                ('workout_type_id', models.IntegerField(primary_key=True, serialize=False)),
                ('workout_name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('height', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('weight', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('password', models.TextField(default='default', max_length=255)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Workout',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('workout_name', models.CharField(max_length=50)),
                ('workout_sets_n', models.IntegerField()),
                ('workout_set_duration_m', models.IntegerField()),
                ('description', models.TextField()),
                ('workout_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myapp.workout_category')),
            ],
        ),
    ]