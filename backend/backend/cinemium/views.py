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
    queryset = m.Movie.objects.all()
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        log = m.Log(message=f"Movie ID:{serializer.data['movie_id']} created.", level="info")
        log.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        log = m.Log(message=f"Movie ID:{instance.movie_id} removed.", level="info")
        log.save()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        log = m.Log(message=f"Movie ID:{instance.movie_id} updated.", level="info")
        log.save()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class CinemaHallView(viewsets.ModelViewSet):
    serializer_class = s.CinemaHallSerializer
    queryset = m.CinemaHall.objects.all()
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        log = m.Log(message=f"Hall ID:{serializer.data['cinema_hall_id']} created.", level="info")
        log.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        log = m.Log(message=f"Hall ID:{instance.cinema_hall_id} removed.", level="info")
        log.save()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

class CinemaSeatView(viewsets.ModelViewSet):
    serializer_class = s.CinemaSeatSerializer
    queryset = m.CinemaSeat.objects.all()

class CinemaView(viewsets.ModelViewSet):
    serializer_class = s.CinemaSerializer
    queryset = m.Cinema.objects.all()
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        log = m.Log(message=f"Cinema ID:{serializer.data['cinema_id']} created.", level="info")
        log.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        log = m.Log(message=f"Cinema ID:{instance.cinema_id} removed.", level="info")
        log.save()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

class TicketView(viewsets.ModelViewSet):
    serializer_class = s.TicketSerializer
    queryset = m.Ticket.objects.all()

class ShowView(viewsets.ModelViewSet):
    serializer_class = s.ShowSerializer
    queryset = m.Show.objects.all()
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        log = m.Log(message=f"Show ID:{serializer.data['show_id']} created.", level="info")
        log.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        log = m.Log(message=f"Show ID:{instance.show_id} removed.", level="info")
        log.save()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        log = m.Log(message=f"Show ID:{instance.show_id} updated.", level="info")
        log.save()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        update_last_login(None, user)
        log = m.Log(message=f"User ID:{user.id} logged in.", level="info")
        if(user.is_superuser): log = m.Log(message=f"Superuser ID:{user.id} logged in.", level="info")
        log.save()
        token['username'] = user.username
        token['is_superuser'] = user.is_superuser
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = s.RegisterSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getTickets(request):
    user = request.user
    tickets = m.Ticket.objects.raw('SELECT * FROM cinemium.ticket WHERE user_id = %s', [user.id ])
    serializer = s.TicketSerializer(tickets, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getShows(request, cinema_id, movie_day, movie_id):
    shows = m.Show.objects.raw('SELECT * FROM cinemium.show WHERE cinema_hall_id IN (SELECT cinema_hall_id FROM cinema_hall WHERE cinema_id = %s) AND movie_id = %s AND DATE(%s)=DATE(date)', [cinema_id, movie_id, movie_day ])
    serializer = s.ShowSerializer(shows, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getUsersByCinemaId(request, cinema_id):
    shows = User.objects.raw('SELECT * FROM cinemium.auth_user INNER JOIN ticket ON ticket.user_id = auth_user.id INNER JOIN cinemium.show ON cinemium.show.show_id = ticket.show_id INNER JOIN cinema_hall ON cinema_hall.cinema_hall_id = cinemium.show.cinema_hall_id INNER JOIN cinema ON cinema.cinema_id = cinema_hall.cinema_id WHERE cinema.cinema_id = %s', [cinema_id])
    serializer = s.ShowSerializer(shows, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getSeats(request, cinema_hall_id):
    seats = m.CinemaSeat.objects.raw('SELECT * FROM cinemium.cinema_seat WHERE cinema_hall_id = %s', [cinema_hall_id])
    serializer = s.CinemaSeatSerializer(seats, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getLogs(request):
    logs = m.Log.objects.all()
    serializer = s.LogSerializer(logs, many=True)
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
    log = m.Log(message=f"User ID:{user.id} purchased Ticket ID:{ticket.ticket_id}.", level="info")
    log.save()
    serializer = s.TicketSerializer(ticket)
    return Response(serializer.data, status=status.HTTP_201_CREATED)
