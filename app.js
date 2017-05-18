
var appname= angular.module('appname',[]);
    appname.conroller('MyFirstController', [$scope,
    
     function($scope)  { 
     $scope.name = "Satishs";
     $scope.helloworld = function () {
       return "Hello World!" ;
     };
     }]);
    
