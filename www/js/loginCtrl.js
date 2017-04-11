myPay.controller('LoginCtrl', function($scope,$state,MyPayService,$cordovaDevice) {
 
    $scope.settings={
    	"unitperbit":true,
    	"pinlock":false,
    	"lockoutgoing":true,
    	"ratealert":true,
    	"soundalert": false,
    	"vibratealert":true

    }
    $scope.login = function (data) {
        alert("test"+angular.toJson(+ $cordovaDevice.getUUID()))
        //MyPayService.login("  hiiiiiiiii " ) ;
        /* $state.go('app.homepage');*/
    }
    $scope.goToRegister = function () {
         $state.go('userregistration');
    }
    /*$scope.perUnitChange=function(){
    	alert("Settting change Checked: "+$scope.settings.unitperbit);
    }*/
});
