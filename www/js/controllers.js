var myPay =angular.module('starter.controllers', [])
myPay.directive('onValidSubmit', ['$parse', '$timeout', function($parse, $timeout) {
    return {
      require: '^form',
      restrict: 'A',
      link: function(scope, element, attrs, form) {
        form.$submitted = false;
        var fn = $parse(attrs.onValidSubmit);
        element.on('submit', function(event) {
          scope.$apply(function() {
            element.addClass('ng-submitted');
            form.$submitted = true;
            if (form.$valid) {
              if (typeof fn === 'function') {
                fn(scope, {$event: event});
              }
            }
          });
        });
      }
    }
 
  }])
myPay.directive('validated', ['$parse', function($parse) {
    return {
      restrict: 'AEC',
      require: '^form',
      link: function(scope, element, attrs, form) {
        var inputs = element.find("*");
        for(var i = 0; i < inputs.length; i++) {
          (function(input){
            var attributes = input.attributes;
            if (attributes.getNamedItem('ng-model') != void 0 && attributes.getNamedItem('name') != void 0) {
              var field = form[attributes.name.value];
              if (field != void 0) {
                scope.$watch(function() {
                  
                  return form.$submitted + "_" + field.$valid;
                }, function() {
                 
                  if (form.$submitted != true) return;
                  var inp = angular.element(input);
                  if (inp.hasClass('ng-invalid')) {
                    
                    element.removeClass('has-success');
                    element.addClass('has-error');
                  } else if (inp.hasClass('ng-valid')){
                   
                    element.removeClass('has-error');
                    element.addClass('has-success');
                  }
                });
              }
            }
          })(inputs[i]);
        }
      }
    }
  }])
myPay.directive('qrcode', function($interpolate) {  
  return {
    restrict: 'E',
    link: function($scope, $element, $attrs) {

      var options = {
        text: '',
        width: 128,
        height: 128,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: 'H'
      };

      Object.keys(options).forEach(function(key) {
        options[key] = $interpolate($attrs[key] || '')($scope) || options[key];
      });

      options.correctLevel = QRCode.CorrectLevel[options.correctLevel];

      new QRCode($element[0], options);

    }
  };
})
myPay.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal

  
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  $scope.userProfileDetails={
    "userName":"Arjun",
    "mobileNumber":"8988965645",
    "userProfileImageUrl":"img/mcfly.jpg"
  }
  $scope.showUserProfile = function() {
   //alert("hii");
    $state.go('app.userprofile');
    
  };
  
$scope.openMyAddress = function() {
   //alert("hii");
    $state.go('app.mybitcoinaddress');
    
  };
  
$scope.openVerificationPage = function() {
   //alert("hii");
    $state.go('app.accountverification');
    
  };
  $scope.openStatements = function() {
   //alert("hii");
    $state.go('app.accountstatements');
    
  };
  $scope.openRateChart = function() {
   //alert("hii");
    $state.go('app.ratechart');
    
  };
  $scope.openFreeBitCoins = function() {
   //alert("hii");
    $state.go('app.freebitcoins');
    
  };
  $scope.openSettings = function() {
   //alert("hii");
    $state.go('app.settings');
    
  };
  $scope.openSupport = function() {
   //alert("hii");
    $state.go('app.support');
    
  };
  $scope.openAboutus = function() {
   //alert("hii");
    $state.go('app.aboutus');
    
  };
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

myPay.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

myPay.controller('PlaylistCtrl', function($scope, $stateParams,$ionicSideMenuDelegate) {
  //alert("asdfasf")
    //  $ionicSideMenuDelegate.canDragContent(false);
});
