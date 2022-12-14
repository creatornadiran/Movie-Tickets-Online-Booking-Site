from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
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
class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.Show
        fields = '__all__'
class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.Ticket
        fields = '__all__'
class LogSerializer(serializers.ModelSerializer):
    class Meta:
        model = m.Log
        fields = '__all__'
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        log = m.Log(message=f"User ID:{user.id} has registered.", level="info")
        log.save()
        return user
