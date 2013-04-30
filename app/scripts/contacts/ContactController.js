'use strict';

goog.provide('contacts.ContactController');

/** 
 * @param {angular.Scope} $scope
 * @param {*} $stateParams @TODO
 * @ngInject 
 * @constructor
 */
contacts.ContactController = function ($scope, $stateParams, Contact) {
	$scope['contact'] = Contact.get({id: $stateParams['contactId']});
};

contacts.ContactController['$inject'] = ['$scope', '$stateParams', 'Contact'];

