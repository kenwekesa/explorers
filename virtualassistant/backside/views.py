from django.http import JsonResponse
from django.shortcuts import render
from django.core.mail import send_mail
# from django.middleware.csrf import get_token

# Create your views here.
def send_email_view(request):
    if request.method == 'POST':
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        recipient_list = [request.POST.get('recipient')]

        send_mail(subject, message, recipient_list)

        # csrf_token = get_token(request)
        # return JsonResponse({'success': True, 'message': 'Email sent successfully', 'csrf_token': csrf_token})
        # csrf_token = get_token(request)
        return JsonResponse({'success': True, 'message': 'Email sent successfully'})
    else:
        # Handle other HTTP methods if needed
        return JsonResponse({'error': 'Invalid request method'})


    # subject = request.data.get('subject')
    # message = request.data.get('message')
    # recipient_list = [request.data.get('recipient')]

    # send_email(subject, message, recipient_list)

    # return Response({'message': 'Email sent successfully'})