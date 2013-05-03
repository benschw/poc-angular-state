'use strict';

goog.provide('sample.state');

sample.state.home = {
	name: 'home',
	url: '/',
	templateUrl: 'scripts/views/main.tpl.html',
	controller: ['$scope', function ($scope) {
		$scope['awesomeThings'] = ['AngularJS', 'Angular-Ui-Router', 'Bootstrap', 'Closure'];
	}]
};

sample.state.about = {
	name: 'about',
	url: '/about',
	template: "<h2>Hello World</h2>"
};

