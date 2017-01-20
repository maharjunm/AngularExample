var demoApp = angular.module('demoApp', []);
demoApp.controller('SimpleController', SimpleController);
function SimpleController($scope) {
    $scope.names=[{ 'name': 'maharjun', 'city': 'Anantapur' }, { 'name': 'some', 'city': 'Anantaram' }, { 'name': 'someother', 'city': 'Nalgonda' }, { 'name': 'me', 'city': 'Medak'}, { 'name': 'all', 'city': 'India' }]
}
//to controller with Ananymous function
demoApp.controller('SimpleController1', function ($scope) {
    $scope.names=[{ 'name': 'maharjun', 'city': 'Anantapur' }, { 'name': 'some', 'city': 'Anantaram' }, { 'name': 'someother', 'city': 'Nalgonda' }, { 'name': 'me', 'city': 'Medak'}, { 'name': 'all', 'city': 'India' }]
});

//create controllers with controllers Variables
var controllers = {};
controllers.SimplerController2 = function ($scope) {
    $scope.names=[{ 'name': 'maharjun', 'city': 'Anantapur' }, { 'name': 'some', 'city': 'Anantaram' }, { 'name': 'someother', 'city': 'Nalgonda' }, { 'name': 'me', 'city': 'Medak'}, { 'name': 'all', 'city': 'India' }]
};
demoApp.controller(controllers);