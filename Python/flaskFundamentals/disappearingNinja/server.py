from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def root():
    return render_template('index.html')

@app.route('/ninja')
def ninja():
    return render_template('ninja.html')

@app.route('/ninja/<color>')
def oneNinja(color):
    print color
    if color == "blue":
        name = "leonardo"
        temp = 'blueNinja.html'
    elif color == "orange":
        name = "michelangelo"
        temp = 'orangeNinja.html'
    elif color == "red":
        name = "raphael"
        temp = 'redNinja.html'
    elif color == "purple":
        name = "donatello"
        temp = 'purpleNinja.html'
    else:
        name = "notapril"
        temp = 'notapril.html'
    return render_template(temp,name=name)

app.run(debug=True)
