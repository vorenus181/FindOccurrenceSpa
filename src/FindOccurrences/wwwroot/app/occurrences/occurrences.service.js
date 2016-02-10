var OccurrenceService = function ($http) {
	function getOccurrences(sentence) {
    	var url = '/api/sentence';
        var data = { Text: sentence };
        return $http.post(url, data);
	}

	return {
		getOccurrences: getOccurrences
	}
}

OccurrenceService.$inject = ['$http'];

angular.module('FindOccurrences')
    .service('OccurrenceService', OccurrenceService);

