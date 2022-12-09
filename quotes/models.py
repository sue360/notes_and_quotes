from django.db import models

# Create your models here.
class quotes(models.Model):
    Content = models.CharField(max_length=240)
    Created_at = models.DateTimeField (max_length=50)
    Background_info = models.CharField(max_length=400)

    def __str__(self):
        return f"{self.Content} - {self.Background_info} ({self.Created_at})"
