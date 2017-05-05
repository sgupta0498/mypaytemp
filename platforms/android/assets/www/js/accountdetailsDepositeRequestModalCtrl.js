myPay.controller('AccountDetailsDepositRequestCtrl', function($scope, $ionicModal) {
//alert("asdasfd")
/*$ionicModal.fromTemplateUrl('templates/buttonmenu/depositeRequestModal.html', {
        scope: $scope,
        controller:"AccountDetailsDepositRequestCtrl",
        focusFirstInput: true
    }).then(function(modal) {
        $scope.modalDepositeRequest = modal;
       
    });
*/
console.log("ionicModal open")
    $scope.openModalReferenceRequest = function() {
        alert("asdfasdfasdfas");
        console.log("asdf")
        /*$scope.modalDepositeRequest.show();*/
    };
/*
    $scope.closeModalDepositeRequest = function() {
        $scope.modalDepositeRequest.hide();
    };*/
});