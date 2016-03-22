//var app = angular.module('Vidzy', []);
//added dependencies of ngRoute (Angular module)
//var app = angular.module('Vidzy', ['ngRoute']);
//added ngResource for consuming RESTful API's
var app = angular.module('Vidzy', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl' //registering controller as part of the route
        })
        .otherwise({
            redirectTo: '/'
        });
}]);


//Creating a controller for data and event handling
app.controller('HomeCtrl', ['$scope', '$resource', // scope passes data, resouce consumes RESTful API
    function($scope, $resource){
		var Videos = $resource('/api/videos'); // gets resource object from give API endpoint
        Videos.query(function(videos){
            $scope.videos = videos; // scope ties view with controller 
        });
    }]);