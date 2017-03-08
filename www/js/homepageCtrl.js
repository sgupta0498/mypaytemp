myPay.controller('HomePageCtrl', function($scope,$state) {
  //alert("asdfasf")
  $scope.openAccount=function(){
  	  $state.go('app.accountdetails');
  }
});
