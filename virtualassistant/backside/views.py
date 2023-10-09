import stripe
from django.shortcuts import render, redirect
from .forms import PaymentForm

stripe.api_key = 'your_stripe_secret_key'

def payment_view(request):
    if request.method == 'POST':
        form = PaymentForm(request.POST)
        if form.is_valid():
            # Retrieve the payment information from the form
            card_number = form.cleaned_data['card_number']
            cardholder_name = form.cleaned_data['cardholder_name']
            cvv = form.cleaned_data['cvv']

            # Create a payment intent or charge using the Stripe API
            try:
                intent = stripe.PaymentIntent.create(
                    amount=1000,  # Amount in cents (e.g., $10.00)
                    currency='usd',
                    payment_method_types=['card'],
                )
                # Payment was successful, you can check the intent status
                if intent.status == 'succeeded':
                    return redirect('payment_success')
            except stripe.error.CardError as e:
                # Handle card errors (e.g., incorrect card number, insufficient funds)
                error_msg = e.error.message
                return render(request, 'payment_form.html', {'form': form, 'error_msg': error_msg})

    form = PaymentForm()
    return render(request, 'payment_form.html', {'form': form})
