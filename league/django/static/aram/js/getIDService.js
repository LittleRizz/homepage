app.factory('getIDService', function ($http, $q) {
	var data = {
		summoner: {},
		getNewSummoner: function (id) {
			data.summoner = {};
			if (data.cache[id]) {
				data.summoner = data.cache[id];
				return $q.when(data.cache[id]);
			}
			return $http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + AC.jellybaby + '?api_key=36d81022-aef0-4340-bd84-b87ec97813de' + id)
			.then(function (httpData) {
				var summoner = httpData.data;
				data.summoner = data.cache[id] = summoner;
				return summoner;
			});
		},
		cache: {}
	};
	return data;
});