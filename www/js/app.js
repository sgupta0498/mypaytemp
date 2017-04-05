// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngCordova', 'ionic.cloud','starter.controllers','ionic-datepicker','zingchart-angularjs', 
  'ion-floating-menu','ion-digit-keyboard','chart.js'])
 
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.overlaysWebView(true);
        StatusBar.style(1);
      }
    });
  })

.config(function($ionicCloudProvider) {
  $ionicCloudProvider.init({
    "core": {
      "app_id": "APP_ID"
    }
  });
})
.directive('tabsSwipable', ['$ionicGesture', function($ionicGesture) {
    return {
      restrict: 'A',
      require: 'ionTabs',
      link: function(scope, elm, attrs, tabsCtrl) {
        var onSwipeLeft = function() {
          var target = tabsCtrl.selectedIndex() + 1;
          if (target < tabsCtrl.tabs.length) {
            scope.$apply(tabsCtrl.select(target));
          }
        };
        var onSwipeRight = function() {
          var target = tabsCtrl.selectedIndex() - 1;
          if (target >= 0) {
            scope.$apply(tabsCtrl.select(target));
          }
        };

        var swipeGesture = $ionicGesture.on('swipeleft', onSwipeLeft, elm)
          .on('swiperight', onSwipeRight);
        scope.$on('$destroy', function() {
          $ionicGesture.off(swipeGesture, 'swipeleft', onSwipeLeft);
          $ionicGesture.off(swipeGesture, 'swiperight', onSwipeRight);
        });
      }
    };
  }])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  

.state('app.userprofile', {
      url: '/userprofile',
      views: {
        'menuContent': {
         templateUrl: 'templates/userProfileDetails.html',
          controller: 'UpdateCtrl'
       
        }
      }
    })
.state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
         templateUrl: 'templates/settings.html',
         controller: 'SettingsCtrl'     
        }
      }
})
.state('app.settingspinchange', {
      url: '/settingspinchange',
      views: {
        'menuContent': {
         templateUrl: 'templates/settingChangePin.html',
         controller: 'SettingsPinChangeCtrl'     
        }
      }
})
.state('app.support', {
      url: '/support',
      views: {
        'menuContent': {
         templateUrl: 'templates/support.html',
          controller: 'SupportCtrl'       
        }
      }
    })
.state('app.aboutus', {
      url: '/aboutus',
      views: {
        'menuContent': {
         templateUrl: 'templates/aboutus.html'       
        }
      }
    })
.state('app.freebitcoins', {
      url: '/freebitcoins',
      views: {
        'menuContent': {
         templateUrl: 'templates/freebitcoins.html'       
        }
      }
    })
.state('app.accountstatements', {
      url: '/accountstatements',
      views: {
        'menuContent': {
         templateUrl: 'templates/accountstatements.html',
          controller: 'AccountStatementCtrl'                   
        }
      }
    })
.state('app.mybitcoinaddress', {
      url: '/mybitcoinaddress',
      views: {
        'menuContent': {
         templateUrl: 'templates/myBitCoinAddress.html',
          controller: 'MyBitCoinAddressCtrl'                  
        }
      }
    })
.state('app.accountverification', {
      url: '/accountverification',
      views: {
        'menuContent': {
         templateUrl: 'templates/accountVerification.html',
          controller: 'AccountVerificationCtrl'              
        }
      }
    })
.state('app.ratechart', {
      url: '/ratechart',
      views: {
        'menuContent': {
         templateUrl: 'templates/ratechart.html',
          controller: 'RateChartCtrl'              
        }
      }
    })
.state('app.homepage', {
      url: '/homepage',
      views: {
        'menuContent': {
         templateUrl: 'templates/homepage.html',
          controller: 'HomePageCtrl'                
        }
      }
    })
    .state('app.accountdetails', {
      url: '/accountdetails',
      views: {
        'menuContent': {
         templateUrl: 'templates/buttonmenu/accountdetails.html',
          controller: 'UserAccountDetailsCtrl'                
        }
      }
    })
.state('app.buyandsellbitcoins', {
      url: '/buyandsellbitcoins',
      views: {
        'menuContent': {
         templateUrl: 'templates/buttonmenu/buyAndSellCoins.html',
          controller: 'BuyAndSellCtrl'                
        }
      }
    })
.state('app.tradebitcoins', {
      url: '/tradebitcoins',
      views: {
        'menuContent': {
         templateUrl: 'templates/buttonmenu/tradebitcoins.html',
          controller: 'TradeBitCoinCtrl'                
        }
      }
    })
.state('app.buyvouchers', {
      url: '/buyvouchers',
      views: {
        'menuContent': {
         templateUrl: 'templates/buttonmenu/buyVouchers.html',
          controller: 'TradeBitCoinCtrl'                
        }
      }
    })
.state('app.sendrecievebitcoins', {
      url: '/sendrecievebitcoins',
      views: {
        'menuContent': {
         templateUrl: 'templates/buttonmenu/sendrecievebitcoins.html',
          controller: 'TradeBitCoinCtrl'                
        }
      }
    })
.state('app.mobilerecharge', {
      url: '/mobilerecharge',
      views: {
        'menuContent': {
         templateUrl: 'templates/buttonmenu/mobilerecharge.html'
                      
        }
      }
    })
  .state('app.scannbitcoinaddress', {
      url: '/scannbitcoinaddress',
      views: {
        'menuContent': {
         templateUrl: 'templates/buttonmenu/scannBitCoinAddress.html',
          controller: 'ScannBitCoinAddressCtrl'                
        }
      }
    })
  .state('app.accountdetailsdeposite', {
      url: '/accountdetailsdeposite',
      views: {
        'menuContent': {
         templateUrl: 'templates/buttonmenu/accountdetailsDeposit.html',
          controller: 'AccountDetailsDepositCtrl'                
        }
      }
    })
  .state('app.accountdetailswithdraw', {
      url: '/accountdetailswithdraw',
      views: {
        'menuContent': {
         templateUrl: 'templates/buttonmenu/accountdetailsWithdraw.html',
          controller: 'AccountDetailsWithdrawCtrl'                
        }
      }
    })
  .state('app.depositerequestinvoice', {
      url: '/depositerequestinvoice',
      views: {
        'menuContent': {
         templateUrl: 'templates/buttonmenu/depositeRequestInvoice.html',
          controller: 'AccountDetailsWithdrawCtrl'                
        }
      }
    })
  ;

  // if none of the above states are matched, use this as the fallback

  $urlRouterProvider.otherwise('/app/homepage');
    //$urlRouterProvider.otherwise({redirectTo: "/app/mobilerecharge"})
})
.config(function (ionicDatePickerProvider) {
    var datePickerObj = {
      inputDate: new Date(),
      titleLabel: 'Select a Date',
      setLabel: 'Set',
      
      closeLabel: 'Close',
      mondayFirst: false,
      weeksList: ["S", "M", "T", "W", "T", "F", "S"],
      monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
      templateType: 'popup',
      from: new Date(2012, 8, 1),
      to: new Date(2018, 8, 1),
      
      dateFormat: 'dd MMMM yyyy',
      closeOnSelect: false,
      disableWeekdays: []
    };
    ionicDatePickerProvider.configDatePicker(datePickerObj);
  })



;
