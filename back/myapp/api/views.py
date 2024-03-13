from django.http import JsonResponse
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from ..models import *
from rest_framework import generics


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        ''
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)


class ShowWorkoutCategory(generics.ListAPIView):
    queryset = Workout_category.objects.all()
    serializer_class = WorkoutCategorySerializer


class ShowWorkout(generics.ListAPIView):
    serializer_class = WorkoutSerializer

    def get_queryset(self):
        workout_type_id = self.kwargs.get('workout_type_id')
        return Workout.objects.filter(workout_category__workout_type_id=workout_type_id)


