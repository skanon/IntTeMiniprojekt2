﻿define('ui', ['modules/dataservice', 'knockout-3.0.0', 'sammy', 'modules/core', 'bootstrap'], function(dataservice ,ko, sammy){

    return function ui() {
       var self = this;
        
       self.user.username = ko.observable('');
       self.user.password = ko.observable('');
       self.user.login = ko.computed(function() {
           return self.user.username() + " " + self.user.password();
       }, this);

    }
});