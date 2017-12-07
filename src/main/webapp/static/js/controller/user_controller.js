'use strict';
angular.module('clubApp').controller('UserController', function($scope, $http) {
	
	$scope.sortType     = 'name'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchUser   = '';     // set the default search/filter term
	  
	  
	$scope.add_user = false;
	$scope.add_userlist = true;
	
	$scope.user={userId:null, firstName:'',lastName:'',userName:'',password:'', dob:'',mobile:'',email:'',driverLicenseNo:'',  
			address:{
				unitNo:'',street:'', suburb:'',city:'',state:'',postcode:''
			}
		};
	
	
	$scope.users=[];
	
	
	$scope.$watch('add_user', function(){
        $scope.addUserText = $scope.add_user ? 'Cancel' : 'Add User';
        if($scope.addUserText === 'Add User'){
        	$scope.reset();
        	$scope.add_userlist = true;
        }
        if($scope.addUserText === 'Cancel'){
        	$scope.add_userlist = false;
        }
    });
	
	this.users=[];
	var REST_SERVICE_URI = 'http://localhost:8080/IRoster/user/';
	
	fetchAllUsers();
	
	function fetchAllUsers(){
		$http.get(REST_SERVICE_URI)
    	.then(
    		function (response) {
    			$scope.users = response.data;
    		});
	}
	
	function addUser(user) {
		
		//alert(user.firstName + ", " + user.lastName);
		$http.post(REST_SERVICE_URI, user)
        .then(
    		function (){
            	$scope.add_user = false;
            	$scope.add_userlist = true;
            	$scope.reset();
            	fetchAllUsers();
            },
            function(response){
                console.error('Error while adding User');
            }
        );
        
    }
	
	function updateUser(userId, user) {
		
		$http.post(REST_SERVICE_URI+userId, user)
        .then(
        		function (){
                	$scope.add_user = false;
                	$scope.add_userlist = true;
                	$scope.reset();
                	fetchAllUsers();
                },
                function(response){
                    console.error('Error while editing User');
                }
        );
    }
	
	
	
	function deleteUser(id) {
        $http.delete(REST_SERVICE_URI+id)
            .then(
	            fetchAllUsers,
	            function(response){
	                console.error('Error while deleting User');
	            }
        );
    }
	
	$scope.submit = function(){
		
		if($scope.user.userId===null){
			//alert($scope.user.userName);
			console.log('Adding New User', $scope.user);
            addUser($scope.user);
        }else{
        	//alert("clubId: "+$scope.club.clubId);
            updateUser($scope.user.userId, $scope.user);
            console.log('User Info updated with id ', $scope.user.userId);
        }
        
	};
	
	
	$scope.remove = function(id){
		console.log('id to be deleted', id);
        deleteUser(id);
	};
	
	$scope.reset = function(){
		
		$scope.user={userId:null, firstName:'',lastName:'',userName:'',password:'', dob:'',mobile:'',email:'',driverLicenseNo:'',  
				address:{
					unitNo:'',street:'', suburb:'',city:'',state:'',postcode:''
				}
			};
        $scope.userForm.$setPristine(); //reset Form
	};
	
	
	$scope.dateOptions = {
			formatYear: 'yy',
			maxDate: new Date(2020, 5, 22)
	};
	
	$scope.open1 = function() {
		$scope.popup1.opened = true;
	};
	
	$scope.setDate = function(year, month, day) {
		$scope.user.dob = new Date(year, month, day);
	};
	
	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];
	
	
	$scope.popup1 = {
			opened: false
	};
});