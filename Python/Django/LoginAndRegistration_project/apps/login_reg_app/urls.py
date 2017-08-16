from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^users/(\d+)/delete', views.delete),
    url(r'^users/success', views.success),
    url(r'^users/register', views.register),
    url(r'^users/login', views.login),
    url(r'^', views.index),
]
