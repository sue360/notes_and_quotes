from rest_framework import serializers
from django.contrib.auth import get_user_model, password_validation, hashers
from django.core.exceptions import ValidationError

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):
        print('data ->', data)
        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            raise ValidationError({
                'password_confirmation': 'does not match password field'
            })

        password_validation.validate_password(password)

        data['password'] = hashers.make_password(password)
        return data


    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'first_name', 'location', 'password', 'password_confirmation')
