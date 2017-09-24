
var _appModule=angular.module('appModule', [])
  .controller('chartController',function ($scope,chartService) {
					$scope.selectedUnit = "";
					$scope.sites = {
						availableSites : [ {
							id : '1',
							name : 'OptionA',
							units : [ 'Unit1', 'Unit2', 'Unit3' ]
						}, {
							id : '2',
							name : 'OptionB',
							units : [ 'Unit1', 'Unit2' ]
						}, {
							id : '3',
							name : '--select--'
						} ],
						// This sets the default value of the select in the ui
						selectedSite : {
							id : '3',
							name : '--select--'
						},
					

					};
	
	    $scope.isError;
	    $scope.renderCharts=function(unit){
	    	$scope.isError=false;
	    	var fileName=$scope.sites.selectedSite.name+'_'+unit;//[siteName_unit]
	    	console.log(fileName);
	  		var dataPieValues=[];
	  		var options=chartService.getoptionsTemplate();
	  		var lineCost=chartService.getLineCostTemplate();
	  	    var eaf=chartService.getEAFTemplate();
	  	    var lineOutPut=chartService.getLineOutPut();
	    	chartService.siteData(fileName).then(function(data){
	    	var data=Papa.parse(data,{header:true,skipEmptyLines:true,dynamicTyping:true});
	    	 console.log(data.data);
	    	 //read and populate values for chart column  data
	    	  $.each(data.data,function(i,val){
	    								      var pieObject = {
	    									first : val.PROCESSFIXES,
	    									second : val.SENSORAVAILABILITY,
	    									third : val.HARDWAREFIXES
	    								};
	    				  options.series[0].data.push(val.FODLOSSES);
	    				  options.series[1].data.push(val.POTENTIALFODFORECASET);
	    			      lineCost.series[0].data.push(val.ACTUALOMCOST);
	    			      lineCost.series[1].data.push(val.POTENTIALOMCOST);
	    			      eaf.series[0].data.push(val.ACTUALEAF);
	    			      eaf.series[1].data.push(val.POTENTIALEAF);
	    			      lineOutPut.series[0].data.push(val.ACTUALOUTPUT);
	    			      lineOutPut.series[1].data.push(val.POTENTIALOUTPUT);
	    				  // while  populating column data points also read data points for piechart 
	    				  dataPieValues.push(pieObject);
	    			 
	    	 		});
	    	console.log(dataPieValues);
	    	console.log(lineCost.series[1].data);
	    		 
	    		  $.each(dataPieValues,function(i,val){
	    			  var index=2;
	    		
	    			  options.series[index+i].data[0].y=val.first;
	    		options.series[index+i].data[1].y=val.second;
	    		options.series[index+i].data[2].y=val.third;
	    		  });
	    		  
	    	
	    		  Highcharts.chart('container1',options);
	    		  Highcharts.chart('container2',lineCost);
	    		  Highcharts.chart('container3',eaf);
	    		  Highcharts.chart('container4', lineOutPut);
	    		  Highcharts.chart('container5', {
	    			    chart: {
	    			        type: 'waterfall'
	    			    },

	    			    title: {
	    			        text: 'MWHr Recovery Roadmap'
	    			    },

	    			    xAxis: {
	    			        type: 'category'
	    			    },

	    			    yAxis: {
	    			        title: {
	    			            text: 'MWHr'
	    			        }
	    			    },

	    			    legend: {
	    			        enabled: false
	    			    },

	    			    tooltip: {
	    			        pointFormat: '<b>{point.y:,.2f}</b>MWHr'
	    			    },

	    			    series: [{
	    			        
	    			        color: Highcharts.getOptions().colors[5],
	    			        data: [{
	    			            name: 'Additional sensors',
	    			            y: 17752,
	    			            color: Highcharts.getOptions().colors[2]
	    			        }, {
	    			            name: 'Additional analytics',
	    			            y: 62139,
	    			            color: Highcharts.getOptions().colors[3]
	    			        }, {
	    			            name: 'Additional sensor and anlytics',
	    			            isIntermediateSum: true,
	    			            color: Highcharts.getOptions().colors[4]
	    			        }],
	    			        dataLabels: {
	    			            enabled: true,
	    			            style: {
	    			                fontWeight: 'bold'
	    			            }
	    			        },
	    			        pointPadding: 0
	    			    }]
	    			});
	    			 
	    	 },function onRejected(){
	    		 $scope.isError=true;
	    		 console.log($scope.isError);
	    	 });
	  	
	    	
	    };
	    
	  $scope.clear=function(unit){
		  console.log("got the selectUnit"+unit);
		  $scope.selectedUnit="";
		  console.log("cleared the selected unit"+$scope.selectedUnit);
	  };
	  
	
	});