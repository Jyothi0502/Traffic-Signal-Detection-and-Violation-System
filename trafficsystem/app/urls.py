from django.shortcuts import render
from django.urls import path

urlpatterns = [
    path('', lambda request: render(request, 'base.html'), name='home'),
    path('about/', lambda request: render(request, 'about.html'), name='about'),
    path('project/', lambda request: render(request, 'project.html'), name='project'),
    
]