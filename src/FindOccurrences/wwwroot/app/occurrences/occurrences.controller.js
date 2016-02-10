var OccurrencesController = function ($scope, OccurrenceService, logger) {
    var self = this;

    self.sentence = 'Write some sentence here...';
    self.occurrences = [];

    self.findOccurrences = function () {
        self.occurrences = new Array();

        OccurrenceService
           .getOccurrences(this.sentence)
           .then(function (response) {
               if (response) {
                   for (var i = 0; i < response.data.length; i++) {
                       var occurrence = response.data[i];
                       self.occurrences.push({ text: occurrence.text, number: occurrence.number });
                   }
               }
           }, function (error) {
               logger.logError(error);
           });
    }
}

OccurrencesController.$inject = ['$scope', 'OccurrenceService', 'logger'];

angular.module('FindOccurrences')
    .controller('OccurrencesController', OccurrencesController);


