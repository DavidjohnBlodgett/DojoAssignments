from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^/$', views.index),
    url(r'^/new$', views.new),
    url(r'^/create$', views.create),
    url(r'^/(?P<number>\d+)$', views.show),
    # /blogs/{{number}}/edit
    url(r'^/(?P<number>\d+)/edit$', views.edit),
    # /blogs/{{number}}/delete
    url(r'^/(?P<number>\d+)/delete$', views.destroy),
]
