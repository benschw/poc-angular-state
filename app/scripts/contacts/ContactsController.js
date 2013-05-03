'use strict';

goog.provide('contacts.ContactsController');

/** 
 * @param {angular.Scope} $scope
 * @param {*} $state @TODO
 * @ngInject 
 * @constructor
 */
contacts.ContactsController = function ($scope, $state, Contact) {
	$scope['contacts'] = Contact.getAll();

	$scope['goToRandom'] = function () {
		var contacts = $scope['contacts'], id;
		do {
			id = contacts[Math.floor(contacts.length * Math.random())].id;
		} while (id == $state.params['contactId']);
		$state.transitionTo('contacts.detail', { 'contactId': id });
	};
};

contacts.ContactsController['$inject'] = ['$scope', '$state', 'Contact'];
