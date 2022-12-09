from rest_framework import serializers
from ..models import notes

class NoteSerializer(serializers.ModelSerializer):
  class Meta:
    model = notes
    fields = '__all__'

