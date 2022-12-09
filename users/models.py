from django.db import models

# Create your models here.
class users(models.Model):
    Email = models.CharField(max_length=50)
    Preferred_name = models.CharField(max_length=50)
    User_name = models.CharField(max_length=20)
    Location = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.Email} - {self.Preferred_name} {self.User_name} ({self.Location})"
