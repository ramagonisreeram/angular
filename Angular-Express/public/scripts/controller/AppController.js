(function(angular) {
  'use strict';
angular.module('defaultValueSelect', [])
  .controller('ExampleController', ['$scope', function($scope) {
    
    $scope.selectedUnit="";
    $scope.sites = {
     availableSites: [
       {id: '1', name: 'Option A',units:['Unit1','Unit2','Unit3']},
       {id: '2', name: 'Option B',units:['Unit1','Unit2']},
       {id: '3', name: '--select--'}
     ],
     selectedSite: {id: '3', name: '--select--'},
     //This sets the default value of the select in the ui

   

     };
    $scope.renderCharts=function(unit){
    	console.log(unit);

    	var  getLCOptions=getLC();
    	getLCOptions.title.text=unit;
    	getLCOptions.subtitle.text='Subtitle for'+unit;
    	Highcharts.chart('container', getLCOptions);
    	$scope.selectedUnit=unit;
    	
    	Highcharts.chart('container',getLCOptions);
    };
    
  $scope.clear=function(unit){
	  console.log("got the selectUnit"+unit);
	  $scope.selectedUnit="";
	  console.log("cleared the selected unit"+$scope.selectedUnit);
  };
    
   var getLC=function(){
	   
	 var options= {

		    title: {
		        text: ''
		    },

		    subtitle: {
		        text: ''
		    },

		    yAxis: {
		        title: {
		            text: 'IDR'
		        }
		    },
		      showInLegend: true,

		    plotOptions: {
		        series: {
		            pointStart: 2014
		        }
		    },

		    series: [{
		        name: 'Sample1',
		        data: [1000000, 1100000, 1250000,1200000]
		    }, {
		        name: 'Sample2',
		        data: [800000, 850000, 1000000,950000]
		    }],

		    responsive: {
		        rules: [{
		            condition: {
		                maxWidth: 500
		            },
		            chartOptions: {
		                legend: {
		                    layout: 'horizontal',
		                    align: 'center',
		                    verticalAlign: 'bottom'
		                }
		            }
		        }]
		    }

		};
	 return options;
	   
   };
   
    
 }]);
})(window.angular);