from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
def index(request):
  context = {
  "time": strftime("%Y-%b-%d %H:%M %p", gmtime())
  }
  print context['time']
  return render(request,'time_app/index.html', context)
