var chance = require('chance').Chance();


var bmw_models = [{
  model_id : 'model1',
  model_series_name: "Series 1",
  model_series_code: "series1",
  model_name: "Bmw 1 Series",
  model_img_url:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/1-series/3-and-5-door/2017/bmw-1series-00-teaser-hd-cosy.jpg"
},
{
  model_id : 'model2coupe',
  model_series_name: "Series 2",
  model_series_code: "series2",
  model_name: "The BMW 2 Series Coupé",
  model_img_url:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/2-series/coupe/2017/bmw-2series-coupe-00-teaser-hd-cosy.jpg"
},
{
  model_id : 'model2convertible',
  model_series_name: "Series 2",
  model_series_code: "series2",
  model_name: "The BMW 2 Series Convertible",
  model_img_url:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/2-series/convertible/2017/bmw-2series-convertible-00-teaser-hd-cosy.jpg"
},
{
  model_id : 'model2activetourer',
  model_series_name: "Series 2",
  model_series_code: "series2",
  model_name: "The BMW 2 Series Active Tourer",
  model_img_url:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/2-series/active-tourer/2018/bmw-2series-activetourer-2018-00-teaser-hd-cosy.jpg"
},
{
  model_id : 'model2grantourer',
  model_series_name: "Series 2",
  model_series_code: "series2",
  model_name: "The BMW 2 Series Gran Tourer",
  model_img_url:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/2-series/gran-tourer/2018/bmw-2series-grantourer-2018-00-teaser-hd-cosy.jpg"
},
{
  model_id : 'model3sedan',
  model_series_name: "Series 3",
  model_series_code: "series3",
  model_name: "The BMW 3 Series Sedan",
  model_img_url:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/3-series/sedan/2015/bmw-3series-sedan-00-teaser-hd_cosy.jpg"
},
{
  model_id : 'model3granturismo',
  model_series_name: "Series 3",
  model_series_code: "series3",
  model_name: "The BMW 3 Series Gran Turismo",
  model_img_url:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/3-series/granturismo/2016/bmw-3series-gt-00-teaser-hd-cosy.jpg"
},
{
  model_id : 'model3touring',
  model_series_name: "Series 3",
  model_series_code: "series3",
  model_name: "The BMW 3 Series Touring",
  model_img_url:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/3-series/touring/2015/bmw-3series-touring-00-teaser-hd-cosy.jpg"
}];


var bmw_series = [{
  series_id : 'series2',
  series_name: "The BMW 2 Series",
  series_models:["The BMW 2 Series Coupé","The BMW 2 Series Convertible","The BMW 2 Series Active Tourer","The BMW 2 Series Gran Tourer"],
  series_model_codes:["The BMW 2 Series Coupé","The BMW 2 Series Convertible","The BMW 2 Series Active Tourer","The BMW 2 Series Gran Tourer"]
},
{
  series_id : 'series3',
  series_name: "The BMW 3 Series",
  series_models:["The BMW 3 Series Sedan","The BMW 3 Series Touring","The BMW 3 Series Gran Turismo"]
},
{
  series_id : 'series4',
  series_name: "The BMW 4 Series",
  series_models:["The BMW 4 Series Coupé","The BMW 4 Series Gran Coupé","The BMW 4 Series Convertible"]
},
{
  series_id : 'series5',
  series_name: "The BMW 5 Series",
  series_models:["The 5 Series Sedan","The BMW 5 Series Touring"]
},
{
  series_id : 'series6',
  series_name: "The BMW 6 Series",
  series_models:["The BMW 6 Series Gran Turismo"]
}];

module.exports = {

  getSeries: function () {
    return bmw_series.slice();
  },

  getSerie: function (seriesId) {
    console.log('get series ' + seriesId);
    return _.find(this.getSeries(), function (item) {
      return item.series_id === seriesId;
    });
  },

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
