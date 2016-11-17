(function(){
'use strict';

angular.module('myFirstApp',[])
.controller('myFirstController',function($scope){
  $scope.name="";
  $scope.totalNumeric=0;
  $scope.food="";
  $scope.message="";
$scope.check = function(){
  var x= counting($scope.food);
  if (x>2) {
    $scope.message = "hey be careful";


  } else {
    $scope.message = "we are good";
  } {

  }
};
function counting(string){
  console.log(string);
  var temp2=string.split(/[\s,\[\]]+/);
  console.log(temp2);
  var count=0;
  for (var i = 0; i < temp2.length-1; i++) {
    count++;
  }
  console.log("hi");
  console.log(count);
  return count;
};
  $scope.displayTotalNumeric=function(){
    var totalNumeric = calculateTotalNumeric($scope.name);
    $scope.totalNumeric= totalNumeric;

  };
  function calculateTotalNumeric(string){
    var totalStringValue=0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue+=string.charCodeAt(i);
    }

    return totalStringValue;

  };



});

})();
