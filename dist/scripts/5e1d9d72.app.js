(function(){function e(a){a.data=[]}e.$inject=["$scope","$stateParams","Contact"];function g(a){a.data=[]}g.$inject=["$scope","$stateParams","Contact"];var h={name:"settings",url:"/settings","abstract":!0,templateUrl:"scripts/accountSettings/views/settings.tpl.html",controller:"SettingsLayoutController"},k={name:"settings.user",parent:h,url:"",templateUrl:"scripts/accountSettings/views/settings.user.tpl.html"};angular.module("accountSettings",["ui.compat"]);angular.module("accountSettings").config(["$stateProvider","$routeProvider","$urlRouterProvider",function(a){a.state(h).state(k)}]);angular.module("accountSettings").controller("SettingsLayoutController",g);angular.module("accountSettings").controller("UserDetailsController",e);var l={name:"contacts",url:"/contacts","abstract":!0,templateUrl:"scripts/contacts/views/contacts.tpl.html",controller:"ContactsController"},m={name:"contacts.list",parent:l,url:"",templateUrl:"scripts/contacts/views/contacts.list.tpl.html"},n={name:"contacts.detail",parent:l,url:"/:contactId",c:{"":{templateUrl:"scripts/contacts/views/contacts.detail.tpl.html",controller:"ContactController"},"hint@":{template:'This is contacts.detail populating the view "hint@"'},menu:{j:["$stateParams",function(a){return'<hr><small class="muted">Contact ID: '+
a.a+"</small>"}]}}},p={name:"contacts.detail.item",parent:n,url:"/item/:itemId",c:{"":{templateUrl:"scripts/contacts/views/contacts.detail.item.tpl.html",controller:"ContactDetailsItemController"},"hint@":{template:"Looking at a detail item"}}},q={name:"contacts.detail.item.edit",parent:p,c:{"@contacts.detail":{templateUrl:"scripts/contacts/views/contacts.detail.item.edit.tpl.html",controller:"ContactDetailsItemEditController"},"hint@":{template:"We're editing now"}}};function r(a,b,c,d){d=d.get({id:b.a});a.item=function(a,b){for(var c=0;c<a.length;c++)if(a[c].id==b)return a[c]}(d.f,b.e);a.done=function(){c.b("contacts.detail.item",b)}}r.$inject=["$scope","$stateParams","$state","Contact"];function s(a,b,c){a.contacts=c.d();a.i=function(){var c=a.contacts,f;do f=c[Math.floor(c.length*Math.random())].id;while(f==b.params.contactId);b.b("contacts.detail",{contactId:f})}}s.$inject=["$scope","$state","Contact"];function t(a,b,c){a.contact=c.get({id:b.contactId})}t.$inject=["$scope","$stateParams","Contact"];function u(){var a=[{id:1,name:"Alice",items:[{id:"a",type:"phone number",value:"555-1234-1234"},{id:"b",type:"email",value:"alice@mailinator.com"}]},{id:42,name:"Bob",items:[{id:"a",type:"blog",value:"http://bob.blogger.com"},{id:"b",type:"fax",value:"555-999-9999"}]},{id:123,name:"Eve",items:[{id:"a",type:"full name",value:"Eve Adamsdottir"}]}];return{d:function(){return a},get:function(b){a:{for(var c=0;c<a.length;c++)if(a[c].id==b.id){b=a[c];break a}b=void 0}return b}}}u.$inject=["$http"];angular.module("contacts.services",[]);angular.module("contacts.services").factory("Contact",u);function v(a,b,c,d){d=d.get({id:b.a});a.item=function(a,c){for(var b=0;b<a.length;b++)if(a[b].id==c)return a[b]}(d.f,b.e);a.edit=function(){c.b(q,b)}}v.$inject=["$scope","$stateParams","$state","Contact"];angular.module("contacts",["ui.compat","contacts.services"]);angular.module("contacts").config(["$stateProvider","$routeProvider","$urlRouterProvider",function(a){a.state(l).state(m).state(n).state(p).state(q)}]);angular.module("contacts").controller("ContactsController",s);angular.module("contacts").controller("ContactController",t);angular.module("contacts").controller("ContactDetailsItemController",v);angular.module("contacts").controller("ContactDetailsItemEditController",r);var w={name:"home",url:"/",templateUrl:"scripts/views/main.tpl.html",controller:["$scope",function(a){a.awesomeThings=["AngularJS","Angular-Ui-Router","Bootstrap","Closure"]}]},x={name:"about",url:"/about",template:"<h2>Hello World</h2>"};angular.module("sample",["ui.compat","contacts","accountSettings"]);angular.module("sample").config(["$stateProvider","$routeProvider","$urlRouterProvider",function(a,b,c){c.when("/c?id","/contacts/:id").otherwise("/");b.when("/user/:id",{redirectTo:"/contacts/:id"});a.state(w).state(x)}]);angular.module("sample").run(["$rootScope","$state","$stateParams",function(a,b,c){a.g=b;a.h=c}]);})();
