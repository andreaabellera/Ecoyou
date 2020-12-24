from django.http import HttpResponse
import datetime

def test_endpoint(request):
    current_time = str(datetime.datetime.now())
    reponse_str = current_time
    return HttpResponse(reponse_str)