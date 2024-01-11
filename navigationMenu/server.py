from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('mainPage.html')

@app.route('/electronics')
def electronics():
    return "electronics"

@app.route('/artificial-intelligence')
def ai():
    return "artificial-intelligence"

@app.route('/robotics')
def robotics():
    return "robotics"

@app.route('/software')
def software():
    return "software"


if  __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8080)
