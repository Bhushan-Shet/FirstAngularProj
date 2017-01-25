(function(){
    
    function registerCtrl(){
        var vm=this;
        vm.user={
            firstName:""   
        };
        vm.register=function(){
            
            console.log(vm.user);
        }
    }
    angular.module("register")
        .controller("registerCtrl",[registerCtrl])
    
})();