from .models import notes
from .serializers.common import NoteSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

class NoteListView(APIView):
  def get(self, _request):
      all_notes = notes.objects.all()
      serialized_notes = NoteSerializer(all_notes, many=True)
      print(serialized_notes.data)
      return Response(serialized_notes.data, status.HTTP_200_OK)
#return all notes found to the user. endpoint: /notes
