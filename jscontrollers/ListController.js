app.controller('ListController',function($scope,$http){

    loadData();

    function loadData(){
        $http({
            url:"http://localhost/BelajarAngularJSRouting2DenganAjaxRequest/back-end/select.php",
            method:"GET"
        }).
        then(function ok(response){
            var data = response.data;
            $scope.json = data.person;
        },function error(error){
            console.log(error);
        });
    }

    $scope.deleteData = function (id){
       console.log(id);
       $http({
         method:"GET",
         url:"http://localhost/BelajarAngularJSRouting2DenganAjaxRequest/back-end/delete.php",
         params:{id:id}
       }).then(function ok(response){
          loadData();
          console.log(response);
       },function error(response){
          console.log(response);
       });
    }


});