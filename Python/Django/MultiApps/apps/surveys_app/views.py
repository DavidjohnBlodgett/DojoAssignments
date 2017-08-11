from django.shortcuts import render, HttpResponse

def index(request):
    res = "placeholder to display all the surveys created!"
    return HttpResponse(res)

def add(request):
    res = "placeholder for users to add a new survey"
    return HttpResponse(res)
