'use strict';
angular.module('ClubApp').controller('LogoutController',
		function($rootScope, $scope, $http, $location) {
			$scope.logout = function() {
				$http.post('logout', {}).success(function() {
					$rootScope.authenticated = false;
					$location.path("/");
				}).error(function(data) {
					$rootScope.authenticated = false;
				});
			}
		});
