from django.conf.urls import url, include
from . import views


urlpatterns = [
    url(r'^random_word', views.random_word),
    url(r'^', views.index),

]
