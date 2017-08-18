from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^(\d+)/delete', views.delete),
    url(r'^(\d+)', views.show),
    url(r'^', views.index),
]
