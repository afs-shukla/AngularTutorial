
var appname= angular.module('DIApp',[]);
    appname.controller('DI1Controller', DI1Controller);

   DI1Controller.$inject=['$scope','$filter']
    
     
    function DI1Controller ($scope,$filter){
            console.log("Inside controller !!!")
            $scope.name ="satish1"
            $scope.caseUp=toUpperCase;
            
            
            /*function () {
            console.log("Inside the upper !!!");
         var upper=$filter('uppercase');
          $scope.name=upper($scope.name);

            };*/
function toUpperCase (){
         console.log("Inside the upper !!!")
         var upper=$filter('uppercase');
          $scope.name=upper($scope.name);

     }
    
     }
   
    
