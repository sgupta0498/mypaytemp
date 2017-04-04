<<<<<<< HEAD
myPay.controller('RateChartCtrl', function($scope,$ionicHistory) {
  
 $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A'];
  $scope.data = [
    
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
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





  $scope.myJson = {
    title: {
      text: "Bit Coin Price",
      fontSize: 14,
      fontColor: "#fff"
    },
    options: {
      mobile: true
    },
=======
myPay.controller('RateChartCtrl', function($scope) {
  
  $scope.myJson = {
    title: {
      text: "Bit Coin Price",
      fontSize: 16,
      fontColor: "#fff"
    },
>>>>>>> e5b91b45e2fc8b44707db5dbd239e90420c16871
    backgroundColor: "#2bbb9a",
    globals: {
      shadow: false,
      fontFamily: "Arial"
    },
    type: "line",
    scaleX: {
<<<<<<< HEAD
      maxItems: 6,
=======
      maxItems: 8,
>>>>>>> e5b91b45e2fc8b44707db5dbd239e90420c16871
      lineColor: "white",
      lineWidth: "1px",
      tick: {
        lineColor: "white",
        lineWidth: "1px"
      },
      item: {
        fontColor: "white"
      },
      guide: {
        visible: false
      }
    },
    scaleY: {
      lineColor: "white",
      lineWidth: "1px",
      tick: {
        lineColor: "white",
        lineWidth: "1px"
      },
      guide: {
        lineStyle: "solid",
        lineColor: "#249178"
      },
      item: {
        fontColor: "white"
      },
    },
    tooltip: {
      visible: false
    },
    crosshairX: {
      lineColor: "#fff",
      scaleLabel: {
        backgroundColor: "#fff",
        fontColor: "#323232"
      },
      plotLabel: {
        backgroundColor: "#fff",
        fontColor: "#323232",
        text: "%v",
        borderColor: "transparent"
      }
    },
    plot: {
      lineWidth: "2px",
      lineColor: "#FFF",
      aspect: "spline",
      marker: {
        visible: false
      }
    },
    series: [{
<<<<<<< HEAD
      values: [89, 64, 61, 60, 75, 80, 88, 77, 67, 90, 67, 86, 90]
=======
      values: [989, 1364, 2161, 2644, 1754, 2015, 818, 77, 1260, 3912, 1671, 1836, 1901]
>>>>>>> e5b91b45e2fc8b44707db5dbd239e90420c16871
    }]
  }

  
});
