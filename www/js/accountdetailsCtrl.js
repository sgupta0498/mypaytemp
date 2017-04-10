myPay.controller('UserAccountDetailsCtrl', function($scope,$state) {
  //alert("asdasfd")
  $scope.currentuserbalance=0;
  $scope.currentuserpendingbalance=0;
    $scope.sendToDeposite = function(){
       $state.go('app.accountdetailsdeposite');
    };
     $scope.sendToWithdraw = function(){
      
       $state.go('app.accountdetailswithdraw');
    };
});





