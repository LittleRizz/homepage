app.controller('hypothetical', function ($scope, getIDService) {
	var H = this;
	H.summoner = getIDService.summoner;
	$scope.$watch('H.text', getIDService.getNewSummoner);
});

<div ng-controller="hypothetical as H">

	<input ng-model="H.text" ng-model-options="{debounce: 500}">

</div>