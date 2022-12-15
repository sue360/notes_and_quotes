from .models import notes
from .serializers.common import NoteSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated


class NoteListView(APIView):
    def get(self, _request):
        all_notes = notes.objects.all()
        serialized_notes = NoteSerializer(all_notes, many=True)
        print(serialized_notes.data)
        return Response(serialized_notes.data, status.HTTP_200_OK)
    
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
    
    

 
#return a single note found to the user. endpoint: /notes/:id THIS WORKS
 
class NoteDetailView(APIView):
  def get_note(self, pk):
    try:
        return notes.objects.get(pk=pk)
    except notes.DoesNotExist as e:
        print(e)
        raise NotFound(str(e))
    except Exception as e:
        print(e)
        return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)



  def get(self, _request, pk):
      single_note = self.get_note(pk)
      serialized_single_note = NoteSerializer(single_note)
      return Response(serialized_single_note.data)


  #updating a single note
  def put(self, request, pk):
      note = self.get_note(pk)
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
        note_to_delete = self.get_note(pk)
        try:
            note_to_delete.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)

