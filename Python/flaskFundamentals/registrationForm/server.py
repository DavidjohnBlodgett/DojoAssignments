from flask import Flask, render_template, redirect, request, session, flash
import re
from datetime import datetime

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'[a-zA-Z]+')
NUM_REGEX = re.compile(r'.+[0-9]+')
PASS_REGEX = re.compile(r'[a-zA-Z0-9.+_-]+[A-Z0-9]+?')
# TODO: I could tweak the date bounds more... but not the point of this exercise...
DATE_REGEX = re.compile(r'[0-3]+[0-9]+/[0-1]+[0-2]+/[0-9]+[0-9]+[0-9]+[0-9]+')

app = Flask(__name__)
app.secret_key = "ThisIsSecret!"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    print "I got the submit!!!!"
    success = True
    # EMAIL VALIDATION...
    if len(request.form['email']) < 1:
        flash('Email cannot be blank!', 'error')
        success = False
    elif not EMAIL_REGEX.match(request.form['email']):
        flash('Invalid Email Address!', 'error')
        success = False

    # FIRST NAME VALIDATION...
    if len(request.form['first_name']) < 1:
        flash('First name cannot be blank!', 'error')
        success = False
    elif not NAME_REGEX.match(request.form['first_name']):
        flash('Invalid first name!', 'error')
        success = False
    elif NUM_REGEX.match(request.form['first_name']):
        flash('Invalid first name!', 'error')
        success = False


    # LAST NAME VALIDATION...
    if len(request.form['last_name']) < 1:
        flash('Last name cannot be blank!', 'error')
        success = False
    elif not NAME_REGEX.match(request.form['last_name']):
        flash('Invalid last name!', 'error')
        success = False
    elif NUM_REGEX.match(request.form['last_name']):
        flash('Invalid first name!', 'error')
        success = False

    # BIRTH DATE VALIDATION...
    # currentDate = datetime.now()
    # birthDate = datetime.strptime(request.form['birth_date'], "%d/%m/%Y").date()
    if len(request.form['birth_date']) < 1:
        flash('Birth date cannot be blank!', 'error')
        success = False
    elif not DATE_REGEX.match(request.form['birth_date']):
        flash('Invalid birth date!', 'error')
        success = False
    elif datetime.now().date() < datetime.strptime(request.form['birth_date'], "%d/%m/%Y").date():
        flash('Birth date is not in the past!', 'error')
        success = False


    # PASSWORD VALIDATION...
    if len(request.form['password']) < 1:
        flash('Password cannot be blank!', 'error')
        success = False
    elif not PASS_REGEX.match(request.form['password']):
        flash('Invalid password!', 'error')
        success = False

    # PASSWORD CONFIRM VALIDATION...
    if request.form['password'] != request.form['confirm_password']:
        flash('Password and Confirm Password must match!', 'error')
        success = False

    # SUCCESS STATE
    if success:
        flash('Thanks for submitting your information.', 'success')
    return redirect('/')

app.run(debug=True)
