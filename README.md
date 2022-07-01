## To start the app
1. Download the repository
`git clone https://github.com/kathy-ems/vuejs-python-fastapi`

2. Install MongoDB shell version v4.2.17

2. Install Python3
`brew install python3`

3. Install dependencies
`npm install`
`pip3 install fastapi`
`pip3 install uvicorn`

4. Start mongo
`mongod`

5. Start the server (dev)
`uvicorn index:app --reload`

6. Start the front end
`npm run serve`

7. Run the tests
`npm run test:unit`

## API Docs
Go to http://127.0.0.1:8000/docs
