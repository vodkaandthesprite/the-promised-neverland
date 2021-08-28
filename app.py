from flask import Flask, render_template

app = Flask(__name__)
name = "line"

@app.route('/')
def rt():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True)
