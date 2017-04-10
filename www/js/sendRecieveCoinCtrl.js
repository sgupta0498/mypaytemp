myPay.controller('SendRecieveCoinCtrl', function($scope,$state) {
  //alert("asdasfd")

$scope.scanBarCode=function(){
 	   $state.go('app.scannbitcoinaddress');
 }

});





