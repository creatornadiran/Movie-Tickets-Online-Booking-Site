from django_crontab.crontab import Crontab
from cinemium.models import Movie
import datetime

@Crontab()
def check_movie_dates():
    now = datetime.datetime.now()
    movies = Movie.objects.all()
    for movie in movies:
        if movie.date <= now <= movie.end_date:
            movie.in_theatre = True
            movie.save()
        elif now > movie.end_date:
            movie.delete()
