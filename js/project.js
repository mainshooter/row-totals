var row = [
  [9,21,14,43],
  [11,5,27],
  [29,17,6],
  [29,1,5,9],
];

var rowCounter;

(function() {
  rowCounter = {
    oneRow: function(rowNumber) {
      var teller = 0;
      row[rowNumber].forEach(function(value, index, arr) {
        teller = teller + parseFloat(value);
      });
      return(teller);
    },
    allRows: function() {
      var teller = 0;
      row.forEach(function(rowArray, index, arr) {
        rowArray.forEach(function(value, index, arr) {
          teller = teller + parseFloat(value);
        });
      });
      return(teller);
    }
  }
})();
