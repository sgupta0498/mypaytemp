myPay.controller('BuyVouchersCtrl', function($scope,$timeout) {
  //alert("asdasfd")

$scope.doRefresh = function() {
    
    console.log('Refreshing!');
    $timeout( function() {
      //simulate async response
      /*$scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);*/

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 1000);
      
  };

 $scope.vourcherData=[{
 	"voucherId":"1",
  	"voucherImageUrl":"img/Amazon-icon.png",
  	"voucherName":"Amazon Vouchers",
  	"voucherRupees":"500",
  	"voucherOff":"3",
  	"voucherRemarks":"in stock"
  		
  },{
  	"voucherId":"2",
  	"voucherImageUrl":"img/Amazon-icon.png",
  	"voucherName":"Amazon Vouchers",
  	"voucherRupees":"1000",
  	"voucherOff":"3",
  	"voucherRemarks":"in stock"
  		
  },{
  	"voucherId":"3",
  	"voucherImageUrl":"img/Amazon-icon.png",
  	"voucherName":"Amazon Vouchers",
  	"voucherRupees":"5000",
  	"voucherOff":"3",
  	"voucherRemarks":"in stock"
  		
  },{
  	"voucherId":"4",
  	"voucherImageUrl":"img/Amazon-icon.png",
  	"voucherName":"Amazon Vouchers",
  	"voucherRupees":"10000",
  	"voucherOff":"3",
  	"voucherRemarks":"in stock"
  		
  }]

 $scope.confirmBid=function(){
 	alert("test "+angular.toJson($scope.buyBid));
 }


});





