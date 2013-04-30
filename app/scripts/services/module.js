'use strict';

goog.provide('WeatherApp.services');
goog.require('WeatherApp.services.WeatherService');
goog.require('WeatherApp.services.CityForecastFactory');




angular.module('WeatherApp.services', []);
angular.module('WeatherApp.services').factory('WeatherService', WeatherApp.services.WeatherService);
angular.module('WeatherApp.services').factory('CityForecast', WeatherApp.services.CityForecastFactory);
