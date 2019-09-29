import pymongo
from flask import jsonify
from Config.confManager import Config
from Logs.LogManager import LogManager


# #class Db Helper
class MongoDB:
    collection = None
    myClient = None
    database = None
    enableDebug = False
    logManager = None

    # connect remote DB
    def __init__(self):
        self.config = Config()
        self.enableDebug = self.config.getConfig('system', 'debug')
        self.logManager = LogManager()
        try:
            # mongodb+srv://<username>:<password>@cluster0-lok9v.mongodb.net/test?retryWrites=true&w=majority
            if self.enableDebug:
                self.logManager.log('[DB Connection] Connecting to MongoDB Altas....')
            print('Connecting to MongoDB Altas....')
            self.myClient = pymongo.MongoClient(self.config.getConfig('app', 'dbMongo'))
            self.database = self.myClient[self.config.getConfig('app', 'database')]
            print('MongoDB Atlas Connected.')
        except Exception as e:
            if self.enableDebug:
                self.logManager.log(str(e))
            print('[DB Connection - Exception] ',e)
            quit()
        
    # get collection
    def getcollection(self, collection):
        return self.database[str(collection)]

    # Insert object
    def insert(self, jsonObject):
        try:
            result = self.collection.insert_one(jsonObject)
            if self.enableDebug:
                self.logManager.log(result)
                print('[Debug DB Helper - insert] '+result)
            return {'status': '200', 'data' : jsonify(result), 'err':''}
        except Exception as e:
            return {'status': '500', 'data' : '', 'err':e}
        
    # Update object
    def update(self, key, old, new):
        try:
            myquery = {str(key): str(old) }
            newvalues = {"$set": {str(key): str(new)}}
            result = self.collection.update_one(myquery, newvalues)
            if self.enableDebug:
                self.logManager.log(result)
                print('[Debug DB Helper - Update ] '+result)
            return {'status': '200', 'data' : jsonify(result), 'err':''}
            
        except Exception as e:
            return {'status': '500', 'data' : '', 'err':e}
        
    # Delete object
    def delete(self, key, value):
        myquery = {str(key): str(value)}
        x = self.collection.delete_one(myquery)
        if x.deleted_count > 0:
            return True
        else:
            return False

    # Find single object
    def findone(self, jsonObject, resultLimit):
        result = {}
        try:
            result = self.collection.find({}, jsonObject).limit(resultLimit)
            if self.enableDebug:
                self.logManager.log(result)
                print('[Debug DB Helper - findone] '+result)
            return {'status': '200', 'data' : jsonify(result), 'err':''}
        except Exception as e:
            return {'status': '404', 'data': '', 'err': e}

    # Find single object
    def find(self,key,value):
        result = []
        myquery = {str(key): str(value)}
        mydoc = self.collection.find(myquery)
        for x in mydoc:
            result.append(x)
        if self.enableDebug:
            self.logManager.log(result)
            print('[Debug DB Helper - find] '+result)
        return result

    # Find strings starts with the input  letter or higher
    def search(self,key,value):
        result = []
        myquery = {str(key): str(value)}
        mydoc = self.collection.find(myquery)
        for x in mydoc:
            result.append(x)
        if self.enableDebug:
            self.logManager.log(result)
            print('[Debug DB Helper - search] '+result)
        return result
            
    # Find string by regx
    def findregx(self, key, regxpattern):
        result = []
        # myquery = { "address": { "$regex": "^S" } }
        myquery = {str(key): {"$regex": str(regxpattern)}}
        mydoc = self.collection.find(myquery)
        for x in mydoc:
            result.append(x)
        if self.enableDebug:
            self.logManager.log(result)
            print('[Debug DB Helper - findRegx] '+result)
        return result
          
    def sorted(self,key):
        result = []
        mydoc = self.collection.find().sort(key, -1)
        for x in mydoc:
            result.append(x)
        if self.enableDebug:
            self.logManager.log(result)
            print('[Debug DB Helper - sorted] '+result)
        return result
