myPay.controller('RechargeCtrl', function($scope,$state) {
  //alert("asdasfd")



    $scope.redirectToRechargeMobile = function(){
      //alert("Redirect To ....")
      $state.go('app.rechargemobile');
    };/*
     $scope.sendToWithdraw = function(){
      alert("Redirect To sendToWithdraw"); 
    };*/
});





