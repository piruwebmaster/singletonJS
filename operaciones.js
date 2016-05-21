var operaciones = {
    getSingleton: (function() { // BEGIN iife
      var singleton;
      return function() {
        if (!singleton) {
          singleton = {
            sumar: function(a,b) {
              return a+b;
            },
            restar:function(a,b) {
              return a-b;
            },
            multiplicar:function(a,b) {
              return a*b;
            },
            dividir:function(a,b) {
              return a/b;
            },
            potencia:function(a,b){
              return Math.pow(a,b);
            }
          }
        }
        return singleton;
      };
    }()) // END iife
  };
  // Invoke: namespace.getSingleton().amethod()