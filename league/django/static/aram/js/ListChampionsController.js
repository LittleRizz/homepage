//This controller will list all of the current champions in the game
app.controller("ListChampionsController", function($scope, HeroListFactory, $http){
	var self = this;
	console.log("working");
	self.clickgo = function(SumName){
		SummonerName = SumName.replace(/ /g, '').toLowerCase();
		console.log(SummonerName);
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
				console.log("Starting Stat Retrieval using ID ", self.sumID, "...");
				$http.get('https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/' + self.sumID + '/summary?season=SEASON2015&api_key=36d81022-aef0-4340-bd84-b87ec97813de').
					success(function(statData){
						self.stats = statData.playerStatSummaries;
						console.log(self.stats);
						return self.stats;
					}).
					error(function(error){
						console.log(error);
					})
			})
	};

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
})