from django.urls import path, re_path
from . import views

from django.views.generic import TemplateView



urlpatterns = [
    # Redirect all non-matching URLs to the React app
    #re_path(r'^.*', TemplateView.as_view(template_name='frontend/index.html')),
    #path('payment/', views.payment_view, name='payment_form'),
    path('dataview/', views.data_view),
   # path('payment/success/', views.payment_success, name='payment_success'),
]