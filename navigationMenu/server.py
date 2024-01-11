from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('mainPage.html')

@app.route('/electronics')
def electronics():
    return render_template("electronics.html")

@app.route('/artificial-intelligence')
def ai():
    return render_template("artificial-intelligence.html")

@app.route('/robotics')
def robotics():
    return render_template("robotics.html")

@app.route('/software')
def software():
    return render_template("software.html")


if  __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8080)
