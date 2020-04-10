from django.shortcuts import render
from .models import Projects
from .models import Education

# Create your views here.
def mainpage(request):
    projects = Projects.objects
    education = Education.objects
    return render(request, 'everything/home.html', {'projects' : projects, 'education' : education})