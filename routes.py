from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, session

import os, random
import pandas as pd



app = Flask(__name__)

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/about")
def about():
  return render_template("about.html")



@app.route('/load_color_data', methods=['GET'])
def load_color_data():
	colors_json = {'colors': []}
	colors = db.session.query(Color).join(Movie).all()
	for color in colors:
		color_info = color.__dict__
		del color_info['_sa_instance_state']
		colors_json['colors'].append(color_info)
	return jsonify(colors_json)


if __name__ == "__main__":
  app.run(debug=True)
  