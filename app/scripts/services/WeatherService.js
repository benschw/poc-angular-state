'use strict';

goog.provide('WeatherApp.services.WeatherService');
goog.provide('WeatherApp.services.WeatherService.cityType');

/** @ngInject */
WeatherApp.services.WeatherService = function ($http) {

	var svc = function() {};

	/**
	 * @param {{
	 *    success: function(Array.<WeatherApp.services.WeatherService.cityType>),
	 *    error: function(Array.<WeatherApp.services.WeatherService.cityType>, number)
	 * }} params
	 */
	svc.cities = function (params) {
		/**
		 * @param {Array.<WeatherApp.services.WeatherService.cityType>} data
		 */
		var successFcn = function (data) {
			params.success(data);
		}

		/**
		 * @param {Array.<WeatherApp.services.WeatherService.cityType>} data
		 * @param {number} responseCode
		 */
		var errorFcn = function (data, responseCode) {
			params.error(data, responseCode);
		}

		$http({
			method: 'GET',
			url: 'http://demo.local/api/cities'
		})
			.success(successFcn)
			.error(errorFcn);
	}
	
	/**
	 * @param {{
	 *    cityId: string,
	 *    success: function(WeatherApp.services.WeatherService.cityType),
	 *    error: function(WeatherApp.services.WeatherService.cityType, number)
	 * }} params
	 */
	svc.city = function (params) {
		/**
		 * @param {WeatherApp.services.WeatherService.cityType} data
		 */
		var successFcn = function (data) {
			params.success(data);
		}
		
		/**
		 * @param {WeatherApp.services.WeatherService.cityType} data
		 * @param {number} responseCode
		 */
		var errorFcn = function (data, responseCode) {
			params.error(data, responseCode);
		}
		
		$http({
			method: 'GET',
			url: 'api/city/:cityId'.replace(':cityId', params.cityId)
		})
			.success(successFcn)
			.error(errorFcn);
	}
	return svc;
};

WeatherApp.services.WeatherService['$inject'] = ['$http'];

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
WeatherApp.services.WeatherService.cityType;
