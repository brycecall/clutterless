app.controller("checklist", 
function($scope, service){
    console.log("checklist init");
});

app.service("checklist_service",
function(){
    var instance = {};
    
    return instance;
});