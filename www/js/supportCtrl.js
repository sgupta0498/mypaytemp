myPay.controller('SupportCtrl', function($scope, $ionicModal) {

    $ionicModal.fromTemplateUrl('templates/createTicketModal.html', {
        scope: $scope,
        focusFirstInput: true
    }).then(function(modal) {
        $scope.modalCreateTicket = modal;
       
    });

    $scope.openModalCreateTicket = function() {
        $scope.modalCreateTicket.show();
    };

    $scope.closeModalCreateTicket = function() {
        $scope.modalCreateTicket.hide();
    };

    $ionicModal.fromTemplateUrl('templates/myTicketsListModal.html', {
        scope: $scope,
        focusFirstInput: true
    }).then(function(modal) {
        $scope.modalMyTicketslist = modal;
       
    });

    $scope.openModalMyTicketslist = function() {
        $scope.modalMyTicketslist.show();
    };

    $scope.closeModalMyTicketslist = function() {
        $scope.modalMyTicketslist.hide();
    };


    $ionicModal.fromTemplateUrl('templates/rateAppModal.html', {
        scope: $scope,
        focusFirstInput: true
    }).then(function(modal) {
        $scope.modalrateApp = modal;
       
    });

    $scope.openModalRateApp = function() {
        $scope.modalrateApp.show();
    };

    $scope.closeModalRateApp = function() {
        $scope.modalrateApp.hide();
    };
    





    $ionicModal.fromTemplateUrl('templates/knowledteBaseModal.html', {
        scope: $scope,
        focusFirstInput: true
    }).then(function(modal) {
        $scope.modalknowledgeBase = modal;
       
    });

    $scope.openModalknowledgeBase = function() {
        $scope.modalknowledgeBase.show();
    };

    $scope.closeModalknowledgeBase = function() {
        $scope.modalknowledgeBase.hide();
    };
   




















   $scope.groups = [];
  for (var i=0; i<10; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
});
