app.controller("dashboard",
function($scope, service) {
    console.log("dashboard init");
});

app.service("dashboard_service",
function(){
    var instance = {};
    
    return instance;
});