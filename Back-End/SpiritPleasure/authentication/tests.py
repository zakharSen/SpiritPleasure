# tests.py

from django.test import TestCase, Client
from django.urls import reverse
from .models import CustomUser
import json


class UserIntegrationTest(TestCase):
    def setUp(self):
        self.client = Client()

    def test_create_user(self):
        # Перевірка створення користувача
        create_user_url = reverse('create_user')
        user_data = {
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'testpassword'
        }
        response = self.client.post(create_user_url, json.dumps(user_data), content_type='application/json')
        self.assertEqual(response.status_code, 201)

        # Перевірка, що користувач існує в базі даних
        self.assertTrue(CustomUser.objects.filter(username='testuser').exists())

    def test_get_user(self):
        # Створюємо тестового користувача
        user = CustomUser.objects.create_user(username='testuser', email='test@example.com', password='testpassword')

        # Перевірка отримання інформації про користувача
        get_user_url = reverse('get_user', args=[user.id])
        response = self.client.get(get_user_url)
        self.assertEqual(response.status_code, 200)

        # Перевірка, що отримана інформація відповідає даним користувача
        response_data = response.json()
        self.assertEqual(response_data['username'], 'testuser')
        self.assertEqual(response_data['email'], 'test@example.com')
