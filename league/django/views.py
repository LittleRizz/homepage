from django.shortcuts import render

# Create your views here.
def home (request):
	return render(request, 'aram/main.html')

def profile (request):
	return render(request, 'aram/aram-pvp.html')