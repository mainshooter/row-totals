var row = [
  [9,21,14],
  [11,5,27],
  [29,17,6]
];

var rowCounter;

(function() {
  rowCounter = {
    oneRow: function(rowNumber) {
      var teller = 0;
      row.forEach(function(value, index, arr) {
        teller = teller + value;
      });
      return(teller);
    }
  }
})();
