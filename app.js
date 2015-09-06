function Tweet($scope, $http) {
	$http.jsonp('http://urls.api.twitter.com/1/urls/count.json\?url\=http://virtualgeek.typepad.com/virtual_geek/2015/08/openstack-cinder-vipr-whats-the-scoop.html&callback=JSON_CALLBACK').
	success(function(data) {
		$scope.tweetCount = data;
	});
}
