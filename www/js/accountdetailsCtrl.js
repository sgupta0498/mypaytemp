myPay.controller('UserAccountDetailsCtrl', function($scope,$state) {
  //alert("asdasfd")
    $scope.sendToDeposite = function(){
      
       $state.go('app.accountdetailsdeposite');
    };
     $scope.sendToWithdraw = function(){
      
       $state.go('app.accountdetailswithdraw');
    };
});





