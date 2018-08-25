var chance = require('chance').Chance();


var bmw_models = [{
  model_id : chance.guid(),
  model_series: "Series 1",
  model_name: "Bmw 1 Series"
},
{
  model_id : chance.guid(),
  model_series: "Series 2",
  model_name: "The BMW 2 Series Coupé"
},
{
  model_id : chance.guid(),
  model_series: "Series 2",
  model_name: "The BMW 2 Series Active Tourer"
},
{
  model_id : chance.guid(),
  model_series: "Series 3",
  model_name: "The BMW 3 Series coupe"
},
{
  model_id : chance.guid(),
  model_series: "Series 3",
  model_name: "The BMW 3 Series Touring"
}];


module.exports = {

  getModels: function () {
    return bmw_models.slice();
  },


  getModel: function (id) {
    return _.find(this.getModels(), function (item) {
      return item.model_id === id;
    });
  }

};
