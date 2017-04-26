

  myPay.controller('RechargeMobileCtrl', function($scope,$state,$timeout) {
  //alert("asdasfd")
  $scope.currentuserbalance=0;
  $scope.currentuserpendingbalance=0;
    $scope.sendToDeposite = function(){
       $state.go('app.accountdetailsdeposite');
    };
     $scope.sendToWithdraw = function(){
      
       $state.go('app.accountdetailswithdraw');
    };

     $scope.redirectToRechargeConfirmDetails = function(){
      
       $state.go('app.rechargemobileconfirm');
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
    { text: "Airtel", value: "go" },
    { text: "Vodafone", value: "py" },
    { text: "Idea", value: "rb" },
    { text: "Reliance", value: "rb" },
    { text: "Reliance-Jio", value: "rb" },
    { text: "Mtnl", value: "rb" },
    { text: "Bsnl", value: "rb" },
    { text: "Tata-Docomo", value: "rb" },
    { text: "Telnor", value: "rb" },
    { text: "Aircel", value: "jv" }
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





