from flask import Flask, render_template, request, redirect, session
import random
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def index():
    if session.get('gold') is None:
        session['gold'] = 0
    if session.get('log') is None:
        session['log'] = []
    # uncomment below to reset...
    # session['log'] = []
    return render_template('index.html')

@app.route('/process_money',methods=['POST'])
def process_money():
    if request.form['action'] == 'farm':
        location = 'farm'
        won = random.randrange(10, 21)
    elif request.form['action'] == 'cave':
        location = 'cave'
        won = random.randrange(5, 11)
    elif request.form['action'] == 'house':
        location = 'house'
        won = random.randrange(2, 6)
    elif request.form['action'] == 'casino':
        location = 'casino'
        won = random.randrange(-50, 51)
    else:
        print "wtf"
    # TODO: I could fix up datetime... but I'm waisting to much time on this...
    # I proved this would work~
    output = 'Earned {0} golds from the {1}! ({2})'.format(won,location,str(datetime.now().time()))
    session['log'].append(output)
    session['gold'] += won
    # going to print to logs because I've used up to much time on the html log.
    print output
    print session
    return redirect('/')
app.run(debug=True)
