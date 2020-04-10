from django.contrib import admin
from .models import Projects
from .models import Education
from .models import Message

admin.site.register(Projects)
admin.site.register(Education)
admin.site.register(Message)