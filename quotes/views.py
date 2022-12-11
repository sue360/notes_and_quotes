from .models import quotes
from .serializers.common import QuoteSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound


class QuoteListView(APIView):
  def get(self, _request):
      all_quotes = quotes.objects.all()
      serialized_quotes = QuoteSerializer(all_quotes, many=True)
      print(serialized_quotes.data)
      return Response(serialized_quotes.data, status.HTTP_200_OK)
#return all quotes found to the user. endpoint: /quotes

#return a single quote found to the user. endpoint: /quotes/:id

class QuoteDetailView(APIView):
  def get(self, _request, pk):
      try:
          quote = quotes.objects.get(pk=pk)
          serialized_quote = QuoteSerializer(quote)
          return Response(serialized_quote.data)
      except quote.DoesNotExist as e:
        print(e)
        raise NotFound(str(e))

