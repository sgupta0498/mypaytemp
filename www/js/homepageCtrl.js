myPay.controller('HomePageCtrl', function($scope,$state) {
  //alert("asdfasf")

  $scope.sellprice=95000;
  $scope.buyprice=93000;
  $scope.currentUserActivities=[{
    "activityName":"Request for Bitcoins",
    "priceMessage":"for 10 bit",
    "activityTime": "1 hour ago",
    "imageUrl":"img/man.jpeg"
  },
  {
    "activityName":"Vodafone Recharge",
    "priceMessage":"49 Rs.",
    "activityTime": "1 day ago",
    "imageUrl":"img/Vodafone_logo.png"
  },
  {
    "activityName":"Zebpay",
    "priceMessage":"1 b recieved",
    "activityTime": "1 week ago",
    "imageUrl":"img/Zebpay-Logo.jpg"
  },
  {
    "activityName":"Vodafone Recharge",
    "priceMessage":"49 Rs.",
    "activityTime": "1 day ago",
    "imageUrl":"img/Vodafone_logo.png"
  },
  {
    "activityName":"Zebpay",
    "priceMessage":"1 b recieved",
    "activityTime": "1 week ago",
    "imageUrl":"img/Zebpay-Logo.jpg"
  }
  ,
  {
    "activityName":"Vodafone Recharge",
    "priceMessage":"49 Rs.",
    "activityTime": "1 day ago",
    "imageUrl":"img/Vodafone_logo.png"
  },
  {
    "activityName":"Zebpay",
    "priceMessage":"1 b recieved",
    "activityTime": "1 week ago",
    "imageUrl":"img/Zebpay-Logo.jpg"
  }
  ];
  $scope.currentUserBalance=1;

  $scope.openAccount=function(){
  	  $state.go('app.accountdetails');
  }
  $scope.openBuyAndSellBitcoins=function(){
  	  $state.go('app.buyandsellbitcoins');
  }
  $scope.openTradeBitCoins=function(){
  	  $state.go('app.tradebitcoins');
  }
  $scope.openBuyVouchers=function(){
      $state.go('app.buyvouchers');
  }
  $scope.openMoobileRecharge=function(){
      $state.go('app.mobilerecharge');
  }
  $scope.openSendAndReceiveBitCoins=function(){
      $state.go('app.sendrecievebitcoins');
  }

});
