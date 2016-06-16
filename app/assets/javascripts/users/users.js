angular.module('blindTrip')
  .factory('users', ['$http', function($http) {
      var o = {
          users: []
      };

      o.getAll = function() {
         return $http.get('/users.json').success(function(data){
           angular.copy(data, o.users);
         });
       };

       o.create = function(user) {
          return $http.post('/users.json', user);/*.success(function(data){
            o.users.push(data);
          });*/
        };

        o.get = function(id) {
          return $http.get('/users/' + id + '.json').then(function(res){
            return res.data;
          });
        };

      return o;
  }]);
