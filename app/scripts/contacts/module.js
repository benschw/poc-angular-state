'use strict';

goog.provide('contacts');
goog.provide('contacts.config');

goog.require('contacts.state');
goog.require('contacts.services');

goog.require('contacts.ContactsController');
goog.require('contacts.ContactController');
goog.require('contacts.ContactDetailsItemController');
goog.require('contacts.ContactDetailsItemEditController');


contacts.config = function ($stateProvider, $routeProvider, $urlRouterProvider) {
	$stateProvider
		.state(contacts.state.contacts)
		.state(contacts.state.contactList)
		.state(contacts.state.contactDetails)
		.state(contacts.state.contactDetailsItem)
		.state(contacts.state.contactDetailsItemEdit);
};



angular.module('contacts', ['ui.compat', 'contacts.services']);
angular.module('contacts').config(['$stateProvider', '$routeProvider', '$urlRouterProvider', contacts.config]);

angular.module('contacts').controller('ContactsController', contacts.ContactsController);
angular.module('contacts').controller('ContactController', contacts.ContactController);
angular.module('contacts').controller('ContactDetailsItemController', contacts.ContactDetailsItemController);
angular.module('contacts').controller('ContactDetailsItemEditController', contacts.ContactDetailsItemEditController);
