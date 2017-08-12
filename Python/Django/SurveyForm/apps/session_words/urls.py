from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^process', views.process),
    url(r'^reset', views.reset),
    url(r'^', views.index),
]
