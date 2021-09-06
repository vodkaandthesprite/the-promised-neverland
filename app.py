from flask import Flask, render_template

app = Flask(__name__)
name = "line"


@app.route('/')
def rt():
    return render_template("index.html")


@app.route('/watchpage')
def watch():
    return render_template("watch.html")


@app.route('/mangapage')
def manga():
    return render_template("manga.html")


if __name__ == '__main__':
    app.run(debug=True)
