# Google Dialogflow fulfillment webhook for BMW car models info


This webhook will provide info about BMW model car info.

This webhook service is built with [Sails v1](https://sailsjs.com).

## Deploy

### Try the app

Deploy this app using an  NodeJS cloud platform like [heroku]

## Try it locally - Boost your development speed -

Due the fact your webhook must be hosted with a public address, you should redeploy your service each time you do a change.

You can use for example the continuous integration with [heroku](https://www.heroku.com), of course.

But you spend few second to commit every changes :)

So why don't create a temp link public address with the HTTP tunnelling with [ngrok](https://ngrok.com/)? 

open another terminal 

    npm install ngrok -g
    ngrok http 1337

(the port is the same where is running your sailsJS process )

You will obtain an univoque address like "http://6f1a48af.ngrok.io" that will point to your local server instance.

Use this address in your dialogflow Fulfillment section http://6f1a48af.ngrok.io/api/bmwmodels
you have done.

Another suggestion is tu use nodemon to run your sailsJS app, so at each change you will have your  app automatically redeployed,

so 

npm install -g nodemon

nodemon app.js
NodeJS server will be up on http://localhost:1337 exposing your SailsJS app
 
 
you have done.

## License

MIT










