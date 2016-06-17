angular.module('blindTrip', ['ui.router', 'templates'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('users', {
                    url: '/users',
                    templateUrl: 'users/_users.html',
                    controller: 'userCtrl'
                })
                .state('groups', {
                    url: '/groups',
                    templateUrl: 'groups/_groups.html',
                    controller: 'groupCtrl'
                });

            $urlRouterProvider.otherwise('groups');
        }
    ]);
