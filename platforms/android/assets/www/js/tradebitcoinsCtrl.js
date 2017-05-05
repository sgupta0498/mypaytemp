myPay.controller('TradeBitCoinCtrl', function($scope,$timeout) {
  //alert("asdasfd")
$scope.showPlaceBidForm=false;
$scope.showPlaceAskSellForm=false;
 $scope.buyBid={
 	"rate":"",
 	"amount":"",
 	"quantity":""
 }
 $scope.confirmBid=function(){
 	alert("test "+angular.toJson($scope.buyBid));
 }
 $scope.sellBid={
 	"rate":"",
 	"amount":"",
 	"quantity":""
 }
 $scope.confirmSell=function(){
 	alert("test "+angular.toJson($scope.sellBid));
 }
 $scope.showPlaceBid=function(){
 	$scope.showPlaceBidForm = !$scope.showPlaceBidForm;	
 }
 $scope.showAskSell=function(){
 	$scope.showPlaceAskSellForm = !$scope.showPlaceAskSellForm;	
 }
 $scope.doRefreshAsk = function() {
    
    console.log('Refreshing!');
    $timeout( function() {
      //simulate async response
      /*$scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);*/

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 1000);
      
  };
 $scope.doRefreshBid = function() {
    
    console.log('Refreshing!');
    $timeout( function() {
      //simulate async response
      /*$scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);*/

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 1000);
      
  };
 $scope.currentUserAskdingDetails=[
  {
    "askRate":"80000",
    "quantity":"4",
    "totalPrice":"320000",
    "activityTime": "1 hour ago",
    "imageUrl":"img/incomebitcoin.jpeg"
  },
  {
    "askRate":"80000",
    "quantity":"6",
    "totalPrice":"480000",
    "activityTime": "1 week ago",
    "imageUrl":"img/incomebitcoin.jpeg"
  },
  {
    "askRate":"80000",
    "quantity":"5",
    "totalPrice":"400000",
    "activityTime": "1 week ago",
    "imageUrl":"img/incomebitcoin.jpeg"
  },
  {
    "askRate":"80000",
    "quantity":"1",
    "totalPrice":"80000",
    "activityTime": "1 week ago",
    "imageUrl":"img/incomebitcoin.jpeg"
  },
  {
    "askRate":"80000",
    "quantity":"2",
    "totalPrice":"160000",
    "activityTime": "1 week ago",
    "imageUrl":"img/incomebitcoin.jpeg"
  }
  
  ];


  $scope.currentUserBiddingDetails=[
  {
    "askRate":"80000",
    "quantity":"4",
    "totalPrice":"320000",
    "activityTime": "1 hour ago",
    "imageUrl":"img/outgoing.jpeg"
  },
  {
    "askRate":"80000",
    "quantity":"6",
    "totalPrice":"480000",
    "activityTime": "1 week ago",
    "imageUrl":"img/outgoing.jpeg"
  },
  {
    "askRate":"80000",
    "quantity":"5",
    "totalPrice":"40bi0000",
    "activityTime": "1 week ago",
    "imageUrl":"img/outgoing.jpeg"
  },
  {
    "askRate":"80000",
    "quantity":"1",
    "totalPrice":"80000",
    "activityTime": "1 week ago",
    "imageUrl":"img/outgoing.jpeg"
  },
  {
    "askRate":"80000",
    "quantity":"2",
    "totalPrice":"160000",
    "activityTime": "1 week ago",
    "imageUrl":"img/outgoing.jpeg"
  }
  
  ];

});





