myPay.controller('LoginCtrl', function($scope,$state,MyPayService,$cordovaDevice) {
 
    $scope.settings={
    	"unitperbit":true,
    	"pinlock":false,
    	"lockoutgoing":true,
    	"ratealert":true,
    	"soundalert": false,
    	"vibratealert":true

    }
    $scope.doLogin = function (data) {
        /*alert("test "+ $cordovaDevice.getUUID());*/
       // alert("test"+angular.toJson(data));
        //MyPayService.login("  hiiiiiiiii " ) ;
         $state.go('app.homepage');
         
         
    }
    $scope.goToRegister = function () {
         $state.go('userregistration');
    }
    /*$scope.perUnitChange=function(){
    	alert("Settting change Checked: "+$scope.settings.unitperbit);
    }*/
});
