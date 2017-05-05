myPay.controller('BuyAndSellCtrl', function($scope) {
  //alert("asdasfd")

$scope.buyAmount={"amount":""};

 $scope.buyAmountAction = function(){
      alert("Redirect To deposite "+$scope.buyAmount.amount)
      
 };

 $scope.sellAmount={"amount":""};

 $scope.sellAmountAction = function(){
      alert("Redirect To deposite "+$scope.sellAmount.amount)
      
 };
/*
    $scope.sendToDeposite = function(){
      alert("Redirect To deposite")
      
    };
     $scope.sendToWithdraw = function(){
      alert("Redirect To sendToWithdraw"); 
    };*/
});





