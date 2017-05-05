myPay.controller('RateChartCtrl', function($scope,$ionicHistory) {
  
 $scope.labels3M = ["January", "February", "March"];
  $scope.series = ['Series A'];
  $scope.data3M = [
    
    [28, 48, 40]
  ];
  $scope.onClick3M = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride3M = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options3M = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
      ]
    }
  };

$scope.labels1M = ["1", "5", "10","15","20","25","30"];
  /*$scope.series = ['Series A'];*/
  $scope.data1M = [
    
    [28, 48, 40,78,87,81,90]
  ];
  $scope.onClick1M = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride1M = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options1M = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
      ]
    }
  };

$scope.labels1W = ["Sun", "Mon", "Tue","Wed","Thu","Fri","Sat"];
  /*$scope.series = ['Series A'];*/
  $scope.data1W = [
    
    [56, 84, 60,68,87,61,86]
  ];
  $scope.onClick1W = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride1W = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options1W = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
      ]
    }
  };

});
