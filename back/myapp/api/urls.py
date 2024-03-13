from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from .views import *

urlpatterns = [
    path('', views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('show-workout-category/',ShowWorkoutCategory.as_view(),name='show-workout-category'),
    path('show-workout/<int:workout_type_id>/', ShowWorkout.as_view(), name='show-workout'),
    path('create/user/', UserProfileAPIView.as_view(), name='create-user-profile'),
    path('plan/', PlanViewSet.as_view({'get': 'list', 'post': 'create'}), name='plan-view'),
]
