

  myPay.controller('RechargeDatacardCtrl', function($scope,$state,$ionicHistory,$timeout,SharedDataServiceDatacard) {
  //alert("asdasfd")

  $scope.datacard = SharedDataServiceDatacard;



     $scope.redirectToRechargeDatacardConfirmDetails = function(){
      
       $state.go('app.rechargedatacardconfirm');
    };
  $scope.redirectToRechargeDatacardConfirmDetailsCancel = function(){
    alert("asdf")
      // $state.go('app.homepage');
    };
  $scope.goHomePage = function() {
  alert("test")
   $ionicHistory.nextViewOptions({
    disableBack: true
  });
   $state.go('app.homepage');  
 };   
$scope.doRefresh = function() {
    
    console.log('Refreshing!');
    $timeout( function() {
      //simulate async response
      /*$scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);*/

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 1000);
      
  };
  $scope.serverSideList = [
    { text: "MTS", value: "MTS" },
    { text: "Airtel", value: "Airtel" },
    { text: "BSNL", value: "BSNL" },
    { text: "MTNL", value: "MTNL" },
    { text: "Reliance Net Connect", value: "Reliance Net Connect" },
    { text: "MTS MBlaze", value: "MTS MBlaze" }
  ];

  $scope.currentUserAccountDetails=[
  {
    "mobileUserName":"Dharmveer Singh",
    "mobileNumber":"9788800089",
    "priceMessage":"348",
    "activityTime": "1 hour ago",
    "imageUrl":"img/Vodafone_logo.png"
  },
  {
    "mobileUserName":"Diwakar Singh",
    "mobileNumber":"8866600089",
    "priceMessage":"300",
    "activityTime": "1 Week ago",
    "imageUrl":"img/Vodafone_logo.png"
  },
  {
    "mobileUserName":"Arjun ",
    "mobileNumber":"8550008965",
    "priceMessage":"248",
    "activityTime": "1 Week ago",
    "imageUrl":"img/Vodafone_logo.png"
  },
  {
    "mobileUserName":"Dharmveer Singh",
    "mobileNumber":"9788800089",
    "priceMessage":"348",
    "activityTime": "1 hour ago",
    "imageUrl":"img/airtel.jpg"
  },
  {
    "mobileUserName":"Shubham Gupta",
    "mobileNumber":"9788800097",
    "priceMessage":"278",
    "activityTime": "1 Week ago",
    "imageUrl":"img/airtel.jpg"
  },
  
  ];
});





