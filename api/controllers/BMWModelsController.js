var chance = require('chance').Chance();
var _ = require('lodash');


function createCard(model) {
  return {
    "card": {
      "title": model.model_name,
      "subtitle": model.model_series_name,
      "imageUri": model.model_img_url,
      "buttons": [
        {
          "text": "see more on",
          "postback": "https://www.bmw.com/en/bmw-models.html"
        }
      ]
    }
  }
}

function getModel(modelId) {
  let model = ModelsService.getModel(modelId);
  return model;
}

function getSerie(seriesId) {
  let series = ModelsService.getSerie(seriesId);
  return series;
}

function createSerieResponse(selectedSeries) {
  let series = getSerie(selectedSeries);
  let response = {
    "fulfillmentText": "Series not found - try to repeat please"
  };
    
  if (series) {
    response = {
      "fulfillmentText": "you selected " + series.series_name + ".These are availables models: " + series.series_models.toString()
    }
  }
  return response;
}

function createModelResponse(modelId) {

  let model = getModel(modelId);
  let response = {
    "fulfillmentText": "Model not found - try to repeat please"
  };

  if (model) {
    response = {
  "fulfillmentText": "This is a text response",
        "fulfillmentMessages": [
          createCard(model)
        ]
    }
  }

  return response;
}
module.exports = {

  search: function (req, res) {

    var selectedModel = req.body.queryResult.parameters.BMW_models;
    var selectedSeries = req.body.queryResult.parameters.BMW_series;

    let response = "";
    
    if (selectedModel) {
      console.log('selectedModel');
      response = createModelResponse(selectedModel);

    } else if (selectedSeries) {
      console.log('selectedSeries');
      response = createSerieResponse(selectedSeries);
 
    } else {
      response = {
        "fulfillmentText": "Webhook : Select a BMW model please"
      }
    }

    return res.ok(response);

  },

  list: function(req, res){
    let response = {
      models: ModelsService.getModels()
    }
    return res.ok(response);

  }

};
