import unittest
from os.path import dirname, join
import sys
sys.path.insert(1, join(dirname(__file__), '../'))
import app


class TestNews(unittest.TestCase):

	def test_app_mock(self):
	    
	    r_json = (app.news_api_call())
	    
	    assert len(r_json) > 1
	    
	    for i in r_json:
	        self.assertFalse(i["source"] == " ", "False or True")
	        
	        

if __name__ == "__main__":
	unittest.main()