# Returns smaller javascript code (minifies the code)

import requests

url = 'https://javascript-minifier.com/raw'
data = {'input': open('file.js', 'rb').read()}
response = requests.post(url, data=data)

print(response.text)