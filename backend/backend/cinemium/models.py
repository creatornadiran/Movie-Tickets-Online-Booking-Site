from django.db import models
from django.contrib.auth.models import User

class Cinema(models.Model):
    cinema_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45)
    district = models.CharField(max_length=45)
    city = models.CharField(max_length=45)
    zip_code = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        db_table = 'cinema'


class CinemaHall(models.Model):
    HALL_SIZES = (
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
    )
    cinema_hall_id = models.AutoField(primary_key=True)
    hall_size = models.CharField(max_length=1, choices=HALL_SIZES)
    cinema = models.ForeignKey(Cinema, on_delete=models.CASCADE)

    class Meta:
        db_table = 'cinema_hall'


class CinemaSeat(models.Model):
    cinema_seat_id = models.CharField(primary_key=True, max_length=45)
    booked_shows = models.CharField(max_length=1000, default="")
    cinema_hall = models.ForeignKey(CinemaHall, on_delete=models.CASCADE)
    row_no = models.CharField(max_length=45)
    col_no = models.CharField(max_length=45)

    class Meta:
        db_table = 'cinema_seat'


class Movie(models.Model):
    movie_id = models.AutoField(primary_key=True)
    poster = models.CharField(max_length=45)
    genre = models.CharField(max_length=45)
    date = models.DateTimeField()
    end_date = models.DateTimeField()
    actors = models.CharField(max_length=45)
    name = models.CharField(max_length=45)
    director = models.CharField(max_length=45)
    duration = models.CharField(max_length=45)
    language = models.CharField(max_length=45)
    about = models.CharField(max_length=1024)
    score = models.FloatField(null=True, blank=True, default=None)
    in_theatre = models.BooleanField(default=True)
    
    class Meta:
        db_table = 'movie'


class Show(models.Model):
    show_id = models.AutoField(primary_key=True)
    date = models.DateTimeField(blank=True, null=True)
    cinema_hall = models.ForeignKey(CinemaHall, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    show_price = models.DecimalField(max_digits=10, decimal_places=2)
    
    class Meta:
        db_table = 'show'


class Ticket(models.Model):
    ticket_id = models.AutoField(primary_key=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    show = models.ForeignKey(Show, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    purchase_time = models.DateTimeField(auto_now_add=True)
    seats = models.CharField(max_length=1000, default="")

    class Meta:
        db_table = 'ticket'


class Log(models.Model):
    message = models.CharField(max_length=255)
    level = models.CharField(max_length=20)
    timestamp = models.DateTimeField(auto_now_add=True)