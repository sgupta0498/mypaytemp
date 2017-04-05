myPay.controller('AccountDetailsDepositCtrl', function($scope, $ionicModal, $state,$location) {
//alert("asdasfd")
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
    $scope.goInvoice = function() {
    	console.log(" openModalReferenceRequest goInvoice");
    $scope.modalDepositeRequest.hide();

  	$state.go('app.depositerequestinvoice');
    
    };
});