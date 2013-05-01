'use strict';

goog.provide('sample.state');

sample.state.home = {
	name: 'home',
	url: '/',
	templateUrl: 'views/main.html',
	controller: ['$scope', function ($scope) {
		$scope['awesomeThings'] = ['AngularJS', 'Angular-Ui-Router', 'Bootstrap', 'Closure' ]
	}]
};

sample.state.about = {
	name: 'about',
	url: '/about',
	templateProvider: ['$timeout', function ($timeout) {
		return $timeout(function () { return "Hello world" }, 100);
	}]
};

