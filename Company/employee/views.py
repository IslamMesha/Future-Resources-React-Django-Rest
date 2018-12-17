from rest_framework import viewsets, permissions

from employee.models import Employee
from employee.serializers import EmployeeSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
