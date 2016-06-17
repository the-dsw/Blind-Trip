angular.module('blindTrip')
    .controller('counterCtrl', [
        '$scope',
        'counters',
        'transferts',


        function($scope, counters, transferts) {
            // $scope.groupName = '';
            $scope.view = 'createBtn';
            $scope.addGroupName = function() {
                $scope.groupName = 'LES BRONZES';
            };
            
            $scope.users = transferts.transfert;

            counters.getAll();
            $scope.counters = counters.counters;

            $scope.addDestination = function() {
                //if(!$scope.name || $scope.name === '' && !$scope.email || $scope.email === '') { return; }


                place = $scope.place;
                weather = $scope.weather;
                land = $scope.land;

                if (place === "plage") {
                    $scope.countPlace = 1;
                }
                // "countbeach"
                if (place === "montagne") {
                    $scope.countMontagne = 1;
                } // "countmountain"
                if (place === "auVert") {
                    $scope.countVert = 1;
                } // "countoutback"
                if (weather === "auFroid") {
                    $scope.countFroid = 1;
                } // "countcold"
                if (weather === "auChaud") {
                    $scope.countChaud = 1;
                } // "counthot"
                if (land === "france") {
                    $scope.countFrance = 1;
                } // "countnational"
                if (land === "etranger") {
                    $scope.countEtranger = 1;
                } // "countinternational";

                counters.create({
                    countbeach: $scope.countPlace,
                    countmountain: $scope.countMontagne,
                    countoutback: $scope.countVert,
                    countcold: $scope.countFroid,
                    counthot: $scope.countChaud,
                    countnational: $scope.countFrance,
                    countinternational: $scope.countEtranger,

                });

                console.log("place :" + place);
                console.log("weather :" + weather);
                console.log("land :" + land);


            };

        }
    ]);
