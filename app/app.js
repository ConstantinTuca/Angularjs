var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'FirstController'
        }).otherwise({
            redirectTo: '/home'
        });
}]);

myApp.controller('FirstController', ['$scope', '$http', function($scope, $http) {

    $http.get('data/nume.json').then(function(data){
        $scope.nume = data.data;
    }, function(error){});

    $scope.removeNume = function(num) {
        var removedNume = $scope.nume.indexOf(num);
        console.log(removedNume);
        $scope.nume.splice(removedNume, 1);
    };

    $scope.addNume = function() {
        let nu = {
            name: $scope.newname.name,
            hat: $scope.newname.hat,
            rate: parseInt($scope.newname.rate),
            available: true
        }
        $scope.nume.push(nu);

        $scope.newname.name = "";
        $scope.newname.hat = "";
        $scope.newname.rate = "";
    };

}]);
