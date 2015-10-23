app.factory('HeroListFactory', function( $http ){
	console.log("get hero list running");
	return function(){
		return $http.get('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=altimages&api_key=36d81022-aef0-4340-bd84-b87ec97813de')
		.then (function(champData){
			return champData.data;
		},
		function(error){
			console.log(error);
		});
	}
})