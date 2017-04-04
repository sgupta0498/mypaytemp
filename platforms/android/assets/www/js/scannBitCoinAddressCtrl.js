 myPay.controller('ScannBitCoinAddressCtrl', function($scope, $rootScope, $cordovaBarcodeScanner, $ionicPlatform) {
        $scope.scan = function(){
            $ionicPlatform.ready(function() {
                $cordovaBarcodeScanner
                    .scan()
                    .then(function(result) {
                        // Success! Barcode data is here
                        $scope.scanResults = "We got a barcode\n" +
                        "Result: " + result.text + "\n" +
                        "Format: " + result.format + "\n";
                    }, function(error) {
                        // An error occurred
                       $scope.scanResults = 'Error: ' + error;
                    });
            });
        };
        $scope.scanResults = '';
    });




