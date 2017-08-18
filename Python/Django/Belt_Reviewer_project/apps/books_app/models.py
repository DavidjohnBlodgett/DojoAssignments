from __future__ import unicode_literals
from django.contrib import messages
from django.db import models
from ..users_app.models import User
import re

class BookManager(models.Manager):
    pass

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    # *************************
    objects = BookManager()
    # *************************

class Reviews(models.Model):
    content = models.TextField(max_length=1000)
    reviewer = models.ForeignKey(User, related_name = 'user_reviews')
    book = models.ForeignKey(Book, related_name = 'book_reviews')
