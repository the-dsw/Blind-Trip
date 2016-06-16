angular.module('blindTrip', ['ui.router', 'templates'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('users', {
                    url: '/users',
                    templateUrl: 'users/_users.html',
                    controller: 'MainCtrl'
                });

            $urlRouterProvider.otherwise('users');
        }
    ]);
