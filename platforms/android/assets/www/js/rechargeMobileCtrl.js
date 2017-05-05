myPay.controller('RechargeMobileCtrl', function($scope,$state,$timeout,SharedDataService,$ionicHistory) {
 // alert("asdasfd "+angular.toJson(SharedDataService));
 
/*$scope.mobile={
  "type":"",
  "number":"",
  "operator":"",
  "amount":""
};*/

$scope.mobile = SharedDataService;

     $scope.redirectToRechargeConfirmDetails = function(){
       $state.go('app.rechargemobileconfirm');
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
    { text: "Airtel", value: "Airtel" },
    { text: "Vodafone", value: "Vodafone" },
    { text: "Idea", value: "Idea" },
    { text: "Reliance", value: "Reliance" },
    { text: "Reliance-Jio", value: "Reliance-Jio" },
    { text: "Mtnl", value: "Mtnl" },
    { text: "Bsnl", value: "Bsnl" },
    { text: "Tata-Docomo", value: "Tata-Docomo" },
    { text: "Telnor", value: "Telnor" },
    { text: "Aircel", value: "Aircel" }
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





