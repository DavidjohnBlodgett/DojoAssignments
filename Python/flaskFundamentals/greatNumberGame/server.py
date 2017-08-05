from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def index():
    if session.get('number') is not None:
        print 'There is a Current Number ...'
        print 'Current Number:', session.get('number')
    else:
        print 'No Current Number so its a New game or starting over...'
        print 'Making a new Random Number...'
        session['number'] = random.randrange(0, 101)
        print 'My New Random Number is:', session.get('number')
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    print '###################'
    print '# I GOT A REQUEST #'
    print '###################'
    if int(request.form['guess']) == session.get('number'):
        print '# the guess was correct!!!!!'
        session['response'] = '{0} was the number!'.format(session.get('number'))
    elif int(request.form['guess']) < session.get('number'):
        print '# the guess was too low!!!!!'
        session['response'] = 'Too Low!'
    elif int(request.form['guess']) > session.get('number'):
        print '# the guess was too high!!!!!'
        session['response'] = 'Too High!'
    else:
        print '# the guess was none of the above!!!!'
    return redirect('/')

@app.route('/reset', methods=['POST','GET'])
def reset():
    print '#########################'
    print '# I GOT A RESET REQUEST #'
    print '#########################'
    # I set all session key values to 0 (below) just to avoid errors when the key/val
    # is not is the list...
    # this is a quick fix but could have perfomance impacts at scale...
    session['number'] = 0
    session.pop('number')
    session['guess'] = 0
    session.pop('guess')
    session['response'] = 0
    session.pop('response')
    return redirect('/')


app.run(debug=True)
