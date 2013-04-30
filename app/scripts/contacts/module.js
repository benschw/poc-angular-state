'use strict';

goog.provide('contacts');
goog.require('contacts.ContactsController');
goog.require('contacts.ContactController');
goog.require('contacts.ContactDetailsItemController');
goog.require('contacts.ContactDetailsItemEditController');



angular.module('contacts', []);
angular.module('contacts').controller('ContactsController', contacts.ContactsController);
angular.module('contacts').controller('ContactController', contacts.ContactController);
angular.module('contacts').controller('ContactDetailsItemController', contacts.ContactDetailsItemController);
angular.module('contacts').controller('ContactDetailsItemEditController', contacts.ContactDetailsItemEditController);
