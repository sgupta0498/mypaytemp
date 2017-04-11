angular.module('mypayservice',[])
.factory('MyPayService',function($http){
	function MyPayService() {
	}
	MyPayService.login = function(userCredentialObj){
		console.log("My service called "+userCredentialObj);/*
		return	 $http.post(constants.projectName+'/addPurchaseProductOfPainter', userCredentialObj,{
			headers : {
				'Content-Type' : 'application/json;charset=UTF-8'
			}} ).then(function (response) {
    	
		var data = response.data;
		
		return response.data;
		
         });	*/	
	};
	
	
	return MyPayService;
});