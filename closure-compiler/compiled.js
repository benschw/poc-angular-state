(function(){function c(){function a(){this.e(a.types.f)}a.types={f:"F",h:"C"};a.prototype.c="";a.prototype.a=function(){return a.prototype.c};a.prototype.e=function(b){a.prototype.c=b};c.b||(c.b=new a);return c.b}c.$inject=[];c.b=null;function f(a){return function(b){return b+" \u00b0"+a.a()}};f.$inject=["TemperatureUnitState"];angular.module("WeatherApp.filters",["WeatherApp.state"]);angular.module("WeatherApp.filters").filter("IncludeUnitsFilter",f);function g(a){function b(){}b.g=function(b){a({method:"GET",url:"/api/cities"}).success(function(a){b.success(a)}).error(function(a,d){b.error(a,d)})};b.city=function(b){a({method:"GET",url:"api/city/:cityId".replace(":cityId",b.d)}).success(function(a){b.success(a)}).error(function(a,d){b.error(a,d)})};return b}g.$inject=["$http"];function h(a,b,e,n){e.city({d:b.cityId,success:function(b){b.temp=function(){return"F"==n.a()?b.temp_f:b.temp_c};b.iconUrl="http://forecast.weather.gov/images/wtf/large/"+b.icon_url_name;a.cityForecast=b},error:function(){a.errorMessage='Error loading weather for city ":cityId".'.replace(":cityId",b.d)}})}h.$inject=["$scope","$routeParams","WeatherService","TemperatureUnitState"];function k(a,b,e){b.g({success:function(b){var d=[];b.forEach(function(a){a.temp=function(){return"F"==e.a()?a.temp_f:a.temp_c};a.iconUrl="http://forecast.weather.gov/images/wtf/medium/"+a.icon_url_name;d.push(a)});a.citiesForecast=d},error:function(){a.errorMessage="Error loading weather listings data."}})}k.$inject=["$scope","WeatherService","TemperatureUnitState"];angular.module("WeatherApp.controllers",["WeatherApp.services","WeatherApp.state","WeatherApp.filters"]);angular.module("WeatherApp.controllers").controller("CityDetailsController",h);angular.module("WeatherApp.controllers").controller("AllCitiesController",k);angular.module("WeatherApp.state",[]);angular.module("WeatherApp.state").factory("TemperatureUnitState",c);function l(a){return function(b){b.changeTempPref=function(b){a.e(b)};b.active=function(b){if(b===a.a())return"active"}}}l.$inject=["TemperatureUnitState"];angular.module("WeatherApp.directives",["WeatherApp.state"]);angular.module("WeatherApp.directives").directive("TemperaturePreference",l);angular.module("WeatherApp.services",[]);angular.module("WeatherApp.services").factory("WeatherService",g);function m(a){a.when("/",{templateUrl:"/views/all-cities.html",controller:"AllCitiesController"}).when("/city-details/:cityId",{templateUrl:"/views/city-details.html",controller:"CityDetailsController"}).otherwise({redirectTo:"/"})}m.$inject=["$routeProvider","$locationProvider"];angular.module("WeatherApp",["WeatherApp.controllers","WeatherApp.services","WeatherApp.directives"]);angular.module("WeatherApp").config(m);})();