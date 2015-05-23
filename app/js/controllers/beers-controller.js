beersApp.controller('BeersCtrl', ['$scope', '$resource', function($scope, $resource){
    var Beer = $resource('/api/beers')

    $scope.beersCount = 5;

    $scope.beers = [
        { name: "beer 1" },
        { name: "beer 2" },
        { name: "beer 3" }
    ];

    $scope.insertBeer = function(){
        var beer = new Beer();
        beer.name = $scope.beerName;
        beer.$save();
        $scope.beerName = '';
    }
}]);
