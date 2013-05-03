'use strict';

goog.provide('contacts.state');

contacts.state.contacts = {
	name: 'contacts',
	url: '/contacts',
	'abstract': true,
	templateUrl: 'scripts/contacts/views/contacts.tpl.html',
	controller: 'ContactsController'
};

contacts.state.contactList = {
	name: 'contacts.list',
	parent: contacts.state.contacts,
	url: '',
	templateUrl: 'scripts/contacts/views/contacts.list.tpl.html'
};


contacts.state.contactDetails = {
	name: 'contacts.detail',
	parent: contacts.state.contacts,
	url: '/:contactId',
	views: {
		'': {
			templateUrl: 'scripts/contacts/views/contacts.detail.tpl.html',
			controller: 'ContactController'
		},
		'hint@': {
			template: 'This is contacts.detail populating the view "hint@"'
		},
		'menu': {
			templateProvider: ['$stateParams', function ($stateParams){
				// This is just to demonstrate that $stateParams injection works for templateProvider
				// $stateParams are the parameters for the new state we're transitioning to, even
				// though the global '$stateParams' has not been updated yet.
				return '<hr><small class="muted">Contact ID: ' + $stateParams.contactId + '</small>';
			}]
		}
	}
};


contacts.state.contactDetailsItem = {
	name: 'contacts.detail.item',
	parent: contacts.state.contactDetails,
	url: '/item/:itemId',
	views: {
		'': {
			templateUrl: 'scripts/contacts/views/contacts.detail.item.tpl.html',
			controller: 'ContactDetailsItemController'
		},
		'hint@': {
			template: 'Looking at a detail item'
		}
	}
};

contacts.state.contactDetailsItemEdit = {
	name: 'contacts.detail.item.edit',
	parent: contacts.state.contactDetailsItem,
	views: {
		'@contacts.detail': {
			templateUrl: 'scripts/contacts/views/contacts.detail.item.edit.tpl.html',
			controller: 'ContactDetailsItemEditController'
		},
		'hint@': {
			template: 'We\'re editing now'
		}

	}
};

