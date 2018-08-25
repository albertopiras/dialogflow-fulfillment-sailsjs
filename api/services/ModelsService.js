var chance = require('chance').Chance();


var bmw_models = [{
  model_id : 'model1',
  model_series: "Series 1",
  model_name: "Bmw 1 Series",
  model_img_url:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/1-series/3-and-5-door/2017/bmw-1series-00-teaser-hd-cosy.jpg"
},
{
  model_id : 'model2',
  model_series: "Series 2"
},
{
  model_id : 'model2coupe',
  model_series: "Series 2",
  model_name: "The BMW 2 Series Coupé",
  model_img_url:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/2-series/coupe/2017/bmw-2series-coupe-00-teaser-hd-cosy.jpg"
},
{
  model_id : 'model2activetourer',
  model_series: "Series 2",
  model_name: "The BMW 2 Series Active Tourer",
  model_img_url:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/2-series/active-tourer/2018/bmw-2series-activetourer-2018-00-teaser-hd-cosy.jpg"
},
{
  model_id : 'model3',
  model_series: "Series 3"
},
{
  model_id : 'model3coupe',
  model_series: "Series 3",
  model_name: "The BMW 3 Series coupe",
  model_img_url:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/3-series/sedan/2015/bmw-3series-sedan-00-teaser-hd_cosy.jpg"
},
{
  model_id : 'model3touring',
  model_series: "Series 3",
  model_name: "The BMW 3 Series Touring",
  model_img_url:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/3-series/touring/2015/bmw-3series-touring-00-teaser-hd-cosy.jpg"
}];


module.exports = {

  getModels: function () {
    return bmw_models.slice();
  },


  getModel: function (modelId) {
    console.log('get model ' + modelId);
    return _.find(this.getModels(), function (item) {
      return item.model_id === modelId;
    });
  }

};
