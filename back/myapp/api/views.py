from django.http import JsonResponse
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from ..models import *
from .serializers import WorkoutCategorySerializer, WorkoutSerializer, UserProfileSerializer
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


class UserProfileAPIView(APIView):
    def get(self, request):
        profiles = UserProfile.objects.all()
        serializer = UserProfileSerializer(profiles, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            try:

                # Create the user profile using the provided username
                profile_data = {
                    'user': request.data['user'],  # Use the provided username
                    'height': request.data.get('height'),
                    'weight': request.data.get('weight'),
                    'password': request.data.get('password')
                }
                print(profile_data)
                print(request.data)
                profile_serializer = UserProfileSerializer(data=profile_data)
                if profile_serializer.is_valid():
                    profile_serializer.save()
                    return Response(profile_serializer.data, status=status.HTTP_201_CREATED)
                else:

                    return Response(profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)