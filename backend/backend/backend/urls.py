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

router = routers.DefaultRouter()
router.register(r'Movies', v.MovieView)
router.register(r'MovieComingSoon', v.MovieComingSoonView)
router.register(r'CinemaHalls', v.CinemaHallView)
router.register(r'CinemaSeats', v.CinemaSeatView)
router.register(r'Cinemas', v.CinemaView)
router.register(r'Payments', v.PaymentView)
router.register(r'ShowSeats', v.ShowSeatView)
router.register(r'DiscountCoupons', v.DiscountCouponView)
router.register(r'UserViews', v.UserView)
router.register(r'TicketViews', v.TicketView)
router.register(r'ShowViews', v.ShowView)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
]

