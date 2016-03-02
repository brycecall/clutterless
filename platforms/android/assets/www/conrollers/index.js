app.controller("index",
    function ($scope, $rootScope, $location, service) {
        console.log("index init");
        $scope.service = service;

        $scope.fab_navigate = function () {
            if (service.index.fab == $rootScope.FAB_ENUM.checklist) {
                service.index.fab = $rootScope.FAB_ENUM.dashboard;
                $location.path("/checklist");
            } else {
                service.index.fab = $rootScope.FAB_ENUM.checklist;
                $location.path("/dashboard");
            }
            service.index.help = true; // HACK ALERT: here to reset after help navigate
        }
        $scope.help_navigate = function () {
            $scope.fab_navigate();
            $location.path("/start");
            service.index.help = false;
        }
    });

app.service("index_service",
    function ($rootScope) {
        var instance = {};

        // Default ENUM
        $rootScope.FAB_ENUM = function () {
            return {
                checklist: "done_all",
                dashboard: "subject"
            };
        }();

        instance.fab = $rootScope.FAB_ENUM.checklist;
        instance.help = true;

        return instance;
    });
