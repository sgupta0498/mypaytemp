myPay.controller('FreeBitCoinCtrl', function($scope,$ionicHistory,$cordovaSocialSharing) {
  $scope.promodetails={
    "promocode":""
  }
 $scope.veryPromocode=function(){
  alert("test "+$scope.promodetails.promocode);
 }

  $scope.sharePromocode=function(){
   $cordovaSocialSharing.share('Promocode Code:  '+$scope.promodetails.promocode, 'Promocode Code', null, 'http://www.zebpay.com');
  }
});