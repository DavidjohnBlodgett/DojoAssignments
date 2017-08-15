from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^users/new', views.new),
    url(r'^users/create', views.create),
    url(r'^users/update', views.update),
    url(r'^users/(\d+)/destroy', views.destroy),
    url(r'^users/(\d+)/edit', views.edit_user),
    url(r'^users/(\d+)', views.show_user),
    url(r'^users', views.users),
    url(r'^', views.index),
]
