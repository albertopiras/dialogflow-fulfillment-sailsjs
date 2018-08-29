
var _ = require('lodash');
const { WebhookClient, Payload, Card, Suggestion,Text  } = require('dialogflow-fulfillment');


module.exports = {

  search: function (request, response) {

    const imgBasePath = request.baseUrl;
    const agent = new WebhookClient({ request, response });
    // console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    // console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

    function Model_info(agent) {
      console.log('Intent: Model_info --- \n');
      let requiredParam = agent.parameters.BMW_models;
      return requiredParam? 
        createBMWModelResponse(agent,requiredParam, imgBasePath):
        agent.add(`Webhook : Select a BMW model please`);
    }

    function Series_info(agent) {
      console.log('Intent: Series_info --- \n');
      let requiredParam = agent.parameters.BMW_series;
      return requiredParam?
        createSerieResponse(agent,requiredParam):
        agent.add(`Webhook : Select a BMW series please`);
    }

    //Action Mapping
    const actionMap = new Map();
    actionMap.set('Model_info', Model_info);
    actionMap.set('Series_info', Series_info);
    agent.handleRequest(actionMap);

  },

  list: function (req, res) {
    let response = {
      models: ModelsService.getModels()
    }
    return res.ok(response);
  }

};

function getModel(modelId) {
  let model = ModelsService.getModel(modelId);
  return model;
}

function getSerie(seriesId) {
  let series = ModelsService.getSerie(seriesId);
  return series;
}

function createSerieResponse(agent,serieId) {
  let serie = getSerie(serieId);
  if (serie && serie.length>0) {
    agent.add(`Select one of the following ${serie[0].model_series_name} models:`);
    serie.forEach(element => {
      agent.add(new Suggestion(element.model_name));
    });
  } else {
    agent.add(`Series not found - try to repeat please`);

  }
}

function createBMWModelResponse(agent,modelId,imgBasePath) {
  let model = getModel(modelId);
  if (model) {
    agent.add(new Card({
      title: `${model.model_name}`,
      imageUrl: imgBasePath+`${model.model_img_url}`,
      text: `${model.model_description}`,
      buttonText: 'See more',
      buttonUrl: `${model.model_url}`
    })
    );
  } else {
    agent.add(`Model not found - try to repeat please`);
  }
}