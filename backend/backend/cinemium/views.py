from django.shortcuts import render
from rest_framework import viewsets, generics
from . import serializers as s
from .import models as m
from django.contrib.auth.models import User, update_last_login
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.

class MovieView(viewsets.ModelViewSet):
    serializer_class = s.MovieSerializer
    queryset = m.Movie.objects.filter(in_theatre=True)

class MovieComingSoonView(viewsets.ModelViewSet):
    serializer_class = s.MovieSerializer
    queryset = m.Movie.objects.filter(in_theatre=False)

class CinemaHallView(viewsets.ModelViewSet):
    serializer_class = s.CinemaHallSerializer
    queryset = m.CinemaHall.objects.all()

class CinemaSeatView(viewsets.ModelViewSet):
    serializer_class = s.CinemaSeatSerializer
    queryset = m.CinemaSeat.objects.all()

class CinemaView(viewsets.ModelViewSet):
    serializer_class = s.CinemaSerializer
    queryset = m.Cinema.objects.all()

class TicketView(viewsets.ModelViewSet):
    serializer_class = s.TicketSerializer
    queryset = m.Ticket.objects.all()

class ShowView(viewsets.ModelViewSet):
    serializer_class = s.ShowSerializer
    queryset = m.Show.objects.all()

class PaymentView(viewsets.ModelViewSet):
    serializer_class = s.PaymentSerializer
    queryset = m.Payment.objects.all()



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        update_last_login(None, user)
        # Add custom claims
        token['username'] = user.username
        # ...
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getTickets(request):
    user = request.user
    tickets = user.ticket_set.all()
    serializer = s.TicketSerializer(tickets, many=True)
    return Response(serializer.data)

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = s.RegisterSerializer