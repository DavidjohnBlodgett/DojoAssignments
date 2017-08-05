from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # you need to set a secret key for security purposes

#### REF STUFF ####

# @app.route('/users/<username>')
# def show_user_profile(username):
#     print username
#     return render_template("user.html")

# @app.route('/route/with/<vararg>')
# def handler_function(vararg):
  # here you can use the variable "vararg"
  # if you want to see what our argument looks like
  # print vararg
  # we could do other things with this information from this point on such as:
  # use it to retrieve some records from the database
  # render a particular template

# @app.route('/users/<username>/<id>')
# def show_user_profile(username, id):
#     print username
#     print id
#     return render_template("user.html", username=username)

####################

@app.route('/')
def index():
    return render_template("index.html")
@app.route('/users', methods=['POST'])
def create_user():
    print "Got Post Info"
    # notice how the key we are using to access the info corresponds with the names
    # of the inputs from our html form
    # here we add two properties to session to store the name and email
    session['name'] = request.form['name']
    session['email'] = request.form['email']
    return redirect('/show') # noticed that we changed where we redirect to so that we can go to the page that displays the name and email!
@app.route('/show')
def show_user():
    # return render_template('user.html', name=session['name'], email=session['email'])
    return render_template('user.html')
app.run(debug=True)
