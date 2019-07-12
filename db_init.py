#coding=utf-8#

import sqlite3
import logging
logging.basicConfig(level = logging.INFO)
conn = sqlite3.connect('live.db')

c = conn.cursor()
logging.info("database connected")
c.execute(''' 
CREATE TABLE IF NOT EXISTS info
(stream_id TEXT PRIMARY KEY NOT NULL,
title TEXT);
''')
logging.info("create succedded")
c.execute('''
INSERT INTO `info` (`stream_id`) VALUES ("live"),("silnb"),("xyynb"),("zealot"),("tsnb"),("bfnb"),("sbsj"),("krnb"),("fish"),("prpr"),("rustle");
''')
conn.commit()
conn.close()
