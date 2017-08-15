from django.shortcuts import render, HttpResponse, redirect

def index(request):
    context = {}
    return render(request,'courses_app/index.html',context)
