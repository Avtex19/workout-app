from rest_framework import serializers
from ..models import *


class WorkoutCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout_category
        fields = '__all__'


class WorkoutSerializer(serializers.ModelSerializer):
    workout_category = WorkoutCategorySerializer()

    class Meta:
        model = Workout
        fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    user = serializers.CharField(write_only=True)

    class Meta:
        model = UserProfile
        fields = "__all__"

