from django.db import models

# Create your models here.
class Projects(models.Model):

    project_title = models.CharField(max_length=100)
    project_summary = models.TextField(max_length=400)

    def __str__(self):
        return self.project_title

class Education(models.Model):

    education_name = models.CharField(max_length=100)
    education_image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.education_name

class Contact(models.Model):

    contact_name = models.CharField(max_length=100)
    contact_email = models.CharField(max_length=100)
    contact_message = models.CharField(max_length=1000)

    def __str__(self):
        return self.contact_name