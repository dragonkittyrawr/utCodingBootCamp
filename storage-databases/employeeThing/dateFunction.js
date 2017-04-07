


var startDate = "01/01/1970";


var since = moment(startDate, 'MM/DD/YYYY').startOf().fromNow();

console.log(since);

var months = parseInt(since) * 12;

console.log(months);

