from django.db import models

# Create your models here.

class notes(models.Model):
    Content = models.CharField(max_length=240)
    Created_at = models.DateTimeField (max_length=50)

    def __str__(self):
        return f"{self.Content} - ({self.Created_at})"

