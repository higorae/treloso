angular.module("demo").controller("SimpleDemoController", function($scope) {
    $scope.models = {
        selected: null,
        lists:  []
    };

    $scope.addItem = function (index,item) {
        atual = _.size(item) +1;
        console.log(atual);
        $scope.models.lists[index].data.push({label: "Item " +  atual+" Grupo "+index, type: "item"});
        console.log($scope.models.lists[index].data);
    }
    
    $scope.addGrupo = function () {
        $scope.models.lists.push({type: "groupo", data: []});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});