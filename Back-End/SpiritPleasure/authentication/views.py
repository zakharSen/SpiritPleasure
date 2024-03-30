# views.py

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import CustomUser
import json


@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if username and email and password:
            user = CustomUser.objects.create_user(username=username, email=email, password=password)
            return JsonResponse({'message': 'User created successfully'}, status=201)
        else:
            return JsonResponse({'error': 'Missing username, email, or password'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)


def get_user(request, user_id):
    if request.method == 'GET':
        try:
            user = CustomUser.objects.get(id=user_id)
            user_data = {
                'id': user.id,
                'username': user.username,
                'email': user.email
            }
            return JsonResponse(user_data, status=200)
        except CustomUser.DoesNotExist:
            return JsonResponse({'error': 'User does not exist'}, status=404)
    else:
        return JsonResponse({'error': 'Only GET requests are allowed'}, status=405)
