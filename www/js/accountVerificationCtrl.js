myPay.controller('AccountVerificationCtrl', function($scope,ionicDatePicker) {
  //alert("asdasfd")



 var ipObj1 = {
      callback: function (val) {  //Mandatory
        console.log('Return value from the datepicker popup is : ' +  new Date(val));
         $scope.selectedDate1 = new Date(val);
      },
      from: new Date(1950, 1, 1), //Optional
      to: new Date(1999, 10, 30), //Optional
      inputDate: new Date(1999, 10, 30),      //Optional
      mondayFirst: true,          //Optional
      disableWeekdays: [0],       //Optional
      closeOnSelect: false,       //Optional
      templateType: 'popup'       //Optional
    };

    $scope.openDatePicker = function(){
      //alert("asdf")
      ionicDatePicker.openDatePicker(ipObj1);
    };
});





