'use strict';

goog.provide('sample.config');
goog.require('contacts');

function findById(a, id) {
	for (var i=0; i<a.length; i++) {
		if (a[i].id == id) return a[i];
	}
}
sample.config = function ($stateProvider, $routeProvider, $urlRouterProvider) {
	
	$urlRouterProvider
		.when('/c?id', '/contacts/:id')
		.otherwise('/');

	
	$routeProvider
		.when('/user/:id', {
			redirectTo: '/contacts/:id'
		});

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/main.html',
		controller: ['$scope', function ($scope) {
			$scope.awesomeThings = ['AngularJS', 'Angular-Ui-Router', 'Bootstrap', 'Closure' ]
		}]
	})
	.state('about', {
		url: '/about',
		templateProvider: ['$timeout', function ($timeout) {
			return $timeout(function () { return "Hello world" }, 100);
		}]
	})
	.state('contacts', {
		url: '/contacts',
		"abstract": true,
		templateUrl: 'views/contacts.html',
		controller: 'ContactsController'
	})
		.state('contacts.list', {
			// parent: 'contacts',
			url: '',
			templateUrl: 'views/contacts.list.html'
		})
		.state('contacts.detail', {
			// parent: 'contacts',
			url: '/{contactId}',
			views: {
				'': {
					templateUrl: 'views/contacts.detail.html',
					controller: 'ContactController'
				},
				'hint@': {
					template: 'This is contacts.detail populating the view "hint@"'
				},
				'menu': {
					templateProvider: ['$stateParams', function ($stateParams){
						// This is just to demonstrate that $stateParams injection works for templateProvider
						// $stateParams are the parameters for the new state we're transitioning to, even
						// though the global '$stateParams' has not been updated yet.
						return '<hr><small class="muted">Contact ID: ' + $stateParams.contactId + '</small>';
					}]
				}
			}
		})
			.state('contacts.detail.item', {
				// parent: 'contacts.detail',
				url: '/item/:itemId',
				views: {
					'': {
						templateUrl: 'views/contacts.detail.item.html',
						controller: 'ContactDetailsItemController'
					},
					'hint@': {
						template: 'Overriding the view "hint@"'
					}
				}
			})
			.state('contacts.detail.item.edit', {
				views: {
					'@contacts.detail': {
						templateUrl: 'views/contacts.detail.item.edit.html',
						controller: 'ContactDetailsItemEditController'
					}
				}
			});
};

angular.module('sample', ['ui.compat', 'contacts']);
angular.module('sample').config(['$stateProvider', '$routeProvider', '$urlRouterProvider', sample.config]);
angular.module('sample').run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);
