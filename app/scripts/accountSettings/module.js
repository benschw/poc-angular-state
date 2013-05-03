'use strict';

goog.provide('accountSettings');
goog.provide('accountSettings.config');

goog.require('accountSettings.services');
goog.require('accountSettings.state');

goog.require('accountSettings.SettingsController');
goog.require('accountSettings.UserDetailsController');



accountSettings.config = function ($stateProvider, $routeProvider, $urlRouterProvider) {

	$stateProvider
		.state(accountSettings.state.settings)
		.state(accountSettings.state.userDetails)
		.state(accountSettings.state.userQuotes);
};

angular.module('accountSettings', ['ui.compat', 'accountSettings.services']);

angular.module('accountSettings').config(['$stateProvider', '$routeProvider', '$urlRouterProvider', accountSettings.config]);

angular.module('accountSettings').controller('SettingsController', accountSettings.SettingsController);
angular.module('accountSettings').controller('UserDetailsController', accountSettings.UserDetailsController);

