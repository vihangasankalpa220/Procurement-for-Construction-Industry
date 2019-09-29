from __future__ import print_function
from flask import Flask, jsonify, Response
from flask_cors import CORS
#from Helpers.MongoClient import MongoClient

app = Flask(__name__)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
response = Response()
#db = MongoClient().connect()


@app.route('/', methods=['GET'])
def home():
    #res = db.findone({'test': 'test data'}, 2)
    data = 0
    return data

# Get vendor by ID
@app.route('/api/proc/vendors', methods=['GET'])
def getVendorById():
    data = { 'message' : 'Found', 'response' : '200',
    'data':[
    {'id':'1','name':'Asia Tools PVT LTD', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'China','items':['A','B']}]}
    return jsonify(data)

# Get All vendors
@app.route('/api/proc/vendors', methods=['GET'])
def getAllVendors():
    data = { 'message' : 'Found', 'response' : '200',
    'data':[
    {'id':'1','name':'Asia Tools PVT LTD', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'China','items':['A','B']},
    {'id':'2','name':'Alibaba Constructions', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg','country': 'Sri Lanka','items':['D','B']},
    {'id':'3','name':'Asia Metals Industries', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'India','items':['E','B']},
    {'id':'4','name':'Lanwa SL', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'Japan','items':['A','C']},
    {'id':'5','name':'Iron SL', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'Japan','items':['A','C']},
    {'id':'12','name':'Cement SL', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'Japan','items':['A','C']}]}
    return jsonify(data)


if __name__ == '__main__':
    try:
        app.run(debug=True, port=8090)
    except Exception as e:
        print(e)
