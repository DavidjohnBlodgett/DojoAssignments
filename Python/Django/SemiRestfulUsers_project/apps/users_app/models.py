from __future__ import unicode_literals
# from django.core.validators import validate_email
import re

from django.db import models

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# if validate_email(request.POST['email']):
#     res='not correct'
class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['first_name']) < 5 or len(postData['last_name']) < 5:
            errors["name"] = "User first and last name should be more than 5 characters"
        if not EMAIL_REGEX.match(postData['email']):
            errors["email"] = "Email must be a real email address"
        return errors;


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    # *************************
    # Connect an instance of BlogManager to our User model overwriting
    # the old hidden objects key with a new one with extra properties!!!
    objects = UserManager()
    # *************************
