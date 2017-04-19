(function() {
  'use strict';

  angular
    .module('elga')
    .controller('MainController', MainController)
    .run(['$anchorScroll', function($anchorScroll) {
      $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
  }]);

   /** @ngInject */
  function MainController($anchorScroll, $location, $scope, $http, $window) {
    $scope.gotoAnchor = function(x) {
      var newHash = 'anchor' + x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash('anchor' + x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };

    // registro
    $scope.user = {};

    $scope.addPost = function () {
       // $scope.user.page = "mellowventures.mx";
       $scope.user.name = " ";
       $scope.user.email = " ";
       $scope.user.telephone = " ";
       $scope.user.message = " ";

       $http.post("http://emailapi.mellow.online/api/general",$scope.user)
           .success(function (data, status, headers, config) {
               $window.location.reload();
           })
           .error(function (data, status, header, config) {
                console.log(data);
           });

    };
  }
})();

window.onscroll = function() {myFunction()};

function myFunction() {

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("menu-s").className = "menu-down";
    }
    else {
        document.getElementById("menu-s").className = "menu-scroll";
    };

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("cuatro").className = "certificados";
      document.getElementById("tres").className = "calidad";
      document.getElementById("dos").className = "instalacion";

    };

    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
      document.getElementById("map").className = "mapaa";
      document.getElementById("bormap").className = "borde-ligther";

    };

};

// efecto maquina de escribir
var mensaje = "Controla el consumo de gas en tu negocio u hogar de una manera inteligente", pausa = 90; 
	function inicio(){ 
		 var i = 0;
		 var m = mensaje.split(''); 
		 var t = setInterval( 
			 function(){ 
			 if(i >= m.length-1)clearInterval(t); 
			 document.getElementById('cmaquina').innerHTML+=m[i];
			 i++; 
			 }, pausa); 
	} 
window.onload = inicio; 





