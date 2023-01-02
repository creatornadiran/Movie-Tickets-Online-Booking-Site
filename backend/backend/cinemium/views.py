from django.shortcuts import render
from . import serializers as s
from .import models as m
from django.contrib.auth.models import User, update_last_login
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import viewsets, generics, status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.

class MovieView(viewsets.ModelViewSet):
    serializer_class = s.MovieSerializer
    queryset = m.Movie.objects.filter(in_theatre=True)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
        
class MovieComingSoonView(viewsets.ModelViewSet):
    serializer_class = s.MovieSerializer
    queryset = m.Movie.objects.filter(in_theatre=False)

class CinemaHallView(viewsets.ModelViewSet):
    serializer_class = s.CinemaHallSerializer
    queryset = m.CinemaHall.objects.all()
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

class CinemaSeatView(viewsets.ModelViewSet):
    serializer_class = s.CinemaSeatSerializer
    queryset = m.CinemaSeat.objects.all()

class CinemaView(viewsets.ModelViewSet):
    serializer_class = s.CinemaSerializer
    queryset = m.Cinema.objects.all()
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

class TicketView(viewsets.ModelViewSet):
    serializer_class = s.TicketSerializer
    queryset = m.Ticket.objects.all()

class ShowView(viewsets.ModelViewSet):
    serializer_class = s.ShowSerializer
    queryset = m.Show.objects.all()
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

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
    tickets = user.ticket_set.all() #query
    serializer = s.TicketSerializer(tickets, many=True)
    return Response(serializer.data)

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = s.RegisterSerializer

@api_view(['GET'])
def getShows(request, cinema_id, movie_day, movie_id):
    shows = m.Show.objects.raw('SELECT * FROM cinemium.show WHERE cinema_hall_id IN (SELECT cinema_hall_id FROM cinema_hall WHERE cinema_id = %s) AND movie_id = %s AND DATE(%s)=DATE(date)', [cinema_id, movie_id, movie_day ])
    serializer = s.ShowSerializer(shows, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getSeats(request, cinema_hall_id):
    seats = m.CinemaSeat.objects.raw('SELECT * FROM cinemium.cinema_seat WHERE cinema_hall_id = %s', [cinema_hall_id])
    serializer = s.CinemaSeatSerializer(seats, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def createTicket(request, total_price, seat_ids, show_id):
    user = request.user
    seat_ids_to_uptade = seat_ids.split(", ")
    for seat_id in seat_ids_to_uptade:
        if seat_id == "": continue
        seat = m.CinemaSeat.objects.get(pk=seat_id)
        booked_shows_list = seat.booked_shows.split(", ")
        if str(show_id) in booked_shows_list:
            return Response({"error": "One or more of the specified seats are already booked for this show"}, status=status.HTTP_400_BAD_REQUEST)
        seat.booked_shows = seat.booked_shows+", "+str(show_id)
        seat.save()
    ticket = m.Ticket(price=total_price, show_id=show_id, user_id=user.id, seats=seat_ids)
    ticket.save()
    serializer = s.TicketSerializer(ticket)
    return Response(serializer.data, status=status.HTTP_201_CREATED)
