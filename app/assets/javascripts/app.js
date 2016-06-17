angular.module('blindTrip', ['ui.router', 'templates'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('users', {
                    url: '/users',
                    templateUrl: 'users/_users.html',
                    controller: 'userCtrl',
                    resolve: {
                        param1: function(transferts) {
                            return transferts;
                        }
                    }
                })
                .state('counters', {
                    url: '/counters',
                    templateUrl: 'counters/_counters.html',
                    controller: 'counterCtrl'
                });

            $urlRouterProvider.otherwise('users');
        }
    ]);
