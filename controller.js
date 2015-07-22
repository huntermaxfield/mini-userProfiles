/**
 * Created by huntermaxfield on 7/21/15.
 */
var app = angular.module('userProfiles');
app.controller('MainController', function($scope, mainService) {
        $scope.users = mainService.getUsers();

});