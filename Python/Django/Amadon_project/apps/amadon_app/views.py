from django.shortcuts import render, HttpResponse, redirect

mockdb = {'items': [
    {
        'id': 1831,
        'name': 'Dojo Tshirt',
        'price': 19.99
    },{
        'id': 2087,
        'name': 'Dojo Sweater',
        'price': 29.99
    },{
        'id': 3778,
        'name': 'Dojo Cup',
        'price': 4.99
    },{
        'id': 4477,
        'name': 'Algorithm Book',
        'price': 49.99
    }
    ]}

def index(request):
    context = mockdb
    return render(request, 'amadon_app/index.html', context)

def buy(request,methods=['POST']):
    if 'saleAmount' not in request.session:
        request.session['saleAmount'] = 0.0
    if 'saleCount' not in request.session:
        request.session['saleCount'] = 0
    if 'totalSpent' not in request.session:
        request.session['totalSpent'] = 0.0

    # below we walk the mockdb for the item to be purchased based on its id, once found we process the nessary data...
    for i in range(0,len(mockdb['items'])):
        if int(mockdb['items'][i]['id']) == int(request.POST['product_id']):
            saleItem = mockdb['items'][i]
            request.session['saleAmount'] = float(saleItem['price'])*float(request.POST['quantity'])
            # print request.session['saleAmount']

            request.session['saleCount'] = request.session['saleCount'] + 1
            request.session['totalSpent'] = request.session['totalSpent'] + request.session['saleAmount']
        else:
            print i, "IS NOT IT!!!!"
    return redirect('/amadon/checkout/')

def checkout(request):
    context = {}
    return render(request, 'amadon_app/check_out.html', context)

def reset(request):
    del request.session['saleAmount']
    del request.session['saleCount']
    del request.session['totalSpent']
    return redirect('/amadon/')
