
var appname= angular.module('myApp',[]);
    appname.controller('MyFirstController', ['$scope',
      function($scope)  { 
      $scope.name = 'satish';
      $scope.helloworld = function (){
       return "Good work Hello"
      };
     
     }]);
    
