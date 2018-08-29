# Google Dialogflow fulfillment webhook for BMW car models info


This webhook will provide info about BMW cars models.
This webhook service is built with [SailsJS]

## Setup

* Sign up for or sign into Dialogflow and create a agent
* Go to your agent's settings and Restore from zip using the dialogflow-agent.zip in this directory (Note: this will overwrite your existing agent)
* Then go to fulfillment and insert the following Webhook URL:  http:test123.com/

## Test it locally - & how to Boost your development speed

run SailsJS with

    $ node app.js.

Your service will be available on http://localhost:1337

the webhook is available at the URI path `/api/bmwmodels`

BUT 

Due the fact your webhook must be obviously hosted on a public address, you cannot use localhost, you shall instead use a public instance.
So you should redeploy your service each time you do a change, if you want save time you can use the continuous integration with a platform like [heroku].
But you spend few second to commit every changes :)

So why don't create a temp link public address with the HTTP tunnelling with [ngrok]? 
open another terminal and intall & execute ngrok

    $ npm install ngrok -g
    $ ngrok http 1337

(the port is the same of the SailsJS process )

You will obtain an univoque address like "http://code_alphanumeric.ngrok.io" that will point to your local server instance, this will save you a lot of time.


Copy the nkrok address (http://code_alphanumeric.ngrok.io/api/bmwmodels) and use it in your dialogflow Fulfillment/Webhook section.


Another suggestion is tu use nodemon to run your sailsJS app, so at each change you will have your  app automatically redeployed,

so 

    $ npm install -g nodemon
    $ nodemon app.js
    
NodeJS server will be up on http://localhost:1337 exposing your SailsJS app
 
 
you have done.

## License

MIT

[SailsJS]: <https://sailsjs.com>
[heroku]:<https://www.heroku.com>
[ngrok]: <https://ngrok.com/>





