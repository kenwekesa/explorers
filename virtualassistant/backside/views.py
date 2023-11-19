import stripe

from django.shortcuts import render, redirect
from django.http import HttpResponse
from django_daraja.mpesa.core import MpesaClient
import requests
import json

import base64

from .forms import PaymentForm

from django.http import JsonResponse

import random

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

def data_view(request):
    num_items = 10 
    items = [{"id": random.randint(1, 100), "name": f"Item {random.randint(1, 100)}"} for _ in range(num_items)]
    
    # Access "id" and "name" from the dictionary, not "item.id" and "item.name"
    data = [{"id": item["id"], "name": item["name"]} for item in items]
    
    response = JsonResponse(data, safe=False)

      # Set CORS headers to allow requests from your React app (http://localhost:3000)
    response["Access-Control-Allow-Origin"] = "http://localhost:3000"  # Adjust to your React app's URL
    response["Access-Control-Allow-Methods"] = "GET"
    response["Access-Control-Allow-Headers"] = "Content-Type"

    return response


def paympesa(request):
    cl = MpesaClient()
    # Use a Safaricom phone number that you have access to, for you to be
    phone_number = '0718779956'
    amount = 1
    account_reference = 'dd'
    transaction_desc = 'ssds'
    callback_url = 'https://api.darajambili.com/express-payment'
    response = cl.stk_push(phone_number, amount, account_reference, transaction_desc, callback_url)
    # Convert the response to a JSON object

    # Return the JSON response
    return HttpResponse(response)




def generate_stk_push_request(phone_number, amount, transaction_reference, description):
    # Generate the STK push request body
    consumer_keyy = 'UjGOiSevTWMQRo0JzexO19Nvr18DqxTF'
    consumer_secrett = 'piy7EG2KVzoBegHJ'
    basic_authourization = 'VWpHT2lTZXZUV01RUm8wSnpleE8xOU52cjE4RHF4VEY6cGl5N0VHMktWem9CZWdISg'

    short_code = '174379'
    request_body = {
        "BusinessRequest": {
            "RequestHeader": {
                "Version": "1.0.0",
                "Revision": "001.000.00",
                "SenderIdentifier": short_code,
                "InitiatorIdentifier": consumer_keyy,
                "CredentialProvider": "safaricom",
                "TransactionUniqueIdentifier": transaction_reference,
            },
            "RequestBody": {
                "STKPush": {
                    "PhoneNumber": phone_number,
                    "Amount": amount,
                    "CurrencyCode": "KES",
                    "Description": description,
                    "TransactionType": "MpesaExpress",
                    "Uri": "YOUR_CALLBACK_URL",
                },
            },
        },
    }

    # Convert the request body to JSON format37
    json_data = json.dumps(request_body)

    # Generate the authorization header
 
    auth_string = f"{consumer_keyy}:{consumer_secrett}"
    encoded_auth_string = base64.b64encode(auth_string.encode('utf-8')).decode('utf-8')

    # Create the HTTP POST request
    headers = {
        "Authorization": f"Basic {encoded_auth_string}",
        "Content-Type": "application/json",
    }

    # Send the STK push request to the Mpesa Daraja API
    #response = requests.post("https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest", headers=headers, data=json_data)
    response = requests.post("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", headers=headers, data=json_data)
    mpesa_api_url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'


    # Process the response
    if response.status_code == 200:
        response_data = json.loads(response.content)
        if response_data["ResponseCode"] == "0":
            # Transaction initiation successful
            print("STK push request generated successfully")
            return response_data["MerchantRequestID"]
        else:
            # Error during transaction initiation
            print(f"Error generating STK push request: {response_data['ResponseDescription']}")
            return None
    else:
        # Error sending the request to the API
        print(f"Error sending STK push request: {response.status_code}")
        return None




    

def initiate_mpesa_payment(request):
    if request.method == 'POST':
        phone_number = '071879956'#request.POST['phone_number']
        amount = 1
        transaction_reference = 'ken'
        description = 'kennedy'

        merchant_request_id = generate_stk_push_request(phone_number, amount, transaction_reference, description)
        if merchant_request_id:
            # Redirect to the STK push prompt
            return HttpResponseRedirect(f"https://api.safaricom.co.ke/mpesa/stkpush/v1/request/{merchant_request_id}")
        else:
            # Error initiating the transaction
            return HttpResponse("Error initiating Mpesa Express payment")
    else:
        # Render the payment initiation form
        return render(request, 'payment_form.html')



def handle_mpesa_callback(request):
    return 
    # Receive M-Pesa callback data
    # callback_data = request.POST.dict()

    # # Verify the callback data
    # mpesa_api = MpesaAPI(consumer_key, consumer_secret)
    # response = mpesa_api.verify_callback(callback_data)

    # if response['status'] == 'success':
    #     # Update payment status
    #     transaction_id = callback_data['transaction_id']
    #     update_payment_status(transaction_id, 'completed')

    #     # Notify user about successful payment
    #     return render(request, 'success.html')
    # else:
    #     # Handle error
    #     error_message = response['message']
    #     return render(request, 'error.html', {'error_message': error_message})