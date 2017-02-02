(
    function () {
        function productFacFn($q,$http) {
            return{
                getProducts : function(){
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
            },
                addProducts : function(product){
                    
                }
            }
    
           
            
        }
        angular.module("products")
            .factory("productsFac", ["$q","$http",productFacFn])
    } 
)();