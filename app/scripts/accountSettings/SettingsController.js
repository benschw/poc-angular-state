'use strict';

goog.provide('accountSettings.SettingsController');

/** 
 * @param {angular.Scope} $scope
 * @param {*} $stateParams @TODO
 * @ngInject 
 * @constructor
 */
accountSettings.SettingsController = function ($scope, $stateParams, UserSettings) {
	$scope['user'] = UserSettings.get({id: 1});
};

accountSettings.SettingsController['$inject'] = ['$scope', '$stateParams', 'UserSettings'];

