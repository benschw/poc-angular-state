'use strict';

goog.provide('contacts.ContactController');

/** 
 * @param {angular.Scope} $scope
 * @param {*} $stateParams @TODO
 * @ngInject 
 * @constructor
 */
contacts.ContactController = function ($scope, $stateParams) {
	$scope.contact = findById($scope.contacts, $stateParams.contactId);
}

contacts.ContactController['$inject'] = ['$scope', '$stateParams'];