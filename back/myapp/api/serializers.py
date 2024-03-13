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


class PlanSerializer(serializers.ModelSerializer):
    muscle_groups = WorkoutCategorySerializer(many=True)
    exercises = WorkoutSerializer(many=True)

    class Meta:
        model = Plan
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = UserProfile
        fields = ['user', 'height', 'weight', 'password']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create_user(**user_data)
        return UserProfile.objects.create(user=user, **validated_data)
