'use strict';

goog.provide('accountSettings.services.UserSettingsFactory');

/** 
 * @constructor
 * @ngInject 
 */
accountSettings.services.UserSettingsFactory = function ($http) {

	var obj = {
		'id': 1,
		'name': 'Bob Loblaw',
		'email': 'bobloblaw@lawblog.com',
		'password': '',
		'quotes': [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			'Vivamus in ipsum sem. Mauris nec tempor orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
			'Curabitur at ornare est. Aliquam sed eros ac eros feugiat volutpat.'
		]
	};

	return {
		get: function(params) {
			return obj;
		}
	}
};

contacts.services.ContactFactory['$inject'] = ['$http'];
