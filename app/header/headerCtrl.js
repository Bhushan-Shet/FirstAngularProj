(function(){
    
    function headerCtrlfn(){
      var vm=this;
        vm.brandName="Good Services";
        vm.navItems =["Login","Register","Cart","LogOut"];
        vm.loginTemplate="app/login/login.tpl.html";
        vm.registerTemplate="app/register/register.tpl.html";
        vm.loadView= function(param){
            console.log(param);
            if (param=="Login"){
                vm.loadTemplate=vm.loginTemplate;
            }
            else if (param=="Register"){
                vm.loadTemplate=vm.registerTemplate;              
            }
        };
    }
    angular.module("header")
    .controller("headerCtrl",[headerCtrlfn]);
})();
