from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
import bcrypt
from .models import User

def index(request):
    context={}
    return render(request,'login_reg_app/index.html',context)

def register(request):
    # Validations...
    errors = User.objects.basic_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('/')
    else:
        hash1 = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
        temp = User.objects.create(first_name=request.POST['first_name'],last_name=request.POST['last_name'],email=request.POST['email'],password=hash1)
        temp.save()
        request.session['action']= 'registered'
        request.session['id']= temp.id
        return redirect('/users/success')

def login(request):

    try:
        temp = User.objects.get(email=request.POST['email'])
    except:
        return redirect('/')

    entered_pass = request.POST['password']
    ck_pass = temp.password
    print temp.password
    if bcrypt.checkpw(entered_pass.encode(), ck_pass.encode()):
        request.session['action']= 'logged in'
        request.session['id']= temp.id
        return redirect('/users/success')
    #failed login... redirect...
    return redirect('/')

def success(request):
    context = {'action': request.session['action'], 'user': User.objects.get(id=request.session['id'])}
    return render(request,'login_reg_app/success.html',context)

def delete(request, user_id):
    User.objects.get(id=user_id).delete()
    return redirect('/')
