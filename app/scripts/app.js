
goog.provide('sample.config');
goog.require('sample.state');
goog.require('contacts');



sample.config = function ($stateProvider, $routeProvider, $urlRouterProvider) {
	
	$urlRouterProvider
		.when('/c?id', '/contacts/:id')
		.otherwise('/');

	
	$routeProvider
		.when('/user/:id', {
			redirectTo: '/contacts/:id'
		});


	$stateProvider
		.state(sample.state.home)
		.state(sample.state.about)
		.state(sample.state.contacts)
		.state(sample.state.contactList)
		.state(sample.state.contactDetails)
		.state(sample.state.contactDetailsItem)
		.state(sample.state.contactDetailsItemEdit);
};

angular.module('sample', ['ui.compat', 'contacts']);
angular.module('sample').config(['$stateProvider', '$routeProvider', '$urlRouterProvider', sample.config]);
angular.module('sample').run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);
