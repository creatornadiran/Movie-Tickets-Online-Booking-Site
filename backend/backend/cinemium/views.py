from django.shortcuts import render
from rest_framework import viewsets
from . import serializers as s
from .import models as m
# Create your views here.

class MovieView(viewsets.ModelViewSet):
    serializer_class = s.MovieSerializer
    queryset = m.Movie.objects.all()

class CinemaHallView(viewsets.ModelViewSet):
    serializer_class = s.CinemaHallSerializer
    queryset = m.CinemaHall.objects.all()

class CinemaSeatView(viewsets.ModelViewSet):
    serializer_class = s.CinemaSeatSerializer
    queryset = m.CinemaSeat.objects.all()

class CinemaView(viewsets.ModelViewSet):
    serializer_class = s.CinemaSerializer
    queryset = m.Cinema.objects.all()

class UserView(viewsets.ModelViewSet):
    serializer_class = s.UserSerializer
    queryset = m.User.objects.all()

class TicketView(viewsets.ModelViewSet):
    serializer_class = s.TicketSerializer
    queryset = m.Ticket.objects.all()

class ShowView(viewsets.ModelViewSet):
    serializer_class = s.ShowSerializer
    queryset = m.Show.objects.all()

class PaymentView(viewsets.ModelViewSet):
    serializer_class = s.PaymentSerializer
    queryset = m.Payment.objects.all()

class DiscountCouponView(viewsets.ModelViewSet):
    serializer_class = s.DiscountCouponSerializer
    queryset = m.DiscountCoupon.objects.all()

class ShowSeatView(viewsets.ModelViewSet):
    serializer_class = s.ShowSeatSerializer
    queryset = m.ShowSeat.objects.all()



