from django.urls import path, include
from rest_framework.routers import DefaultRouter

from employee import views

router = DefaultRouter()
router.register(r'employees', viewset=views.EmployeeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
