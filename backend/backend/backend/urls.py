"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from cinemium import views as v

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

router = routers.DefaultRouter()
router.register(r'Movies', v.MovieView)
router.register(r'CinemaHalls', v.CinemaHallView)
router.register(r'CinemaSeats', v.CinemaSeatView)
router.register(r'Cinemas', v.CinemaView)
router.register(r'TicketViews', v.TicketView)
router.register(r'ShowViews', v.ShowView)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path('Shows/<int:cinema_id>/<str:movie_day>/<int:movie_id>', v.getShows, name='get_shows'),
    path('Seats/<int:cinema_hall_id>', v.getSeats, name='get_seats'),
    path('CreateTicket/<int:total_price>/<str:seat_ids>/<int:show_id>', v.createTicket, name='create_ticket'),
    path('getUsersByCinemaId/<int:cinema_id>', v.getUsersByCinemaId, name='get_users_by_cinema_id'),
    path(r'Tickets/', v.getTickets),
    path(r'Logs/', v.getLogs),
    path(r'token/', v.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path(r'token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path(r'register/', v.RegisterView.as_view(), name='auth_register'),
]

