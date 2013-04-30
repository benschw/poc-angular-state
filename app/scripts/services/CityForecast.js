'use strict';

goog.provide('WeatherApp.services.CityForecastFactory');
goog.provide('WeatherApp.services.CityForecast');

/** 
 * @constructor
 */
WeatherApp.services.CityForecast = function ($http) {
	$http.defaults.useXDomain = true;
	this.$http_ = $http;
};



WeatherApp.services.CityForecast.prototype.$http_ = null;

/**
 * @param {{
 *    id: string
 * }} params
 */
WeatherApp.services.CityForecast.prototype.get = function (params) {
	return this.$http_.get('http://demo.local/api/city/:cityId'.replace(':cityId', params.id))
};


/** 
 * @typedef {{
 *      icon_url_name : string,
 *      station_id : string,
 *      location : string,
 *      latitude : number,
 *      longitude : number,
 *      weather : string,
 *      temp_f : number,
 *      temp_c : number,
 *      relative_humidity : number,
 *      wind_string : string,
 *      wind_dir : string,
 *      wind_degrees : number,
 *      wind_mph : number,
 *      wind_gust_mph : number,
 *      windchill_string : string
 *  }} 
 */
WeatherApp.services.CityForecast.cityType;



/** 
 * @constructor
 * @ngInject 
 */
WeatherApp.services.CityForecastFactory = function ($http) {
	if (!this.inst_) {
		this.inst_ = new WeatherApp.services.CityForecast($http);
	}
	return this.inst_;
};

WeatherApp.services.CityForecastFactory['$inject'] = ['$http'];


