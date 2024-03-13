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
        '/api/plan',
        '/plan/<int:user_id>/',

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
    lookup_field = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        if user_id:
            return Plan.objects.filter(user_id=user_id)
        else:
            return Plan.objects.none()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        print(request.data)
        print(serializer.is_valid())
        if serializer.is_valid():
            user_id = self.kwargs.get('user_id')
            serializer.save(user_id=user_id)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # unfortunately dont have enought time(due to unifersity stuff) for fixing post request and create specified
        # workout plan, but the way is clear and we can see that
        #superuser username is admin and password is admin123
