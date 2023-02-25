# amy-finances

Amy's Finance Management Tool

Installation:

- install node on linux: curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&sudo apt-get install -y nodejs
- install json-server: sudo npm install -g json-server
- install gatsby: sudo npm install -g gatsby-cli

Setup Env:

- Create two files .env.development and .env.production in the root directory and copy the code from .env.example into these files

Run the App:

- gatsby develop

Run the JSON Server

- json-server --watch dbStart.json --routes routes.json --port 3000
