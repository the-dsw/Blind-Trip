angular.module('blindTrip')
  .factory('counters', ['$http', function($http) {
      var o = {
          counters: []
      };

      o.getAll = function() {
         return $http.get('/counters.json').success(function(data){
           angular.copy(data, o.counters);
         });
       };

       o.create = function(counter) {
          return $http.post('/counters.json', counter);
        };

        o.get = function(id) {
          return $http.get('/counters/' + id + '.json').then(function(res){
            return res.data;
          });
        };

      return o;
  }]);
