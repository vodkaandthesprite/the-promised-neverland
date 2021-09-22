from flask import Flask, render_template
from test import *

app = Flask(__name__)


@app.route('/')
def rt():
    return render_template("index.html")


@app.route('/watchpage')
def watch():
    return render_template("watch.html")


@app.route('/mangapage')
def manga():
    return render_template("manga.html")


@app.route('/test')
def test():
    return render_template("test.html")

@app.route('/Odinn')
def test1():
    return render_template("test.html", character=Odinn)


if __name__ == '__main__':
    app.run(debug=True)
