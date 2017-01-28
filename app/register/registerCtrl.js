(function(){
    
    function registerCtrl(lookupSvc){
        var vm=this;
        vm.user={
            firstName:""   
        };
        vm.register=function(){
            
            console.log(vm.user);
        }
        //vm.countries= lookupSvc.getCountries(); 
        
        lookupSvc.getCountries()
        .then(function(response){
            console.log(response);
            
        })
        .catch(function(errorResponce){
            console.log(errorResponce);
             
        })
        
        vm.selectedCountry=lookupSvc.defaultCountry();
        
        lookupSvc.getCountriesFromJson()
        .then(function(res){
            console.log(res);
            vm.countries=res;
        })
        .catch(function(err){
            console.log(err);
             
        })
    }
    angular.module("register")
        .controller("registerCtrl",["lookupService",registerCtrl])
    
})();