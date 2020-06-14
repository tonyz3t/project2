import os

from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

USERS = {}
CHANNELS = {}

@app.route("/")
def index():
        return render_template("start.html")

@socketio.on('connect')
def connection():
        print("user has been connected");

@socketio.on('userdata')
def user_data(data):
        if 'username' in data:
                # get the users session id
                USERS[data['username']] = request.sid
