'use strict';

goog.provide('contacts.services.ContactFactory');

/** 
 * @constructor
 * @ngInject 
 */
contacts.services.ContactFactory = function ($http) {

	var findById = function (a, id) {
		for (var i=0; i<a.length; i++) {
			if (a[i].id == id) return a[i];
		}
	}

	var list = [{
		'id': 1,
		'name': "Alice",
		'items': [{
			'id': 'a',
			'type': 'phone number',
			'value': '555-1234-1234'
		},{
			'id': 'b',
			'type': 'email',
			'value': 'alice@mailinator.com'
		}]
	},{
		'id': 42,
		'name': "Bob",
		'items': [{
			'id': 'a',
			'type': 'blog',
			'value': 'http://bob.blogger.com'
		},{
			'id': 'b',
			'type': 'fax',
			'value': '555-999-9999'
		}]
	},{
		'id': 123,
		'name': "Eve",
		'items': [{
			'id': 'a',
			'type': 'full name',
			'value': 'Eve Adamsdottir'
		}]
	}];

	return {
		getAll: function() {
			return list;
		},
		get: function(params) {
			var id = params['id'];
			return findById(list, id);
		}
	}
};

contacts.services.ContactFactory['$inject'] = ['$http'];


