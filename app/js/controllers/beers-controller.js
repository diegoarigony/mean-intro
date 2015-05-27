app.controller('BeersCtrl', ['$scope', '$resource', function($scope, $resource){
    var Beer = $resource('/api/beers');

    Beer.query(function(result){
        $scope.beers = result;    
    });

    $scope.beers = [];

    $scope.insertBeer = function(){
        var beer = new Beer();
        beer.name = $scope.beerName;
        beer.$save(function(result ){
            $scope.beers.push( result );
        });
        $scope.beerName = '';
    };
}]);
