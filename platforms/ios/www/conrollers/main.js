var app = angular.module("clutterless", ['ngMaterial', 'ngMdIcons', 'ngRoute']);

app.config(
function($routeProvider, $mdThemingProvider) {
    $routeProvider
    .when("/checklist", {
        templateUrl: "pages/checklist.html",
        controller: "checklist"
    })
    .when("/dashboard", {
        templateUrl: "pages/dashboard.html",
        controller: "dashboard"
    })
    .when("/start", {
        templateUrl: "pages/getting_started.html",
        controller: "getting_started"
    })
    .otherwise({
        redirectTo: "/dashboard"
    });
    
    $mdThemingProvider.theme('default')
        .primaryPalette("blue")
        .accentPalette("green");
    
    console.log("Application Route init");
});

app.service("service", 
function(checklist_service, dashboard_service, getting_started_service, index_service) {
    var instance = {};
    
    // Push services onto main application service
    instance.checklist = checklist_service;
    instance.dashboard = dashboard_service;
    instance.getting_started = getting_started_service;
    instance.index = index_service;
    
    return instance;
});