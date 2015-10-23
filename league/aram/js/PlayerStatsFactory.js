app.factory('PlayerStatsFactory', function($http){
	console.log("Stat Factory Running!");
	return function(){
		return $http.get('https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/28471872/summary?season=SEASON2015&api_key=36d81022-aef0-4340-bd84-b87ec97813de')
		.then (function(champData){
			return champData.data;
		},
		function(error){
			console.log(error);
		});
	}
})