from django.http import JsonResponse
from rest_framework import permissions, status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from ..models import *
from .serializers import WorkoutCategorySerializer, WorkoutSerializer, UserProfileSerializer, PlanSerializer
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
        '/api/show-workout-category',
        '/api/show-workout/<int:workout_type_id>',
        '/api/create/user',

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


class UserProfileAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserProfileSerializer(data=request.data)
        print(serializer.is_valid())
        print(serializer.errors)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PlanViewSet(viewsets.ModelViewSet):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer