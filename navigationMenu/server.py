from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('mainPage.html')

@app.route('/search/label/electronics')
def electronics():
    return render_template("electronics.html")

@app.route('/search/label/artificial-intelligence')
def ai():
    return render_template("artificial-intelligence.html")

@app.route('/search/label/robotics')
def robotics():
    return render_template("robotics.html")

@app.route('/search/label/software')
def software():
    return render_template("software.html")

@app.route('/2024/01/software-oauth2')
def software_article():
    return render_template("software-oauth2.html")

@app.route('/2024/01/artificial-intelligence-clustering')
def ai_article():
    return render_template("artificial-intelligence-clustering.html")


if  __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8080)
