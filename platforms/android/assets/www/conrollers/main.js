var app = angular.module("clutterless", ['ngMaterial', 'ngMdIcons', 'ngRoute']);

app.config(
    function ($routeProvider, $mdThemingProvider) {
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
    function (checklist_service, dashboard_service, getting_started_service, index_service) {
        var instance = {};

        // Push services onto main application service
        var Services = function () {
            instance.checklist = checklist_service;
            instance.dashboard = dashboard_service;
            instance.getting_started = getting_started_service;
            instance.index = index_service;
        }();

        // Model
        var Model = function () {
            instance.checklist = JSON.parse(localStorage.getItem("checklist"));
            if (!instance.checklist)
                instance.checklist = default_checklist;

            instance.save = function () {
                setTimeout(function() {
                localStorage.setItem("checklist", JSON.stringify(instance.checklist));
                console.info("checklist saved");
                }, 1000);
            };
            
            instance.current_section_name = "Clothing"
            instance.current_section = instance.checklist[instance.current_section_name];
        }();

        return instance;
    });

document.addEventListener('deviceready', function () {
    admob.createBannerView({
        publisherId: "ca-app-pub-8941304934472173/7626081274"
    });
    console.log("AdMob Ready");
}, false);
