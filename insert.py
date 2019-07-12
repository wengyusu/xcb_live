import sys
import sqlite3

if len(sys.argv) < 2:
    print("argument required")
    sys.exit()

conn=sqlite3.connect('live.db')
c=conn.cursor()
c.execute(' INSERT INTO `info` (`stream_id`) VALUES ("{}")  '.format(sys.argv[1]))
conn.commit()
conn.close()
exit()