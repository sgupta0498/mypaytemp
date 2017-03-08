// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.cloud','starter.controllers','ionic-datepicker','zingchart-angularjs', 'ion-floating-menu'])

.config(function($ionicCloudProvider) {
  $ionicCloudProvider.init({
    "core": {
      "app_id": "APP_ID"
    }
  });
})
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

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
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
         templateUrl: 'templates/accountstatements.html'       
        }
      }
    })
.state('app.mybitcoinaddress', {
      url: '/mybitcoinaddress',
      views: {
        'menuContent': {
         templateUrl: 'templates/myBitCoinAddress.html'       
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

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback

  $urlRouterProvider.otherwise('/app/playlists');
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
