from flask import Flask, render_template, redirect, request, session, flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z]')
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def root():
    return render_template('index.html')

@app.route('/result',methods=['POST'])
def process():
    # print request.form[]

    # NAME...
    if len(request.form['name']) < 1:
        flash("Name cannot be blank!")
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['name']):
        flash("Invalid name!")
        return redirect('/')
    else:
        name = request.form['name']
    # LOCATION...
    location = request.form['location']
    # LANG...
    lang = request.form['lang']
    # COMMENT...
    if len(request.form['comment']) < 1:
        flash("Comment cannot be blank!")
        return redirect('/')
    else:
        comment = request.form['comment']
    return render_template('result.html',name=name,location=location,lang=lang,comment=comment)

app.run(debug=True)
