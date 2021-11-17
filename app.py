from flask import Flask, render_template
from static.py.lib import *
from static.py import my_templator as temp

app = Flask(__name__)


@app.route('/')
def rt():
    return render_template(
        "index.html"
    )


@app.route('/watchpage')
def watch():
    return render_template("watch.html")


@app.route('/mangapage')
def manga():
    return render_template("manga.html")


@app.route('/base')
def base():
    return render_template("inherited.html")


if __name__ == '__main__':
    app.run(debug=True)
