app.factory('tableService', ['$http', function ($http) {
    return {
        list: function () {
            return $http.get('/api/table');
        },
        update: function (data) {
            return $http.post('/api/table', data)
        }
    }
}]);