app.controller("checklist",
    function ($scope, service) {
        console.log("checklist init");
        $scope.section = service.current_section;
        $scope.select = false; // Used for UI mod
        $scope.subsection = null; // Used for post select mod
    console.log($scope.section);

        // HACK: This is meant to detect the Komono section
        if ($scope.section[0].items)
            $scope.select = true;
    
        $scope.navigate = function(subsection) {
            for(var i = 0; i < $scope.section.length; i++)
                if ($scope.section[i].label == subsection)
                    $scope.section = $scope.section[i].items;
            $scope.select = false;
        }
        
        $scope.$on('$destroy', service.save);
    });

app.service("checklist_service",
    function () {
        var instance = {};

        return instance;
    });
