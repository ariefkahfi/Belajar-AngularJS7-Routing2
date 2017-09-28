app.controller('formController',function($scope,$http,$httpParamSerializer){

    function cleanUp() {
       $scope.nama = "";
       $scope.alamat = "";
    }

    $scope.insertData = function (){
       var namaField = $scope.nama;
       var alamatField = $scope.alamat;

       if(namaField === '' || namaField === undefined || alamatField === '' || alamatField === undefined){
         alert('Masih ada form yang kosong');
       }else{
         $http({
             url:"http://localhost/BelajarAngularJSRouting2DenganAjaxRequest/back-end/insert.php",
             method:"POST",
             headers:{"Content-type":"application/x-www-form-urlencoded"},
             data:$httpParamSerializer({nama:namaField,alamat:alamatField})
         }).
         then(function ok (response){
           console.log(response);
           alert(response.data);
           cleanUp();
         },function error(error){
           console.log(error);
         });
       }

    };
});