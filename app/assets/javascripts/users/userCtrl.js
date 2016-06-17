angular.module('blindTrip')
  .controller('userCtrl', [
    '$scope',
    'users',
    function($scope, users) {
        users.getAll();
        $scope.users = users.users;

        $scope.addPost = function() {
          if(!$scope.name || $scope.name === '' && !$scope.email || $scope.email === '') { return; }
            users.create({
              name: $scope.name,
              email: $scope.email,
            }).then(function(e){console.log(e);}, function(e){console.log(e);});
            $scope.name = '';
            $scope.email = '';
        };
    }
]);