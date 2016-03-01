app.controller("getting_started",
function($scope, service) {
    console.log("getting started init");
})

app.service("getting_started_service", 
function() {
    var instance = {};
    
    return instance;
});