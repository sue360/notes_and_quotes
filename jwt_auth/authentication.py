from rest_framework.authentication import BaseAuthentication
from django.contrib.auth import get_user_model
from rest_framework.exceptions import PermissionDenied

User = get_user_model()

from django.conf import settings
import jwt

class JWTAuthentication(BaseAuthentication):

    def authenticate(self, request):
        if not request.headers:
            print('NO HEADERS PRESENT')
            return None 

        headers = request.headers.get('Authorization')
        if not headers:
            print('AUTHORIZATION HEADER NOT PRESENT')
            return None

        if not headers.startswith('Bearer '):
            print('INVALID TOKEN FORMAT')
            raise PermissionDenied('Invalid Token')

        token = headers.replace('Bearer ', '')
        print('TOKEN ->', token)

        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])

            user = User.objects.get(pk=payload['sub'])
            print(user)
        except User.DoesNotExist as e:
            raise PermissionDenied('User not found')
        except Exception as e:
            print(e)
            raise PermissionDenied(str(e))

        return (user, token)