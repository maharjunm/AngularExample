var routesDemo = angular.module("routesDemo", ["ngRoute"]);

routesDemo.config(function ($routeProvider) {
   $routeProvider
       .when("/view1",
           {
               controller: "SimpleController", templateUrl: "./view1.html"
           })
       .when("/view2",
           {
               controller: "SimpleController", templateUrl: "./view2.html"
           })
       .otherwise({ redirectTo: "/view1" });
});

routesDemo.controller('SimpleController', function ($scope) {

    $scope.names=[{ 'name': 'maharjun', 'city': 'Anantapur' },
        { 'name': 'some', 'city': 'Anantaram' },
        { 'name': 'someother', 'city': 'Nalgonda' },
        { 'name': 'me', 'city': 'Medak'},
        { 'name': 'all', 'city': 'India' }];

    $scope.addToCustomers= function() {
        $scope.names.push(
            {"name": $scope.newCustomer.name, "city": $scope.newCustomer.city });
    }
});