myPay.controller('UserAccountDetailsCtrl', function($scope,$state,$timeout) {
  //alert("asdasfd")
  $scope.currentuserbalance=0;
  $scope.currentuserpendingbalance=0;
    $scope.sendToDeposite = function(){
       $state.go('app.accountdetailsdeposite');
    };
     $scope.sendToWithdraw = function(){
      
       $state.go('app.accountdetailswithdraw');
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
  $scope.currentUserAccountDetails=[
  {
    "activityName":"Withdraw",
    "activityDesc":"Withdraw order no. W14582",
    "priceMessage":"1856878",
    "activityTime": "1 hour ago",
    "imageUrl":"img/outgoing.jpeg"
  },
  {
    "activityName":"Sell bitcoin (trade)",
    "activityDesc":"Ask(sell) order no. S176543 ",
    "priceMessage":"78550",
    "activityTime": "1 hour ago",
    "imageUrl":"img/incomebitcoin.jpeg"
  },
   {
    "activityName":"Sell bitcoin (trade)",
    "activityDesc":"Ask(sell) order no. S176543 ",
    "priceMessage":"98550",
    "activityTime": "1 week ago",
    "imageUrl":"img/incomebitcoin.jpeg"
  },
    {
    "activityName":"Sell bitcoin (trade)",
    "activityDesc":"Ask(sell) order no. S176943 ",
    "priceMessage":"78550",
    "activityTime": "1 week ago",
    "imageUrl":"img/incomebitcoin.jpeg"
  },
    {
    "activityName":"Sell bitcoin (trade)",
    "activityDesc":"Ask(sell) order no. S166543 ",
    "priceMessage":"128550",
    "activityTime": "1 week ago",
    "imageUrl":"img/incomebitcoin.jpeg"
  },
  {
    "activityName":"Withdraw",
    "activityDesc":"Withdraw order number. W13582",
    "priceMessage":"856878",
    "activityTime": "1 week ago",
    "imageUrl":"img/outgoing.jpeg"
  }
  
  ];
});





