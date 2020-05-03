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

@app.route('/load_data', methods=['GET'])
def load_data():
    data = [{"name":"one", "value":20}, 
            {"name":"two", "value":50}, 
            {"name":"three", "value":30}];
    
    return data

if __name__ == "__main__":
  app.run(debug=True)
  