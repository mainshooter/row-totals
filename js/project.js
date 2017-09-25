var row = [
  [9,21,14,43],
  [11,5,27],
  [29,17,6],
  [29,1,5,9],
];

var rowCounter;

(function() {
  rowCounter = {
    oneRow: function(rowNumber = false) {
      if (rowNumber != false) {
        if (rowNumber < row.length -1) {
          var teller = 0;
          row[rowNumber].forEach(function(value, index, arr) {
            teller = teller + parseFloat(value);
          });
          return(teller);
        }

        else {
          console.log("We don't have that place in our array!");
        }

      }

      else {
        console.log("No number");
      }

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
