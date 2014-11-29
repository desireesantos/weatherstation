  angular.module('weatherstation', [])

  .factory('socket', function ($rootScope, $interval) {

    var socket = io.connect();
      function on (event) {
       if (event == 'station'){ 
             socket.on('station', function (data) {
             $rootScope.$apply(function () {
             $rootScope.sensor0 = data.sensor0;
             $rootScope.sensor1 = data.sensor1;
             $rootScope.sensor2 = data.sensor2;
             $rootScope.sensor3 = data.sensor3;
             $rootScope.sensor4 = data.sensor4;
             $rootScope.sensor5 = data.sensor5;
             $rootScope.sensor6 = data.sensor6;
          });
        });
        }
        if (event == 'stationOut'){ 
          socket.on('stationOut', function (data) {
          $rootScope.$apply(function () {
            $rootScope.sensor7 = data;
          });
        });
      };
    }
    return {on : on}
  })

  .run(function ($rootScope, socket) {
    socket.on('stationOut', function (level) { 
      $rootScope.sensor0 = level;
    });
     socket.on('station', function (level) {
      $rootScope.sensor7 = level;
    });
  });
