var chance = require('chance').Chance();
var _ = require('lodash');

module.exports = {

  list: function (req, res) {

    var selectedModel = req.body.queryResult.parameters.BMW_models;

    console.log(selectedModel);

    var response =

      {
        "fulfillmentText": "Info about your selection",
        "fulfillmentMessages": [
          {
            "card": {
              "title": "Bmw series 1",
              "subtitle": "card text",
              "imageUri": "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/1-series/3-and-5-door/2017/bmw-1series-00-teaser-hd-cosy.jpg?",
              "buttons": [
                {
                  "text": "button text",
                  "postback": "https://assistant.google.com/"
                }
              ]
            }
          }
        ]
      }
    return res.ok(response);

  },

  getDetails: function (req, res) {
    var temp = ModelsService.getUser(req.param('id'));
    var response =
      {
        "data": {
         "car":"TO-DO"
        }
      }

    return res.ok(response);
  }

};
