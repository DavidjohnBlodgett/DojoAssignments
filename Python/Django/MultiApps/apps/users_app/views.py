from django.shortcuts import render, HttpResponse

def index(request):
    res = "placeholder to later display all the list of users"
    return HttpResponse(res)

def register(request):
    res = "placeholder for users to create a new user record"
    return HttpResponse(res)

def login(request):
    res = "placeholder for users to login"
    return HttpResponse(res)
