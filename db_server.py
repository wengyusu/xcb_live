from flask import Flask,jsonify
import sqlite3
from flask_cors import cross_origin

app = Flask(__name__)

@app.route('/')
@cross_origin()
def show_db():
    return jsonify(read_db())

def read_db():
    conn = sqlite3.connect('live.db')
    c = conn.cursor()
    ret = c.execute('''SELECT * FROM info''')
    res=[]
    for row in ret:
        res.append({
            "stream_id":row[0],
            "title":row[1]
        })
    return res

if __name__ == '__main__':
    app.run(host='0.0.0.0',port='5000')