'use strict';

goog.provide('accountSettings.services');
goog.require('accountSettings.services.UserSettingsFactory');


angular.module('accountSettings.services', []);
angular.module('accountSettings.services').factory('UserSettings', accountSettings.services.UserSettingsFactory);
