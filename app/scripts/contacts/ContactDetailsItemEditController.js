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
contacts.ContactDetailsItemEditController = function ($scope, $stateParams, $state, Contact) {
	var findById = function (a, id) {
		for (var i=0; i<a.length; i++) {
			if (a[i].id == id) return a[i];
		}
	}

	var contact = Contact.get({id: $stateParams.contactId});


	$scope['item'] = findById(contact.items, $stateParams.itemId);
	$scope.done = function () {
		$state.transitionTo('contacts.detail.item', $stateParams);
	};
};

contacts.ContactDetailsItemEditController['$inject'] = ['$scope', '$stateParams', '$state', 'Contact'];