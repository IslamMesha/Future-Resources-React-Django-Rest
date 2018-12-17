from django.urls import path

from employee.views import EmployeeViewSet

urlpatterns = [
    path('', EmployeeViewSet.as_view({'get': 'list'})),
]
