myPay.controller('RechargeCtrl', function($scope,$state) {
  //alert("asdasfd")



    $scope.redirectToRechargeMobile = function(){
      //alert("Redirect To ....")
      $state.go('app.rechargemobile');
    };
     $scope.redirectToRechargeDth = function(){
      //alert("Redirect To ....")
      $state.go('app.rechargedth');
    };
    $scope.redirectToRechargeDatacard = function(){
      //alert("Redirect To ....")
      $state.go('app.rechargedatacard');
    };

    /*app.rechargedth
     $scope.sendToWithdraw = function(){
      alert("Redirect To sendToWithdraw"); 
    };*/
});





