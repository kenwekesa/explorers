# forms.py

from django import forms

class PaymentForm(forms.Form):
    card_number = forms.CharField(label='Credit Card Number', widget=forms.TextInput(attrs={'placeholder': '1234 5678 9012 3456'}))
    cardholder_name = forms.CharField(label="Cardholder's Name")
    cvv = forms.CharField(label='CVV', widget=forms.PasswordInput())
