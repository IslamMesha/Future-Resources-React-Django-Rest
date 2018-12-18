from django.contrib.auth.models import User
from django.db import models
from django_countries.fields import CountryField

POSITIONS = (
    ('FR', 'Freshman'),
    ('SO', 'Sophomore'),
    ('JR', 'Junior'),
    ('SR', 'Senior'),
    ('manager', 'Manager'),
    ('developer', 'Developer'),
)

GENDER_CHOICES = (
    ('M', 'Male'),
    ('F', 'Female'),
)

MILITARY_STATUS = (
    ('ex', 'Exempted'),
    ('co', 'Completed'),
    ('re', 'In Resume'),
)


# Multiple Inheritance
class Employee(models.Model):
    first_name = models.CharField(max_length=100, null=True, default='')
    last_name = models.CharField(max_length=100, null=True, default='')
    middle_name = models.CharField(max_length=100, null=True, default='')
    full_name = models.CharField(max_length=200, null=True, default='')
    national_identifier = models.IntegerField(null=True, default='')
    job_positions = models.CharField(max_length=100, choices=POSITIONS)
    age = models.IntegerField(null=True, default='')
    date_of_birth = models.DateField(name='Date Of Birth', auto_now_add=True)
    place_of_birth = models.CharField(max_length=100, null=True, default='')
    country = CountryField()
    nationality = models.CharField(max_length=100, null=True, default='')
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    military_status = models.CharField(max_length=2, choices=MILITARY_STATUS)

    class Meta:
        ordering = ['id']
