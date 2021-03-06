(
    function () {
        function lookupServiceFn($q,$http) {
            var countries = [{
                    code: "IN",
                    name: "India"
                    },
                {
                    code: "USA",
                    name: "United States"
                    }];
            this.getCountries = function () {
                var dfd=$q.defer();
                
                if (countries.length>0){
                    dfd.resolve(countries);
                }else{
                    dfd.reject("Error");
                }
                
                return dfd.promise;
                //return countries;

            };
            this.defaultCountry = function () {
                var country =""
                angular.forEach(countries, function (item) {
                    if (item.code == "IN") {
                        country= item;
                    }
                });
                return country;
            };
            
            this.getCountriesFromJson = function(){
                var dfd=$q.defer();
               
                $http.get("api/countries.json")
                .then(function(response){
                   console.log(response);
                    dfd.resolve(response.data.countries);
                })
                .catch(function(errorResponse){
                  dfd.reject("Error Occured");
                });
                return dfd.promise;
            };
            
        }
        angular.module("common")
            .service("lookupService", ["$q","$http",lookupServiceFn])
    }
)();