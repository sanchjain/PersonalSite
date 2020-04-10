from django import forms
from .models import Contact

class getInTouch(forms.ModelForm):

    class Meta:
        model = Contact
        fields = ('contact_name', 'contact_email', 'contact_message')