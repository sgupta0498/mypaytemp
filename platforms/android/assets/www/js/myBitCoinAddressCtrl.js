/*myPay.controller('MyBitCoinAddressCtrl', function($scope) {
  //alert("asdasfd")
});*/

myPay.controller('MyBitCoinAddressCtrl', function($scope, $cordovaClipboard,$cordovaSocialSharing,$ionicPopup) {

$scope.copyAddress=function(){

  console.log("text copied")
	$cordovaClipboard
    .copy('3BftToNURo4osQDQSrLa9M5WBDmvw2reur')
    .then(function () {
       $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Text Copied successfully'
   });

   alertPopup.then(function(res) {
     
   });
 };
 $scope.showAlert();
      // success
    }, function () {
      // error
    });
  }
  
  $scope.shareAddress=function(){

    console.log("text shareAddress")

 /*$cordovaSocialSharing
    .shareViaWhatsApp("QR Code:  3BftToNURo4osQDQSrLa9M5WBDmvw2reur ", null, null)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });*/
 $cordovaSocialSharing.share('QR Code:  3BftToNURo4osQDQSrLa9M5WBDmvw2reur ', 'QR Code', null, 'http://www.zebpay.com');
  // access multiple numbers in a string like: '0612345678,0687654321'
  

// toArr, ccArr and bccArr must be an array, file can be either null, string or array

  

  
  }
  /*$cordovaClipboard
    .copy('text to copy')
    .then(function () {
      // success
    }, function () {
      // error
    });

  $cordovaClipboard
    .paste()
    .then(function (result) {
      // success, use result
    }, function () {
      // error
    });*/

});




