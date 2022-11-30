# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Cinema(models.Model):
    cinemaid = models.IntegerField(db_column='cinemaID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(max_length=45, blank=True, null=True)
    district = models.CharField(max_length=45, blank=True, null=True)
    city = models.CharField(max_length=45, blank=True, null=True)
    zip_code = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        db_table = 'cinema'


class CinemaHall(models.Model):
    cinema_hallid = models.IntegerField(db_column='cinema_hallID', primary_key=True)  # Field name made lowercase.
    total_seats = models.IntegerField(blank=True, null=True)
    cinemaid = models.ForeignKey(Cinema, models.DO_NOTHING, db_column='cinemaID', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'cinema_hall'


class CinemaSeat(models.Model):
    cinema_seatid = models.IntegerField(db_column='cinema_seatID', primary_key=True)  # Field name made lowercase.
    type = models.CharField(db_column='Type', max_length=45, blank=True, null=True)  # Field name made lowercase.
    cinema_hallid = models.ForeignKey(CinemaHall, models.DO_NOTHING, db_column='cinema_hallID', blank=True, null=True)  # Field name made lowercase.
    row_no = models.IntegerField(blank=True, null=True)
    col_no = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'cinema_seat'


class DiscountCoupon(models.Model):
    discount_couponid = models.IntegerField(db_column='discount_couponID', primary_key=True)  # Field name made lowercase.
    discount_amount = models.CharField(max_length=45, blank=True, null=True)
    name = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        db_table = 'discount_coupon'


class Movie(models.Model):
    movieid = models.IntegerField(db_column='MovieID', primary_key=True)  # Field name made lowercase.
    poster = models.CharField(db_column='Poster', max_length=45, blank=True, null=True)  # Field name made lowercase.
    genre = models.CharField(db_column='Genre', max_length=45, blank=True, null=True)  # Field name made lowercase.
    date = models.DateTimeField(db_column='Date', blank=True, null=True)  # Field name made lowercase.
    actors = models.CharField(db_column='Actors', max_length=45, blank=True, null=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=45, blank=True, null=True)  # Field name made lowercase.
    director = models.CharField(db_column='Director', max_length=45, blank=True, null=True)  # Field name made lowercase.
    duration = models.CharField(db_column='Duration', max_length=45, blank=True, null=True)  # Field name made lowercase.
    language = models.CharField(db_column='Language', max_length=45, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'movie'


class Payment(models.Model):
    paymentid = models.IntegerField(db_column='paymentID', primary_key=True)  # Field name made lowercase.
    payment_date = models.CharField(max_length=45, blank=True, null=True)
    discount_couponid = models.ForeignKey(DiscountCoupon, models.DO_NOTHING, db_column='discount_couponID', blank=True, null=True)  # Field name made lowercase.
    ticketid = models.ForeignKey('Ticket', models.DO_NOTHING, db_column='ticketID', blank=True, null=True)  # Field name made lowercase.
    price = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'payment'


class Show(models.Model):
    showid = models.IntegerField(db_column='showID', primary_key=True)  # Field name made lowercase.
    date = models.DateTimeField(blank=True, null=True)
    starttime = models.CharField(db_column='startTime', max_length=45, blank=True, null=True)  # Field name made lowercase.
    endtime = models.CharField(db_column='endTime', max_length=45, blank=True, null=True)  # Field name made lowercase.
    cinema_hallid = models.ForeignKey(CinemaHall, models.DO_NOTHING, db_column='cinema_hallID')  # Field name made lowercase.
    movieid = models.ForeignKey(Movie, models.DO_NOTHING, db_column='MovieID')  # Field name made lowercase.

    class Meta:
        db_table = 'show'


class ShowSeat(models.Model):
    show_seatid = models.IntegerField(db_column='show_seatID', primary_key=True)  # Field name made lowercase.
    status = models.CharField(max_length=45, blank=True, null=True)
    showid = models.ForeignKey(Show, models.DO_NOTHING, db_column='showID', blank=True, null=True)  # Field name made lowercase.
    bookingid = models.ForeignKey('Ticket', models.DO_NOTHING, db_column='bookingID', blank=True, null=True)  # Field name made lowercase.
    cinema_seatid = models.ForeignKey(CinemaSeat, models.DO_NOTHING, db_column='cinema_seatID', blank=True, null=True)  # Field name made lowercase.
    price = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'show_seat'


class Ticket(models.Model):
    ticketid = models.IntegerField(db_column='ticketID', primary_key=True)  # Field name made lowercase.
    price = models.DecimalField(max_digits=10, decimal_places=0, blank=True, null=True)
    showid = models.ForeignKey(Show, models.DO_NOTHING, db_column='showID', blank=True, null=True)  # Field name made lowercase.
    show_seatid = models.ForeignKey(ShowSeat, models.DO_NOTHING, db_column='show_seatID', blank=True, null=True)  # Field name made lowercase.
    userid = models.ForeignKey('User', models.DO_NOTHING, db_column='userID', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'ticket'


class User(models.Model):
    user_name = models.IntegerField(primary_key=True)
    password = models.CharField(max_length=45, blank=True, null=True)
    name = models.CharField(max_length=45, blank=True, null=True)
    email = models.CharField(max_length=45, blank=True, null=True)
    phone = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        db_table = 'user'
