from django.shortcuts import render, redirect

def index(request):
    context = {}
    return render(request, 'survey_app/index.html', context)

def process(request):
    # code goes here...
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['lang'] = request.POST['lang']
    request.session['comment'] = request.POST['comment']
    return redirect('/result')

def result(request):
    context = {}
    return render(request, 'survey_app/result.html', context)
