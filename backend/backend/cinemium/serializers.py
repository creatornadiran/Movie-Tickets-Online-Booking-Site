from rest_framework import serializers
from . import models as m

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.Movie
        fields = '__all__'
class CinemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.Cinema
        fields = '__all__'
class CinemaHallSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.CinemaHall
        fields = '__all__'
class CinemaSeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.CinemaSeat
        fields = '__all__'
class DiscountCouponSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.DiscountCoupon
        fields = '__all__'
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.Payment
        fields = '__all__'
class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.Show
        fields = '__all__'
class ShowSeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.ShowSeat
        fields = '__all__'
class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.Ticket
        fields = '__all__'
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.User
        fields = '__all__'