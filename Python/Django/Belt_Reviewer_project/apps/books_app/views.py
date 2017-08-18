from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return render(request, 'books_app/books.html')

def show(request, book_id):
    return HttpResponse('I will show {0} book!'.format(book_id))

def delete(request, book_id):
    return HttpResponse('I will delete {0} from the db'.format(book_id))
