myPay.controller('AccountDetailsWithdrawCtrl', function($scope) {
//alert("asdasfd")
  $scope.currentuserbalance=0;
  $scope.currentuserpendingbalance=0;
  $scope.withdrawAmount=0;
  $scope.withdraw={
  	"amount":""
  }

$scope.doWithdraw = function(){
	alert("hi "+$scope.withdraw.amount);
}

});