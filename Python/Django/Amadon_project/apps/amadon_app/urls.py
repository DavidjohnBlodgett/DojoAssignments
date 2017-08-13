from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^checkout', views.checkout),
    url(r'^reset', views.reset),
    url(r'^buy', views.buy),
    url(r'^', views.index),
]
