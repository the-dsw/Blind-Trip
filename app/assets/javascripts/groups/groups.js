angular.module('blindTrip')
  .factory('groups', ['$http', function($http) {
      var o = {
          groups: []
      };

      o.getAll = function() {
         return $http.get('/groups.json').success(function(data){
           angular.copy(data, o.groups);
         });
       };

       o.create = function(group) {
          return $http.post('/groups.json', group);/*.success(function(data){
            o.groups.push(data);
          });*/
        };

        o.get = function(id) {
          return $http.get('/groups/' + id + '.json').then(function(res){
            return res.data;
          });
        };

      return o;
  }]);
