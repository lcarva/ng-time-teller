/*global angular:true */

angular.module('ng-time-teller', [])

.service('TimeTeller', function() {

  var en = {
    'hour': {
      '0': 'midnight',
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine',
      '10': 'ten',
      '11': 'eleven',
      '12': 'noon',
      '13': 'one',
      '14': 'two',
      '15': 'three',
      '16': 'four',
      '17': 'five',
      '18': 'six',
      '19': 'seven',
      '20': 'eight',
      '21': 'nine',
      '22': 'ten',
      '23': 'eleven'
    },
    'minute': {
      '0': '${hour} o\'clock',
      '5': 'five past ${hour}',
      '10': 'ten past ${hour}',
      '15': 'quarter past ${hour}',
      '20': 'twenty past ${hour}',
      '25': 'twenty-five past ${hour}',
      '30': 'half past ${hour}',
      '35': 'twenty-five to ${nextHour}',
      '40': 'twenty to ${nextHour}',
      '45': 'quarter to ${nextHour}',
      '50': 'ten to ${nextHour}',
      '55': 'five to ${nextHour}'
    },
    'hourException': {
      '0': true,
      '12': true
    }
  };

  // TODO: Add ability to set locale.
  var locale = en;

  var roundFive = function(n) {
    return Math.round(n/5)*5;
  };

  var tell = function(date) {
    var rawMinutes = date.getMinutes();
    var minute = locale.minute[roundFive(rawMinutes)];
    var rawHour = date.getHours();
    var hour = locale.hour[rawHour];
    var nextHour = locale.hour[rawHour + 1];

    var start = locale.hourException[rawHour] ? hour : minute;

    var result = start.replace('${minute}', minute)
                      .replace('${hour}', hour)
                      .replace('${nextHour}', nextHour);

    return result;
  };

  return tell;
});
