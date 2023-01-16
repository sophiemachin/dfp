import unittest
import api
import connection
import json


class TestConn(unittest.TestCase):

    def test_connection_local(self):
        cursor, conn = connection.connect_to_db()
        self.assertEqual(cursor.closed, False)
        # cursor.close()
        conn.close()
        self.assertEqual(cursor.closed, True)


class TestEndpoints(unittest.TestCase):

    def test_select_all(self):
        response = api.select_all()
        expected_users = {
            '1': {
                'user_id': 1,
                'lifting_total': 1000.0,
                'bodyweight': 50.0,
                'sumo': True,
            },
            '2': {
                'user_id': 2,
                'bodyweight': 80.0,
                'lifting_total': 200.0,
                'sumo': True,
            }
        }

        d = json.loads(response)
        self.assertDictEqual(d, expected_users)


if __name__ == '__main__':
    unittest.main()
