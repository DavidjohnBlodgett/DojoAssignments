from django.shortcuts import render, HttpResponse, redirect

def index(request):
    res = "Landing Page!!!!"
    return HttpResponse(res)
