from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db import models


class Workout_category(models.Model):
    workout_type_id = models.IntegerField(primary_key=True)
    workout_name = models.CharField(max_length=50)

    def __str__(self):
        return self.workout_name


class Workout(models.Model):
    workout_name = models.CharField(max_length=50)
    workout_sets_n = models.IntegerField()
    workout_set_duration_m = models.IntegerField()
    workout_category = models.ForeignKey(Workout_category, on_delete=models.CASCADE)
    description = models.TextField()

    def __str__(self):
        return self.workout_name


class UserProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    height = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    weight = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    password = models.TextField(max_length=255, null=False, blank=False, default="default")


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)


@receiver(post_save, sender=User)
def populate_personal_info(sender, instance, created, **kwargs):
    if created:
        instance.first_name = "Default First Name"
        instance.last_name = "Default Last Name"
        instance.save()