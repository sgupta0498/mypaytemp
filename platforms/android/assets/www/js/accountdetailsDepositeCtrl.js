myPay.controller('AccountDetailsDepositCtrl', function($scope, $ionicModal, $state,$location,$cordovaClipboard,$cordovaSocialSharing , $ionicPopup) {
//alert("asdasfd")

  $scope.currentuserbalance=0;
  $scope.currentuserpendingbalance=0;
  $scope.depositedAmount=55;
  $scope.deposite={
    "amount":""
  }
  $scope.depositeRequestReference={
    "number":""
  }

    $ionicModal.fromTemplateUrl('templates/buttonmenu/depositeRequestModal.html', {
        scope: $scope,
        controller: 'AccountDetailsDepositRequestCtrl',
        backdropClickToClose: true,
      animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalDepositeRequest = modal;
       
    });

    $scope.openModalDepositeRequest = function() {
        $scope.modalDepositeRequest.show();
    };

    $scope.closeModalDepositeRequest = function() {
        $scope.modalDepositeRequest.hide();
    };



    $ionicModal.fromTemplateUrl('templates/buttonmenu/depositeRequestReferenceModal.html', {
        scope: $scope,
        focusFirstInput: true
    }).then(function(modal) {
        $scope.modalDepositeRequestReference = modal;
       
    });

    $scope.openModalDepositeRequestReference = function() {
        $scope.modalDepositeRequestReference.show();
    };
    $scope.closeModalDepositeRequestReference = function() {
        $scope.modalDepositeRequestReference.hide();
    };
    $scope.openModalReferenceRequest = function() {
    	console.log(" openModalReferenceRequest ")
    	$scope.modalDepositeRequestReference.show();
    };
    




    $scope.invoiceDeposite={
        "name":"Arjun Mishra",
        "mobileNumber":"918989098945",
        "bankName":"Bank Of India",
        "accountHolderName":"Zeb It Service Private Limited",
        "accountNumber":"097879342347869",
        "ifscCode":"ICICI00998989"
    }
    $scope.invoiceDetailsShare = function() {
        //alert("test  "/*+$scope.depositeRequestReference.number*/);
    $cordovaSocialSharing.share('Bank Details :  '+$scope.invoiceDeposite, 'QR Code', null, 'http://www.zebpay.com');

    };
    $scope.invoiceDetailsCopy = function() {
        //alert("test  "/*+$scope.depositeRequestReference.number*/);


  console.log("text copied")
    $cordovaClipboard
    .copy($scope.userBitAddress)
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
    };



    $ionicModal.fromTemplateUrl('templates/buttonmenu/depositeRequestInvoice.html', {
        scope: $scope,
        focusFirstInput: true
    }).then(function(modal) {
        $scope.modalDepositeRequestInvoice = modal;
       
    });

    $scope.openModalDepositeRequestInvoice = function() {
        $scope.modalDepositeRequestInvoice.show();
    };
    $scope.closeModalDepositeRequestInvoice = function() {
        $scope.modalDepositeRequestInvoice.hide();
    };
    
    




    $scope.goInvoice = function() {
    	console.log(" openModalReferenceRequest goInvoice");
/*    $scope.modalDepositeRequest.hide();

  	$state.go('app.depositerequestinvoice');*/
    $scope.modalDepositeRequestInvoice.show();
    };

    $scope.paymentReferenceOk = function() {
        alert("test  "+$scope.depositeRequestReference.number);
    };
});