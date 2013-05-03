'use strict';

goog.provide('accountSettings.UserDetailsController');

/** 
 * @param {angular.Scope} $scope
 * @param {*} $stateParams @TODO
 * @ngInject 
 * @constructor
 */
accountSettings.UserDetailsController = function ($scope, $stateParams, Contact) {
	$scope['data'] = [];
};

accountSettings.UserDetailsController['$inject'] = ['$scope', '$stateParams', 'Contact'];

