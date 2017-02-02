(function(){
    function brandNameFn(){
        return{
          template: '<a class="navbar-brand" href="#">{{hc.brandName}}</a>', 
       /*   compile: function(element,attr){
              console.log(element);
              console.log(attr);
              return{
                  pre:function(scope,element,attr){
                      console.log(scope);
                      console.log(element);
                      console.log(attr);
                  },
                  post:function(scope,elements,attr){
                      console.log(scope);
                      console.log(element);
                      console.log(attr);                      
                  }
              }
          };*/
         link:   function(scope,elements,attrs){
                      console.log(scope);
                      console.log(element);
                      console.log(attrs); 
         }
        }
    }
    
    
    angular.module("common")
    .directive("cmBrandName",[brandNameFn])
    
})();