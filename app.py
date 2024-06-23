from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/class')
def onlineclass():
    return render_template('class.html')

@app.route('/book')
def book():
    return render_template('book.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/shmap')
def shmap():
    return render_template('shmap.html')

@app.route('/timeline')
def timeline():
    return render_template('timeline.html')

@app.route('/ep2')
def ep2():
    return render_template('episode2.html')

if __name__ == '__main__':
    app.run()
