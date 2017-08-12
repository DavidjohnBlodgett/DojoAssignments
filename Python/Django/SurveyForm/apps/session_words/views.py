from django.shortcuts import render, redirect, HttpResponse
from datetime import datetime
def index(request):
    context = {}
    return render(request, 'session_words/index.html')

def process(request):
    context = {}
    if 'list' not in request.session:
        request.session['list'] = []

    # set session values based on form data request.POST...
    if 'name' in request.POST:
        request.session['name'] = request.POST['name']
    else:
        request.session['name'] = ""

    if 'color' in request.POST:
        request.session['color'] = request.POST['color']
    else:
        request.session['color'] = ""

    if 'big' in request.POST:
        request.session['big'] = request.POST['big']
    else:
        request.session['big'] = ""

    # build string for template...
    time = datetime.now()
    time = time.strftime("%H:%M %p %b %d %Y")
    res = "<li><p class=\"word {0} {1}\">{2}</p><p> - added on {3}</p></li>".format(request.session['color'], request.session['big'], request.session['name'], time)

    # append string to the list...
    request.session['list'].append(res)

    return redirect('/session_words/')

def reset(request, methods=['POST']):
    del request.session['list']
    del request.session['name']
    del request.session['color']
    del request.session['big']
    return redirect('/session_words/')
