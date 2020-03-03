# Sopitas

Web application "Sopitas", it is a MERN application (MongoDB, Express, React, NodeJS). In this application the idea is to have a little ecommerce to buy some products with a supscription plan.

![sopitasScrennShot](https://raw.githubusercontent.com/cabeltran10/sopitas/master/front/src/img/Sopitas.gif)

<hr>aaaa

## Running the website

Since this application is not a static application, you should have some thinks to do before you can start.

<hr>

### Requirements

#### Node.js

If you don't have Node.js installed, just go to the following page and continue with the instructions: <a href="https://nodejs.org/es/download/"> Node.js WebSite </a>

#### MongoDB

Because you are going to run it locally, you should have install MongoDB. To install it just go to: <a href="https://www.mongodb.com/download-center/community">MongoDB Community Server</a>

Once you have it installed, run:

```
mongod
```

So the local DB start and let you connect to it

### Important information

You need to create a
`.env`
File in root of the proyect, in this file you should add the
`DATABASE_URL=<yourDatabaseURL>`

For example `DATABASE_URL=mongodb://localhost/quenota`

It is also necesary to have access to de devolopers console of google, this is because this application use the Google's API to authenticate users. In the same `.env` file you should add your clientID and clientSectret:
`GOOGLE_CLIENT_ID=<yourClientId>`
`GOOGLE_CLIENT_SECRET=<yourClientSecret>`

The last think to add here is a secret command, you should just add:
`SECRET_OR_KEY=<secretWord>`

So the program will know where is the data base. If you have access to an Atlas Cluster you can add it also there, that information will never get into a repository at least you change de `.gitignore` file.

## Start

On the root folder of the proyect

```bash
# Install dependencies for client
yarn run client-install

# Install dependencies for server
yarn install

# Run the client & server with concurrently
yarn run dev

# Run the Express server only
yarn start

# Run the server with nodemon
yarn run server

# Run the React client only
yarn run client

# Server runs on http://localhost:3001 and client on http://localhost:3000
```

<hr>

## Author

Camilo Beltran and Carlos Mendoza

<hr>

## Link

<a href="https://sopitas-app.herokuapp.com/">Sopitas Web Application</a>

<hr>

<h2>Licence</h2>
<p>The MIT License (MIT)</p>
<p>Copyright (c) Camilo Beltran and Carlos Mendoza</p>
<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
