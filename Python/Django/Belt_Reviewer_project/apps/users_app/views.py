from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import User

def index(request):
    return render(request,'users_app/index.html')

def register(request):
    if User.objects.register_user(request):

        # TODO: handle race condition issues....
        
        try:
            request.session['id']= User.objects.get(email=request.POST['email']).id
        except:
            return HttpResponse('Error found gathering the user with {0} email from db!'.format(request.POST['email']))
        # if successful register just passes the request to login and has the user login automaticly...
        return redirect('/users/login')
    else:
        return redirect('/')

def login(request):
    if User.objects.login(request):
        return redirect('/users/success')
    else:
        return redirect('/')

def success(request):
    context={'name': User.objects.get(id=request.session['id']).name}
    return render(request, 'users_app/success.html',context)

def delete(request, user_id):
    User.objects.get(id=user_id).delete()
    return redirect('/')
