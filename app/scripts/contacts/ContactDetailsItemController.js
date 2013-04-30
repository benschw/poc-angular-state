'use strict';

goog.provide('contacts.ContactDetailsItemController');
goog.require('sample.state');

/** 
 * @param {angular.Scope} $scope
 * @param {*} $stateParams @TODO
 * @param {*} $state @TODO
 * @ngInject 
 * @constructor
 * @suppress {checkTypes}
 */
contacts.ContactDetailsItemController = function ($scope, $stateParams, $state, Contact) {
	var findById = function (a, id) {
		for (var i=0; i<a.length; i++) {
			if (a[i].id == id) return a[i];
		}
	}

	var contact = Contact.get({id: $stateParams.contactId});
	$scope['item'] = findById(contact.items, $stateParams.itemId);
	$scope.edit = function () {
		$state.transitionTo(sample.state.contactDetailsItemEdit, $stateParams);
	};
};

contacts.ContactDetailsItemController['$inject'] = ['$scope', '$stateParams', '$state', 'Contact'];