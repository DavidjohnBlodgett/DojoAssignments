from __future__ import unicode_literals
from django.db import models
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'[a-zA-Z]+')

class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}

        # check lengths...
        if len(postData['first_name']) < 2:
            errors['first_name'] = 'User last name should be more than 2 characters'
        if len(postData['last_name']) < 2:
            errors['last_name'] = 'User last name should be more than 2 characters'
        if len(postData['password']) < 8:
            errors['password'] = 'Password must be more than 8 characters'

        # check regexs...
        if not NAME_REGEX.match(postData['first_name']):
            errors['first_name_char'] = 'User first name should only contain characters'
        if not NAME_REGEX.match(postData['last_name']):
            errors['last_name_char'] = 'User last name should only contain characters'
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = 'Email must be a real email address'

        # special checks...
        if not postData['password'] == postData['conf_pass']:
            errors['password_match'] = 'Password does not match confirmation'

        return errors;


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)

    # TODO: add birthday...
    password = models.CharField(max_length=255)
    # birthday = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    # *************************
    # Connect an instance of BlogManager to our User model overwriting
    # the old hidden objects key with a new one with extra properties!!!
    objects = UserManager()
    # *************************
