(function(){
    
    function headerCtrlfn(){
      var vm=this;
        vm.brandName="Good Services";
        vm.navItems =["Login","Register","Products","Cart","LogOut"];
        vm.loginTemplate="app/login/login.tpl.html";
        vm.registerTemplate="app/register/register.tpl.html";
        vm.productsTemplate="app/products/products.tpl.html";
        vm.loadView= function(param){
            console.log(param);
            if (param=="Login"){
                vm.loadTemplate=vm.loginTemplate;
            }
            else if (param=="Register"){
                vm.loadTemplate=vm.registerTemplate;              
            }
            else if (param=="Products"){
                vm.loadTemplate=vm.productsTemplate;              
            }
        };
    }
    angular.module("header")
    .controller("headerCtrl",[headerCtrlfn]);
})();
