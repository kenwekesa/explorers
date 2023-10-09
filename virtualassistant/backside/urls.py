from django.urls import path
from . import views

urlpatterns = [
    path('payment/', views.payment_view, name='payment_form'),
   # path('payment/success/', views.payment_success, name='payment_success'),
]