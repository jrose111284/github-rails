githubUserSearch.factory('Search', ['$http', 'access_token', function($http, access_token) {
  var queryUrl = 'https://api.github.com/search/users';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'access_token': access_token,
          'q': searchTerm
        }
      });
    }
	}
}]);
