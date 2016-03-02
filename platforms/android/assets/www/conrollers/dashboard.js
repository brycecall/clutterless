app.controller("dashboard",
    function ($scope, $rootScope, $location, service) {
        console.log("dashboard init");
        $scope.service = service;

        $scope.navigate = function (section) {
            service.current_section = service.checklist[section];
            service.current_section_name = section;
            service.index.fab = $rootScope.FAB_ENUM.dashboard;
            $location.path("/checklist");
        };
        $scope.calculate_remaining = function (section) {
            var items = service.checklist[section];
            var retval = {};
            var tripwire = true;
            retval.total = items.length;
            retval.complete = 0;

            for (var i = 0; i < items.length; i++) {
                if (items[i].items) {
                    if (tripwire) {
                        retval.total = 0;
                        tripwire = false;
                    }
                    for (var j = 0; j < items[i].items.length; j++) {
                        retval.total++;
                        if (items[i].items[j].complete)
                            retval.complete++;
                    }
                } else if (items[i].complete) {
                    retval.complete++;
                }
            }

            retval.remaining = retval.total - retval.complete;
            retval.percent = (retval.complete * 100 / retval.total).toFixed(0);
            console.log(retval);
            return retval;
        };
    });

app.service("dashboard_service",
    function () {
        var instance = {};
    
        return instance;
    });
