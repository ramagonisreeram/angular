/**
 * http://usejsdoc.org/
 */
_appModule.factory('chartService',['$q','$http',function($q,$http){
	var networkCall = function(request){
		var deferred  = $q.defer();  
		$http.get(request.url).then(function successCallback(response) {
				deferred.resolve(response.data);
			}, function errorCallback(status, error) {
				console.error("Data could not Be Retrieved. ERROR: Could not find data source. "+status);
				 deferred.reject(error);
			});
		return deferred.promise;
	};
	 return {
	    	siteData: function(fileName){
	    		
	    		var requestObj = {
	    				url: "../mockData/"+fileName+".csv"
	    			};
				return networkCall(requestObj);
			},
			
			getoptionsTemplate: function(){
				var options={
					    title: {
					        text: 'Indranuyu Site Comparision'
					    },
					    xAxis: {
					        categories: ['2014', '2015', '2016', '2017']
					    },
					    yAxis: {
					        title: {
					            text: 'MWHr*(1000)'
					        }
					    },
					    labels: {
					        items: [{
					            html: '',
					            style: {
					                left: '50px',
					                top: '18px',
					                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
					            }
					        }]
					    },
					    series: [{
					        type: 'column',
					        name: 'FO/D Losses',
					        data: []
					    }, {
					        type: 'column',
					        name: 'potential FO/D forecast',
					        data: []
					        
					    }, {
					        type: 'pie',
					        name: 'Total consumption',
					        data: [{
					            name: 'process fixes',
					            y: 0,
					            color: Highcharts.getOptions().colors[4] // Jane's color
					        }, {
					            name: 'sensor availability',
					            y: 0,
					            color: Highcharts.getOptions().colors[5] // John's color
					        }, {
					            name: 'hardware fixes',
					            y: 0,
					            color: Highcharts.getOptions().colors[6] // Joe's color
					        }],
					        center: [100, 40],
					        size: 50,
					        showInLegend: true,
					        dataLabels: {
					            enabled: false
					        }
					    },{
					        type: 'pie',
					        name: 'Total consumption',
					        data: [{
					            name: 'process fixes',
					            y: 0,
					            color: Highcharts.getOptions().colors[4] // Jane's color
					        }, {
					            name: 'sensor availability',
					            y: 0,
					            color: Highcharts.getOptions().colors[5] // John's color
					        }, {
					            name: 'hardware fixes',
					            y: 0,
					            color: Highcharts.getOptions().colors[6] // Joe's color
					        }],
					        center: [220,40],
					        size: 50,
					        showInLegend: false,
					        dataLabels: {
					            enabled: false
					        }
					    },{
					        type: 'pie',
					        name: 'Total consumption',
					        data: [{
					            name: 'process fixes',
					            y: 0,
					            color: Highcharts.getOptions().colors[4] // Jane's color
					        }, {
					            name: 'sensor availability',
					            y: 0,
					            color: Highcharts.getOptions().colors[5] // John's color
					        }, {
					            name: 'hardware fixes',
					            y: 0,
					            color: Highcharts.getOptions().colors[6] // Joe's color
					        }],
					        center: [340,40],
					        size: 50,
					        showInLegend: false,
					        dataLabels: {
					            enabled: false
					        }
					    },{
					        type: 'pie',
					        name: 'Total consumption',
					        data: [{
					            name: 'process fixes',
					            y: 0,
					            color: Highcharts.getOptions().colors[4] // Jane's color
					        }, {
					            name: 'sensor availability',
					            y: 0,
					            color: Highcharts.getOptions().colors[5] // John's color
					        }, {
					            name: 'hardware fixes',
					            y: 0,
					            color: Highcharts.getOptions().colors[6] // Joe's color
					        }],
					        center: [460,40],
					        size: 50,
					        showInLegend: false,
					        dataLabels: {
					            enabled: false
					        }
					    }]
					};
				return options;
			},
			
			getLineCostTemplate: function(){
				var options={

					    title: {
					        text: 'Potential Reduction in O&M Cost'
					    },

					    subtitle: {
					        text: 'Source: thesolarfoundation.com'
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
					        name: 'Actual O&M',
					        data: []
					    }, {
					        name: 'potential O&M',
					        data: []
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
			},
			
			getEAFTemplate: function(){
				var options={

					    title: {
					        text: 'Potential improvement of EAF'
					    },

					    yAxis: {
					        title: {
					            text: '%'
					        }
					    },
					    
					    plotOptions: {
					        series: {
					            pointStart: 2014
					        }
					    },
					      showInLegend: true,

					    series: [{
					        name: 'Actual EAF (%)',
					        data: []
					    }, {
					        name: 'potential EAF (%)',
					        data: []
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
			},
			
			getLineOutPut: function(){
				var options={

					    title: {
					        text: 'Potential Improvement in output'
					    },

					    yAxis: {
					        title: {
					            text: 'MWHr'
					        }
					    },
					       showInLegend: true,

					    plotOptions: {
					        series: {
					            pointStart: 2014
					        }
					    },

					    series: [{
					        name: 'Actual output (MWHr)',
					        data: []
					    }, {
					        name: 'potential output (MWHr)',
					        data: []
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
			}
			
			
	    };
	
}]);