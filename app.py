from flask import Flask, render_template
from lib import *

app = Flask(__name__)


@app.route('/')
def rt():
    return render_template("index.html", Footer=footer)


@app.route('/watchpage')
def watch():
    return render_template("watch.html", Footer=footer)


@app.route('/mangapage')
def manga():
    return render_template("manga.html", Footer=footer)


@app.route('/test')
def test():
    return render_template("test.html")


if __name__ == '__main__':
    app.run(debug=True)
