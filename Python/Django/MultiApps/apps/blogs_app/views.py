from django.shortcuts import render, HttpResponse, redirect

def index(request):
    res = "placeholder to later display all the list of blogs"
    return HttpResponse(res)

def new(request):
    res = "placeholder to display a new form to create a new blog"
    return HttpResponse(res)

def create(request):
    return redirect('/blogs')

def show(request, number):
    res = "placeholder to display blog {0}".format(number)
    return HttpResponse(res)

def edit(request, number):
    res = "placeholder to edit blog {0}".format(number)
    return HttpResponse(res)

def destroy(request, number):
    return redirect('/blogs')
