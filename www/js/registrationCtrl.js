myPay.controller('RegistraionCtrl', function($scope,$state) {
 
    $scope.settings={
    	"unitperbit":true,
    	"pinlock":false,
    	"lockoutgoing":true,
    	"ratealert":true,
    	"soundalert": false,
    	"vibratealert":true

    }
    $scope.changePin = function () {
         $state.go('app.settingspinchange');
    }
    $scope.goToLogin = function () {
         $state.go('userlogin');
    }
    $scope.perUnitChange=function(){
    	alert("Settting change Checked: "+$scope.settings.unitperbit);
    }
});
