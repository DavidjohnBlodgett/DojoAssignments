from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

def index(request):
    if 'count' not in request.session:
        request.session['count'] = 0

    # print request.session['count']
    # print request.session['randomWord']
    context = {}
    return render(request, 'word_gen_app/index.html', context)

def random_word(request, methods=['POST']):
    # del
    print "WTF"
    print request.session['randomWord']
    request.session['randomWord'] = get_random_string()
    request.session['count'] = request.session['count']+1
    # need below when your key is a pointer to a list and the list changes...
    # request.session.modify = True
    print request.session['randomWord']
    return redirect('/')
