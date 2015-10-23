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
				self.lotsa = StaticHeroesFactory;
				return self.lotsa;
			}).
			then(function(){
				self.tonsa = StaticEnemiesFactory;
				return self.tonsa;
			}).
			then(function(){
				self.Elist = StaticESumFactory;
				return self.Elist;
			}).
			then(function(){
				self.Flist = StaticFSumFactory;
				return self.Flist;
			}).
			then(function(){
				self.FScore = 'Overall Ranking: 437';
				return self.FScore;
			}).
			then(function(){
				self.Escore = 'Overall Ranking: 291';
				return self.Escore;
			}).
			then(function(){
				self.SummonName = SumName;
				return self.SummonName;
			}).
			then(function(){
				self.winner = 'Team 1 is the Predicted Winner!';
				return self.winner;
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