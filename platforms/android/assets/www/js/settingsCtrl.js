myPay.controller('SettingsCtrl', function($scope,$state) {
 
    $scope.changePin = function () {
        
        
         $state.go('app.settingspinchange');

    }
});
