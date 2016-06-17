angular.module('blindTrip')
  .controller('groupCtrl', [
    '$scope',
    'groups',
    //'$http',
    function($scope, groups) {


        //$scope.groups = groups.groups;

        // function load() {
        //     $http.get("cities.json")
        //         .then(function(response) {
        //             $scope.cities = response.data;
        //             var number = chooseCity().length - 1;
        //             var randomCity = (Math.random() * (number - 0) + 0).toFixed(0);
        //
        //             console.log(chooseCity()[randomCity]);
        //         });
        // }
        // load();
        //
        // $scope.chooseCity = function() {
        //     $scope.result = {};
        //     $scope.result['countNational'] = 8;
        //     $scope.result['countInternational'] = 2;
        //     $scope.result['countMontain'] = 5;
        //     $scope.result['countBeach'] = 3;
        //     $scope.result['countOutback'] = 2;
        //     $scope.result['countHot'] = 6;
        //     $scope.result['countCold'] = 4;
        //
        //     var tempTab = [];
        //     tempTab.push($scope.result.countBeach, $scope.result.countOutback, $scope.result.countMontain);
        //     tempTab.sort();
        //
        //     var tempObj = {};
        //     tempObj[$scope.result.countMontain] = "mountain";
        //     tempObj[$scope.result.countBeach] = "beach";
        //     tempObj[$scope.result.countOutback] = "outback";
        //
        //     var typeOfPlace = tempObj[tempTab[tempTab.length - 1]];
        //
        //     if ($scope.result['countNational'] > $scope.result['countInternational']) {
        //         $scope.territoire = 'national';
        //     } else {
        //         $scope.territoire = 'international';
        //     }
        //     var territoire = $scope.territoire;
        //
        //     if ($scope.result['countHot'] > $scope.result['countCold']) {
        //         $scope.climat = 'hot';
        //     } else {
        //         $scope.climat = 'cold';
        //     }
        //     var climat = $scope.climat;
        //
        //     return $scope.cities[territoire][typeOfPlace][climat];
        // };
        //
        // $scope.addGroup = function() {
        //
        // };ΩΩΩ
        //
        // $scope.addForm = function() {
        //   //if(!$scope.name || $scope.name === '' && !$scope.email || $scope.email === '') { return; }
        //     groups.create({
        //       createur: $scope.createur,
        //       ami1: $scope.ami1,
        //       ami2: $scope.ami2,
        //       ami3: $scope.ami3,
        //       ami4: $scope.ami4,
        //       ami5: $scope.ami5,
        //       ami6: $scope.ami6,
        //       ami7: $scope.ami7,
        //       ami8: $scope.ami8,
        //       ami9: $scope.ami9
        //     }).then(function(e){console.log(e);}, function(e){console.log(e);});
        //       $scope.createur;
        //       $scope.ami1;
        //       $scope.ami2;
        //       $scope.ami3;
        //       $scope.ami4;
        //       $scope.ami5;
        //       $scope.ami6;
        //       $scope.ami7;
        //       $scope.ami8;
        //       $scope.ami9;
        // };

        $scope.addDestination = function() {
          //if(!$scope.name || $scope.name === '' && !$scope.email || $scope.email === '') { return; }
          groups.getAll();
          $scope.groups = groups.groups;

          $scope.countPlace = 0;
          $scope.countMontagne = 0;
          $scope.countVert = 0;
          $scope.countFroid = 0;
          $scope.countChaud = 0;
          $scope.countFrance = 0;
          $scope.countEtranger = 0;

          place = $scope.place;
          weather = $scope.weather;
          land = $scope.land;

          if (place === "plage") {
            $scope.countPlace += 1;
          }// t.integer  "countbeach"
          if (place === "montagne") {
            $scope.countMontagne += 1;
          }// t.integer  "countmountain"
          if (place === "auVert") {
            $scope.countVert += 1;
          }// t.integer  "countoutback"
          if (weather === "auFroid") {
            $scope.countFroid += 1;
          }// t.integer  "countcold"
          if (weather === "auChaud") {
            $scope.countChaud += 1;
          }// t.integer  "counthot"
          if (land === "france") {
            $scope.countFrance += 1;
          }// t.integer  "countnational"
          if (land === "etranger") {
            $scope.countEtranger += 1;
          }// "countinternational";

          groups.create({
            countbeach: $scope.countPlace,
            countmountain: $scope.countMontagne,
            countoutback: $scope.countVert,
            countcold: $scope.countFroid,
            counthot: $scope.countChaud,
            countnational: $scope.countFrance,
            countinternational: $scope.countEtranger

          });

          console.log("place :" + place);
          console.log("weather :" + weather);
          console.log("land :" + land);

        };

    }
]);
