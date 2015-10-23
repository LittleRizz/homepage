
//This API call pulls the stats of a given summoner id  (NOT SUMMONER NAME)
.factory('CurrentGame', function( $http ){
	console.log('currentGame api starting');
	return function(){
		return $http.get("https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/" + summonerID + "?api_key=36d81022-aef0-4340-bd84-b87ec97813de")
		.then (function(cgameData){
			return cgameData.data;
		},
		function(error) {
			console.log(error);
		});
	}
})


