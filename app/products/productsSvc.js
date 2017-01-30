(
    function () {
        function productSvcFn($q,$http) {
    
            this.getProducts = function(){
                var dfd=$q.defer();
               
                $http.get("api/products.json")
                .then(function(response){
                   console.log(response);
                    dfd.resolve(response);
                })
                .catch(function(errorResponse){
                  dfd.reject("Error Occured");
                });
                return dfd.promise;
            };
            
        }
        angular.module("products")
            .service("productsSvc", ["$q","$http",productSvcFn])
    }
)();