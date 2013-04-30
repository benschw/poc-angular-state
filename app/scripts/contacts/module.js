'use strict';

goog.provide('contacts');
goog.require('contacts.ContactsController');
goog.require('contacts.ContactController');
goog.require('contacts.ContactDetailsItemController');



angular.module('contacts', []);
angular.module('contacts').controller('ContactsController', contacts.ContactsController);
angular.module('contacts').controller('ContactController', contacts.ContactController);

angular.module('contacts').controller('ContactDetailsItemController', contacts.ContactDetailsItemController);
