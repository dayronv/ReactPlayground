import falcon
import json


# Reply
class Reply:

    def on_get(self, req, resp):

        """Handles GET requests"""

        quote = {
            'name': 'sample app',
            'json': 'standard'
        }

        resp.body = json.dumps(quote)

 

api = falcon.API()
api.add_route('/quote', Reply())