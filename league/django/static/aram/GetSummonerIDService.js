app.service('GetSummonerIdService', function(){
    var SummonerID = this;
    return function(){
        return $http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/littlerizz?api_key=36d81022-aef0-4340-bd84-b87ec97813de')
        .then (function(champData){
            SummonerID.number = champData.data;
            console.log(SummonerID.number);
        },
        function(error){
            console.log(error);
        });
    }
});