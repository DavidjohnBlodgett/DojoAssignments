from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import User

def index(request):
    return redirect('/users')

# CRUD

# CREATE...
# /users/new
def new(request):
    context = {}
    return render(request, 'users_app/new.html', context)
# /users/create
def create(request):
    context = {}
    # Validations...
    errors = User.objects.basic_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return render(request, 'users_app/new.html', context)
    else:
        temp = User.objects.create(first_name=request.POST['first_name'],last_name=request.POST['last_name'],email=request.POST['email'])
        temp.save()
        return redirect('/users/{0}'.format(temp.id))

# READ...
# /users
def users(request):
    context = { 'users': User.objects.all() }
    return render(request, 'users_app/index.html', context)
# /users/<id>
def show_user(request, user_id):
    context = {
        'user': user_id,
        'first_name': User.objects.get(id=user_id).first_name,
        'last_name': User.objects.get(id=user_id).last_name,
        'email' : User.objects.get(id=user_id).email,
        'created_at': User.objects.get(id=user_id).created_at,
    }
    return render(request, 'users_app/show_user.html', context)

# UPDATE...
# /users/<id>/edit
def edit_user(request, user_id):
    context = {'user': user_id}
    return render(request, 'users_app/edit.html', context)
# /users/update
def update(request):
    context = {}
    temp = User.objects.get(id=request.POST['user'])
    temp.first_name = request.POST['first_name']
    temp.last_name = request.POST['last_name']
    temp.email = request.POST['email']
    temp.save()
    return redirect('/users/{0}'.format(temp.id))

# DELETE...
# /users/<id>/destroy
def destroy(request, user_id):
    User.objects.get(id=user_id).delete()
    return redirect('/users')
