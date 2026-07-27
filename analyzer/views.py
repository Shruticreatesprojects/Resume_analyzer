def test_api(request):
    return HttpResponse("API is ready")
from django.http import HttpResponse

def home(request):
    return HttpResponse("Backend is working 💙")

def upload_resume(request):
    return HttpResponse("Upload coming soon")