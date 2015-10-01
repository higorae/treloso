angular.module("demo", ["ngRoute", "dndLists"])
    .config(function($routeProvider) {
        $routeProvider
            .when('/simple', {
                templateUrl: 'simple/simple-frame.html',
                controller: 'SimpleDemoController'
            })
            .otherwise({redirectTo: '/simple'});
    })

    .directive('navigation', function($rootScope, $location) {
        return {
            template: '',
            link: function (scope, element, attr) {
                scope.options = [
                    {label: "Simple Demo", href: "#/simple"},
                ];

                scope.isActive = function(option) {
                    return option.href.indexOf(scope.location) === 1;
                };

                $rootScope.$on("$locationChangeSuccess", function(event, next, current) {
                    scope.location = $location.path();
                });
            }
        };
    });