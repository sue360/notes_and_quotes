from .models import notes
from .serializers.common import NoteSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound


class NoteListView(APIView):
 def get(self, _request):
     all_notes = notes.objects.all()
     serialized_notes = NoteSerializer(all_notes, many=True)
     print(serialized_notes.data)
     return Response(serialized_notes.data, status.HTTP_200_OK)
 
 
#return all notes found to the user. endpoint: /notes
 
#return a single note found to the user. endpoint: /notes/:id
 
class NoteDetailView(APIView):
 def get(self, _request, pk):
     try:
         single_note = notes.objects.get(pk=pk)
         serialized_note = NoteSerializer(single_note)
         return Response(serialized_note.data)
     except single_note.DoesNotExist as e:
       print(e)
       raise NotFound(str(e))
 
 
#posting a new note
 def post(self, request):
     print(request.data)
     note_to_add = NoteSerializer(data=request.data)
     try:
       if note_to_add.is_valid():
           print(note_to_add.validated_data)
           note_to_add.save()
           return Response(note_to_add.data, status.HTTP_201_CREATED)
       print(note_to_add.errors)
       return Response(note_to_add.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
     except Exception as e:
         print(e)
         return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)
 
 
 #updating a single note
 def put(self, request, pk):
     note = self.get(pk)
     try:
       note_to_update = NoteSerializer(note, request.data, partial=True)
       if note_to_update.is_valid():
           note_to_update.save()
           return Response(note_to_update.data, status.HTTP_202_ACCEPTED)
       print(note_to_update.errors)
       return Response(note_to_update.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
     except Exception as e:
       return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR) 

#delete a single note 

 def delete(self, _request, pk):
       note_to_delete = self.get(pk)
       try:
           note_to_delete.delete()
           return Response(status=status.HTTP_204_NO_CONTENT)
       except Exception as e:
           return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)

