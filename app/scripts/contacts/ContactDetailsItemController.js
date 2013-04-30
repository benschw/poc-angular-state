'use strict';

goog.provide('contacts.ContactDetailsItemController');

/** 
 * @param {angular.Scope} $scope
 * @param {*} $stateParams @TODO
 * @param {*} $state @TODO
 * @ngInject 
 * @constructor
 * @suppress {checkTypes}
 */
contacts.ContactDetailsItemController = function ($scope, $stateParams, $state) {
	$scope.item = findById($scope.contact.items, $stateParams.itemId);
	$scope.edit = function () {
		$state.transitionTo('contacts.detail.item.edit', $stateParams);
	};
};

contacts.ContactDetailsItemController['$inject'] = ['$scope', '$stateParams', '$state'];