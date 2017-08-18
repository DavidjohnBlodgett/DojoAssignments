from __future__ import unicode_literals
from django.contrib import messages
from django.db import models
import bcrypt
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'[a-zA-Z]+')

class UserManager(models.Manager):
    def registration_validator(self, request):
        errors = {}
        # check lengths...
        if len(request.POST['name']) < 2:
            errors['name'] = 'User name should be more than 2 characters'
        if len(request.POST['alias']) < 2:
            errors['alias'] = 'User alias should be more than 2 characters'
        if len(request.POST['password']) < 8:
            errors['password'] = 'Password must be more than 8 characters'

        # check regexs...
        # TODO: add stuff for alias...
        if not NAME_REGEX.match(request.POST['name']):
            errors['first_name_char'] = 'User name should only contain characters'
        # if not NAME_REGEX.match(request.POST['last_name']):
        #     errors['last_name_char'] = 'User last name should only contain characters'
        if not EMAIL_REGEX.match(request.POST['email']):
            errors['email'] = 'Email must be a real email address'

        # special checks...
        if not request.POST['password'] == request.POST['conf_pass']:
            errors['password_match'] = 'Password does not match confirmation'

        # check to make sure a user with that email doesn't already exist...
        test = User.objects.filter(email=request.POST['email'])
        if len(test) > 0:
            errors['email_collision'] = 'User with that email already exists'

        return errors;

    def register_user(self, request):
        print request.POST
        errors = self.registration_validator(request)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            return False
        else:
            hash1 = self.create_hash(request.POST['password'])
            temp = User.objects.create(name=request.POST['name'],alias=request.POST['alias'],email=request.POST['email'],password=hash1)
            temp.save()
            return True

    def create_hash(self, password):
        return bcrypt.hashpw(password.encode(), bcrypt.gensalt())

    def login(self, request):
        try:
            temp = User.objects.get(email=request.POST['email'])
        except:
            messages.error(request, 'Email does not exist', extra_tags='login_email_error')
            return False
        if bcrypt.checkpw(request.POST['password'].encode(), temp.password.encode()):
            request.session['id']= temp.id
            return True
        messages.error(request, 'Incorrect login password', extra_tags='login_password_error')
        return False

class User(models.Model):
    name = models.CharField(max_length=255)
    alias = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    # *************************
    objects = UserManager()
    # *************************
