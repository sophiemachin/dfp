import psycopg2

from local.db_connection_local import connection_details as local
from local.db_connection_render import connection_details as render


def connect_to_db():
    conn = psycopg2.connect(**local)
    cursor = conn.cursor()
    return cursor, conn


