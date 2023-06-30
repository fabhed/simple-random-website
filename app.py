from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route('/')
def home():
    # Generate a random number
    number = random.randint(1, 100)
    # Render the index.html template with the random number
    return render_template('index.html', number=number)

if __name__ == '__main__':
    app.run(debug=True)
