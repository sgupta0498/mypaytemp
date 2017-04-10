myPay.controller('TradeBitCoinCtrl', function($scope) {
  //alert("asdasfd")

 $scope.buyBid={
 	"rate":"",
 	"amount":"",
 	"quantity":""
 }
 $scope.confirmBid=function(){
 	alert("test "+angular.toJson($scope.buyBid));
 }
 $scope.sellBid={
 	"rate":"",
 	"amount":"",
 	"quantity":""
 }
 $scope.confirmSell=function(){
 	alert("test "+angular.toJson($scope.sellBid));
 }


});





