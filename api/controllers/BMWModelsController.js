var chance = require('chance').Chance();
var _ = require('lodash');



function createCard(modelId) {
  let model = ModelsService.getModel(modelId);
  // console.log("--->" + JSON.stringify(model));

  return {
    "card": {
      "title": model.model_name,
      "subtitle": model.model_series,
      "imageUri": model.model_img_url,
      "buttons": [
        {
          "text": "see more on",
          "postback": "https://www.bmw.com/en/bmw-models.html"
        }
      ]
    }
  }


  //TO-DO:  add logic to show all models of a specific serie
  
}

module.exports = {

  list: function (req, res) {

    var selectedModel = req.body.queryResult.parameters.BMW_models;

    console.log(selectedModel[0]);

    if (selectedModel) {

      var response =

        {
          "fulfillmentText": "Info about your selection",
          "fulfillmentMessages": [
            createCard(selectedModel[0])
          ]
        }
    } else {
      var response = {
        "fulfillmentText": "Webhook : Select a BMW model please"
      }
    }


    return res.ok(response);

  },

  getDetails: function (req, res) {
    var temp = ModelsService.getUser(req.param('id'));
    var response =
      {

      }
    return res.ok(response);
  }

};
