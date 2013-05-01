'use strict';

goog.provide('sample.state');

sample.state.home = {
	name: 'home',
	url: '/',
	templateUrl: 'views/main.html',
	controller: ['$scope', function ($scope) {
		$scope['awesomeThings'] = ['AngularJS', 'Angular-Ui-Router', 'Bootstrap', 'Closure' ]
	}]
};

sample.state.about = {
	name: 'about',
	url: '/about',
	templateProvider: ['$timeout', function ($timeout) {
		return $timeout(function () { return "Hello world" }, 100);
	}]
};

sample.state.contacts = {
	name: 'contacts',
	url: '/contacts',
	'abstract': true,
	templateUrl: 'views/contacts.html',
	controller: 'ContactsController'
};

sample.state.contactList = {
	name: 'contacts.list',
	parent: sample.state.contacts,
	url: '',
	templateUrl: 'views/contacts.list.html'
};


sample.state.contactDetails = {
	name: 'contacts.detail',
	parent: sample.state.contacts,
	url: '/:contactId',
	views: {
		'': {
			templateUrl: 'views/contacts.detail.html',
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


sample.state.contactDetailsItem = {
	name: 'contacts.detail.item',
	parent: sample.state.contactDetails,
	url: '/item/:itemId',
	views: {
		'': {
			templateUrl: 'views/contacts.detail.item.html',
			controller: 'ContactDetailsItemController'
		},
		'hint@': {
			template: 'Looking at a detail item'
		}
	}
};

sample.state.contactDetailsItemEdit = {
	name: 'contacts.detail.item.edit',
	parent: sample.state.contactDetailsItem,
	views: {
		'@contacts.detail': {
			templateUrl: 'views/contacts.detail.item.edit.html',
			controller: 'ContactDetailsItemEditController'
		},
		'hint@': {
			template: 'We\'re editing now'
		}

	}
};

