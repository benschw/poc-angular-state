'use strict';

goog.provide('accountSettings.state');

accountSettings.state.settings = {
	name: 'settings',
	url: '/settings',
	'abstract': true,
	templateUrl: 'scripts/accountSettings/views/settings.tpl.html',
	controller: 'SettingsController'
};

accountSettings.state.userDetails = {
	name: 'settings.user',
	parent: accountSettings.state.settings,
	url: '',
	templateUrl: 'scripts/accountSettings/views/settings.userDetails.tpl.html'
};

accountSettings.state.userQuotes = {
	name: 'settings.quotes',
	parent: accountSettings.state.settings,
	url: '/quotes',
	templateUrl: 'scripts/accountSettings/views/settings.userQuotes.tpl.html'
};

