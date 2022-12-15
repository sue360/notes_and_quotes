from django.db import models

# Create your models here.

class Comment(models.Model):
    text = models.TextField(max_length=240)
    quote = models.ForeignKey(
      'quotes.quotes',
      related_name='comments',
      on_delete=models.CASCADE
  )


