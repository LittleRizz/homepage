app.controller('ARAMController', function($scope, $http, HeroListFactory, StaticHeroesFactory, StaticEnemiesFactory, StaticESumFactory, StaticFSumFactory){
	console.log("ARAM Controller Online");
	var self = this;
	self.predictARAM = function(SumName){
		SummonerName = SumName.replace(/ /g, '').toLowerCase();
		$http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + SummonerName + '?api_key=36d81022-aef0-4340-bd84-b87ec97813de').
			success(function(data){
				self.beefStew = data[SummonerName];
				console.log(self.beefStew.id);
				self.sumID = self.beefStew.id;
				return self.sumID
			}).
			error(function(error){
				console.log(error);
			}).
			then(function(){
				console.log("Getting Current Match Stats...");
				$http.get('https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/' + self.sumID + '/recent?api_key=36d81022-aef0-4340-bd84-b87ec97813de').
					success(function(gameData){
						self.lotsa = Object.keys(gameData.games[0].fellowPlayers).map(function (key) {
							var po = gameData.games[0].fellowPlayers[key];
							po.key = key;
							return po; 
						});
						console.log(self.lotsa);
						return self.lotsa;
					}).
					error(function(error){
						console.log(error);
					})
			}).
			then(function(){
				self.summonerList = [];
				console.log(self.lotsa);
				console.log(self.summonerList);
			})
	};
	self.team1 = 100;
	self.team2 = 200;
	HeroListFactory()
	.then(function (data){
		self.champs = Object.keys(data.data).map(function (key) {
			var o = data.data[key];
			o.key = key;
			return o;
		});
		console.log("done");
		console.log(self.champs);
	});
});



