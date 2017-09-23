(function(angular) {
  'use strict';
angular.module('defaultValueSelect', [])
  .controller('ExampleController', ['$scope', function($scope) {
    
    $scope.selectedUnit="";
    $scope.sites = {
     availableSites: [
       {id: '1', name: 'Option A',units:['Unit1','Unit2','Unit3']},
       {id: '2', name: 'Option B',units:['Unit1','Unit2']},
       {id: '3', name: '--hello--'}
     ],
     selectedSite: {id: '3', name: '--hello--'},
     //This sets the default value of the select in the ui
  
     };
 }]);
})(window.angular);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/