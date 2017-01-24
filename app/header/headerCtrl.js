(function(){
    
    function headerCtrl(){
      var vm=this;
        vm.brandName="Good Services";
        vm.navItems =["Login","Register","Cart"];
    }
    angular.module("header")
    .controller("headerCtrl",[headerCtrl]);
})();
