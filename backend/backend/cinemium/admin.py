from django.contrib import admin
from . import models as m
# Register your models here.

admin.site.register(m.CinemaHall)
admin.site.register(m.CinemaSeat)
admin.site.register(m.Movie)
admin.site.register(m.Payment)
admin.site.register(m.Ticket)
admin.site.register(m.Show)
admin.site.register(m.Cinema)