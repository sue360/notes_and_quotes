from django.urls import path
from .views import QuoteListView, QuoteDetailView
urlpatterns = [
  path('', QuoteListView.as_view()),
  path('<int:pk>/', QuoteDetailView.as_view())
]