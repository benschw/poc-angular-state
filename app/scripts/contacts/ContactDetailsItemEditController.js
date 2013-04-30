'use strict';

goog.provide('contacts.ContactDetailsItemEditController');

/** 
 * @param {angular.Scope} $scope
 * @param {*} $stateParams @TODO
 * @param {*} $state @TODO
 * @ngInject 
 * @constructor
 * @suppress {checkTypes}
 */
contacts.ContactDetailsItemEditController = function ($scope, $stateParams, $state) {
	$scope.item = findById($scope.contact.items, $stateParams.itemId);
	$scope.done = function () {
		$state.transitionTo('contacts.detail.item', $stateParams);
	};
};

contacts.ContactDetailsItemEditController['$inject'] = ['$scope', '$stateParams', '$state'];