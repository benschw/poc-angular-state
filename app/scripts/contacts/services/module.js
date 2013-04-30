'use strict';

goog.provide('contacts.services');
goog.require('contacts.services.ContactFactory');




angular.module('contacts.services', []);
angular.module('contacts.services').factory('Contact', contacts.services.ContactFactory);
